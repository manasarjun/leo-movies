import React from "react";
import renderer from "react-test-renderer";

import SearchMovie from "../SearchMovie";

describe("SearchMovie", () => {
  it("should render", () => {
    const tree = renderer.create(<SearchMovie />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
