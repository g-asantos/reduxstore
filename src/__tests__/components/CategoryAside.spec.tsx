/* eslint-disable prettier/prettier */
import React from 'react';
import renderer from 'react-test-renderer';
import CategoryAside from '../../components/CategoryAside'






describe('CategoryAside', () => {
  let component: any;
  let setProducts: any;

  beforeEach(() => {

    setProducts = jest.fn()

    component = renderer.create(

      <CategoryAside setProducts={setProducts} products={[]} />
    );
  });

  it('should dispatch an action on button click', () => {
    const button = component.root.findAllByType('button')[0]

    renderer.act(() => {
      button.props.onClick();
    });

    expect(setProducts).toHaveBeenCalledTimes(1)
  })

})
