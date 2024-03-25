import type Annotorious from '@annotorious/openseadragon';
import type { WebAnnotation } from '@annotorious/formats';
import { LunaPopup } from './popup';
import type { LunaPluginOpts } from './LunaPluginOpts';

export class LunaPlugin {

  anno: Annotorious;

  opts: LunaPluginOpts;

  popup: LunaPopup;
  
  isEditing: boolean;

  constructor(anno: Annotorious, opts: LunaPluginOpts = {}) {
    this.anno = anno;

    this.opts = opts;

    anno.on('pointerdown', (annotation, evt) => {
      if (!this.isEditing) {  
        if (annotation)
          this.showPopup(annotation, evt);
        else
          this.hidePopup();
      }
    });

    anno.on('endSelection', (pt) => {
      console.log('endselection');
      this.showPopup({}, pt);
      
    });

    document.addEventListener('keydown', (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        // Cancel on Escape key
        this.isEditing = false;

        this.hidePopup();

        this.anno.deselectAll();
      }
    });
  }

  showPopup = (annotation: WebAnnotation, originalEvent: PointerEvent) => {
    if (this.popup)
      this.hidePopup();
  
    this.popup = new LunaPopup({
      target: document.body,
      props: { 
        annotation,
        originalEvent,
        user: this.anno.getUser(),
        opts: this.opts,
        state: this.anno.state,
        viewer: this.anno.viewer,
        editable: true
      }
    });

    this.popup.setPosition(annotation.id);

    this.popup.$on('confirm', (evt: CustomEvent<WebAnnotation>) => {
      this.isEditing = false;

      this.hidePopup();

      this.anno.updateAnnotation(evt.detail.id, evt.detail);
    });

    this.popup.$on('save', (evt: CustomEvent<WebAnnotation>) => {
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

      //this.anno.updateAnnotation(evt.detail.id, updated);
      this.anno.updateAnnotation(updated);
    });

    this.popup.$on('cancel', () => {
      this.isEditing = false;

      this.hidePopup();

      this.anno.deselectAll();
    });

    this.popup.$on('edit', () => {
      this.isEditing = true;

      this.anno.selectAnnotation(annotation);
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