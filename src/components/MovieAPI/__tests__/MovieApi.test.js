import React from "react";
import renderer from "react-test-renderer";

import MovieApi from "../MovieApi";

describe("MovieAPI", () => {
  it("should render", () => {
    const tree = renderer.create(<MovieApi />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
