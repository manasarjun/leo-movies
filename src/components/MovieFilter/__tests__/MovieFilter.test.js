import React from 'react';
import renderer from 'react-test-renderer';

import MovieFilter from '../MovieFilter';

describe('MovieFilter', () => {
  it('should render', () => {
    const tree = renderer.create(<MovieFilter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
