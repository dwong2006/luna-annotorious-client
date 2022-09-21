import ShapeIndex from './ShapeIndex';
import SpatialTree from './SpatialTree';
import type StoreChangeEvent from './StoreChangeEvent';
import type { Shape } from '@/shapes';

/**
 * A common facade across the spatial tree and the YJS shape index.
 * Provides access to underlying query methods and keeps data in sync.^
 */
const Store = () => {

  const tree = new SpatialTree();

  const index = new ShapeIndex();

  const observers = [];

  index.observe(evt => {
    const { keys } = evt.changes;
    
    const added: Shape[] = [];

    const deleted: Shape[] = [];
    
    const updated: Array<{ oldValue: Shape, newValue: Shape }> = [];

    for (const [key, value] of keys.entries()) {
      const { action, oldValue } = value;

      if (action === 'add') {
        added.push(index.get(key));
      } else if (action === 'update') {
        updated.push({ oldValue, newValue: index.get(key) });
      }
    }

    // Update the spatial tree
    tree.set(added, false);
    deleted.forEach(shape => tree.remove(shape));
    updated.forEach(({ oldValue, newValue }) => tree.update(oldValue, newValue));

    // Forward event to subscribed observers
    observers.forEach(observer => observer({ added, deleted, updated }));
  });

  const add = (shape: Shape) =>
    index.add(shape);

  const all = (): Shape[] =>
    index.all();

  const clear = () =>
    index.clear();

  const get = (id: string): Shape | null =>
    index.get(id);

  const getAt = (x: number, y: number): Shape | null =>
    tree.getAt(x, y);

  const observe = (callback: (evt: StoreChangeEvent) => void) =>
    observers.push(callback);

  const remove = (shape: Shape | string) =>
    index.remove(shape);

  const set = (shapes: Shape[]) =>
    index.set(shapes);

  const setState = (id: string, diff: Object) => {
    const shape = index.get(id);

    if (shape) {
      const updated = {
        ...shape,
        state: {
          ...shape.state,
          ...diff
        }
      }

      index.add(updated);
    }
  }

  const update = (previous: Shape | string, shape: Shape) => {
    const previousShape = typeof previous === 'string' ? index.get(previous) : previous; 
    index.update(previousShape, shape);
  }

  const bulkUpsert = (shapes: Shape[]) =>
    index.bulkUpsert(shapes);

  return {
    add, all, bulkUpsert, clear, get, getAt, observe, remove, set, setState, update
  }

}

export default Store();