import React from 'react';
import { render } from '@testing-library/react';
import BoxDraggable from '../components/BoxDraggable.js';

describe('BoxDraggable component', () => {
  it('renders without errors', () => {
    render(
      <BoxDraggable
        id="box1"
        width="100px"
        height="100px"
        color="red"
        selected={false}
        left={0}
        top={0}
      />
    );
  });

  it('applies styles correctly based on props', () => {
    const { getByTestId } = render(
      <BoxDraggable
        id="box1"
        width="100px"
        height="100px"
        color="red"
        selected={true}
        left={10}
        top={20}
      />
    );

    const boxElement = getByTestId('boxDraggable');
    expect(boxElement.style.width).toBe('100px');
    expect(boxElement.style.height).toBe('100px');
    expect(boxElement.style.backgroundColor).toBe('red');
    expect(boxElement.style.outline).toBe('.2rem dashed var(--genially-background-color)');
    expect(boxElement.style.transform).toBe('translate(10px, 20px)');
  });
});
