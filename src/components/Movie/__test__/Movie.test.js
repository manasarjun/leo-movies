import React from 'react';
import renderer from 'react-test-renderer';

import Movie from '../Movie';

describe('Movie', () => {
  const movie = {
    id: 123,
    title: 'avengers',
    overview: 'avengers',
    poster_path: '467.png',
  };

  const props = {
    isFavouriteItem: true,
    isWatchItem: true,
    isTrending: true,
    movie,
  };

  it('should render Movie', () => {
    const tree = renderer.create(<Movie {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
