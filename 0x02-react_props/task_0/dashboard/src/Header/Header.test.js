import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header component", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it("renders img and h1 tags", () => {
    const header = shallow(<Header />);
    expect(header.find("img")).tohaveLength(1);
    expect(header.find("h1")).tohaveLength(1);
  });
});
