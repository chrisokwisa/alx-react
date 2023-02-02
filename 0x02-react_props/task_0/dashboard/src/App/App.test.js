import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App Component tests", () => {
  it("Renders without crashing", () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
});
