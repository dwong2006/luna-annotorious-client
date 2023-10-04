import type { OpenSeadragonAnnotator, W3CAnnotation } from '@annotorious/openseadragon';
import { LunaPopup } from './popup';
import type { LunaPluginOpts } from './LunaPluginOpts';

export class LunaPlugin {

  anno: OpenSeadragonAnnotator<W3CAnnotation>;

  opts: LunaPluginOpts;

  popup: LunaPopup;
  
  isEditing: boolean;

  constructor(anno: OpenSeadragonAnnotator<W3CAnnotation>, opts: LunaPluginOpts = {}) {
    this.anno = anno;

    this.opts = opts;

    anno.on('clickAnnotation', (annotation, evt) => {
      if (!this.isEditing) {  
        if (annotation)
          this.showPopup(annotation, evt);
        else
          this.hidePopup();
      }
    });

    document.addEventListener('keydown', (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        // Cancel on Escape key
        this.isEditing = false;

        this.hidePopup();

        // this.anno.deselectAll();
      }
    });
  }

  showPopup = (annotation: W3CAnnotation, originalEvent: PointerEvent) => {
    if (this.popup)
      this.hidePopup();
  
    this.popup = new LunaPopup({
      target: document.body,
      props: { 
        annotation,
        originalEvent,
        anno: this.anno,
        opts: this.opts
      }
    });

    this.popup.$on('confirm', (evt: CustomEvent<W3CAnnotation>) => {
      this.isEditing = false;

      this.hidePopup();

      // this.anno.updateAnnotation(evt.detail.id, evt.detail);
    });

    this.popup.$on('save', (evt: CustomEvent<W3CAnnotation>) => {
      this.isEditing = false;

      this.hidePopup();

      // Merge modified annotation bodies from the popup with
      // latest target from the annotation layer
      const latestState = this.anno.getAnnotationById(annotation.id);

      const updated = {
        ...evt.detail,
        target: {
          ...latestState.target
        }
      }

      // this.anno.updateAnnotation(evt.detail.id, updated);
    });

    this.popup.$on('cancel', () => {
      this.isEditing = false;

      this.hidePopup();

      // this.anno.deselectAll();
    });

    this.popup.$on('edit', () => {
      this.isEditing = true;

      // this.anno.selectAnnotation(annotation);
    });

    this.popup.$on('delete', () => {
      this.isEditing = false;

      this.hidePopup();

      this.anno.removeAnnotation(annotation);
    });
  }

  hidePopup = () => {
    if (this.popup) {
      this.popup.$destroy();
      this.popup = null;
    } 
  }

}