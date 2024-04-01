import type { OpenSeadragonAnnotator, W3CAnnotation } from '@annotorious/openseadragon';
import { LunaPopup } from './popup';
import type { LunaPluginOpts } from './LunaPluginOpts';

export class LunaPlugin {

  anno: OpenSeadragonAnnotator<W3CAnnotation>;

  opts: LunaPluginOpts;

  popup: LunaPopup | undefined;
  
  isEditing: boolean | undefined;

  beforeEdit: W3CAnnotation | undefined;

  constructor(anno: OpenSeadragonAnnotator<W3CAnnotation>, opts: LunaPluginOpts = {}) {
    this.anno = anno;

    this.opts = opts;

    let lastEvent: PointerEvent;

    document.body.addEventListener('pointermove', event => lastEvent = event);

    anno.on('clickAnnotation', (annotation, evt) => {
      console.log('click', annotation, evt);
      if (!this.isEditing) {  
        if (annotation) {
          this.showPopup(annotation, evt, false);
        } else {
          this.hidePopup();
        }
      }
    });

    anno.on('createAnnotation', (annotation) => {
      this.showPopup(annotation, lastEvent, true);
    });

    document.addEventListener('keydown', (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        // Cancel on Escape key
        this.isEditing = false;

        this.hidePopup();

        this.anno.setSelected();
        
        if (typeof exitEditMode === 'function') {
          // Call the outside function
          exitEditMode();
        } 
      }
    });
  }

  showPopup = (annotation: W3CAnnotation, originalEvent: PointerEvent, editable: Boolean) => {

    if (this.popup)
      this.hidePopup();

    this.beforeEdit = annotation;
  
    this.popup = new LunaPopup({
      target: document.body,
      props: { 
        annotation,
        originalEvent,
        user: this.anno.getUser(),
        opts: this.opts,
        state: this.anno.state,
        viewer: this.anno.viewer,
        editable: editable
      }
    });

    this.popup.setPosition(annotation.id);

    this.popup.$on('confirm', (evt: CustomEvent<WebAnnotation>) => {
      this.isEditing = false;

      this.hidePopup();

      this.anno.updateAnnotation(evt.detail);
    });

    this.popup.$on('save', (evt: CustomEvent<W3CAnnotation>) => {
      this.isEditing = false;

      this.hidePopup();

      if (typeof exitEditMode === 'function') {
        // Call the outside function
        exitEditMode(this.anno);
      } 

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

      // Revert changes
      this.anno.updateAnnotation(this.beforeEdit);

      this.hidePopup();
      this.anno.setSelected();
    });

    this.popup.$on('edit', () => {
      this.isEditing = true;

      this.anno.setSelected(annotation.id);
    });

    this.popup.$on('delete', () => {
      this.isEditing = false;

      this.hidePopup();

      this.anno.removeAnnotation(annotation);
    });
  }

  hidePopup = () => {
    this.beforeEdit = undefined;

    if (this.popup) {
      this.popup.$destroy();
      this.popup = undefined;
    } 
  }

}