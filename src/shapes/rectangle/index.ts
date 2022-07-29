import { nanoid } from 'nanoid';

import { ShapeType } from '../Shape';
import { registerShapeUtil } from '../ShapeUtils';

import type { Bounds } from '../Bounds';
import type { Shape } from '../Shape';
import type { ShapeUtil } from '../ShapeUtils';

export interface Rectangle extends Shape {

  geometry: {

    x: number

    y: number

    w: number

    h: number,

    bounds: Bounds

  }

}

export const rectangle = (x: number, y: number, w: number, h: number, data?: Object, id?: string): Rectangle => ({
  id: id || nanoid(),
  type: ShapeType.RECTANGLE,
  data,
  geometry: {
    x, y, w, h,
    bounds: {
      minX: x,
      minY: y,
      maxX: x + w,
      maxY: y + h
    }
  },
  state: {}  
});

const RectangleUtil: ShapeUtil<Rectangle> = {

  area: (rect: Rectangle): number =>
    rect.geometry.w * rect.geometry.h,

  intersects: (rect: Rectangle, x: number, y: number): boolean =>
    x >= rect.geometry.x && 
    x <= rect.geometry.x + rect.geometry.w &&
    y >= rect.geometry.y  &&
    y <= rect.geometry.y + rect.geometry.h

}

registerShapeUtil(ShapeType.RECTANGLE, RectangleUtil);