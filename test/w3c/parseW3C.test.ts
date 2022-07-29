import { describe, it, expect } from 'vitest';

import { ShapeType } from '../../src/shapes';
import { parseW3C } from '../../src/w3c';

import { Annotations } from './Fixtures';

describe('parseW3C', () => {

  it('should parse the sample annotations correctly', () => {
    const { parsed, failed } = parseW3C(Annotations);

    expect(parsed.length).toBe(Annotations.length);
    expect(failed.length).toBe(0);

    const [ polygon, rectangle ] = parsed;

    expect(polygon.type).toBe(ShapeType.POLYGON);
    expect(rectangle.type).toBe(ShapeType.RECTANGLE);
  });

});