import React from 'react';
import renderer from 'react-test-renderer';

import MovieFilter from '../MovieFilter';

describe('MovieFilter', () => {
  it('should dispaly message', () => {
    const tree = renderer.create(<MovieFilter searchKeyword='' />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render Movie', () => {
    const tree = renderer.create(<MovieFilter searchKeyword='movie' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
