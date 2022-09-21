import { writable } from 'svelte/store';
import Store from './store/Store';
import type { Shape } from "@/shapes";

export interface HoverState {

  shape: Shape

  originalEvent: MouseEvent | PointerEvent

}

const Hover = () => {

  const { subscribe, update } = writable<HoverState>();

  const changeHover = (state: HoverState) => update(currentHover => {
    // Update the store only if the hovered shape changed 
    // (change may only affect the event)
    if (currentHover?.shape.id !== state?.shape.id) {
      if (currentHover)
        Store.setState(currentHover.shape.id, { isHovered: false });

      if (state)
        Store.setState(state.shape.id, { isHovered: true });
    }

    return state;
  });

  return { subscribe, set: changeHover };

}

export default Hover();
