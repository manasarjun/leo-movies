import React from 'react';
import renderer from 'react-test-renderer';

import Provider from '../Provider';


describe('Provider', () => {
  it('should render', () => {
    const tree = renderer.create(<Provider />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
