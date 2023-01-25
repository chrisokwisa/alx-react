import React from "react";
import Notifications from "./Notifications";
import { shallow } from "enzyme";

describe("Notifications component tests", () => {
  it(" Notifications renders without crashing", () => {
    const notification = shallow(<Notifications />);

    expect(notification).toBeDefined();
  });

  it("renders ul", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("ul")).toBeDefined();
  });

  it("renders three list items", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("li")).toHaveLength(3);
  });

  it("renders the text Here is the list of notifications", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find("p").text()).toEqual(
      "Here is the list of notifications"
    );
  });
});
