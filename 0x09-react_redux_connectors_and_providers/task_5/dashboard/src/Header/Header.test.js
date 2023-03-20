/**
 * @jest-environment jsdom
 */
import React from "react";
import Header from "./Header";
import { mount, shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext } from "../App/AppContext";

const USER = { email: "link@gmail.com", password: "password123" };

describe("<Header />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  describe("Header", () => {
    it("render without crashing", () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.exists()).toEqual(true);
    });
    it("should render a h1", () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.exists("img")).toEqual(true);
      expect(
        wrapper.containsMatchingElement(<h1>School dashboard</h1>)
      ).toEqual(true);
    });

    it(`Tests that logoutSection is not rendered with default context values`, () => {
      const wrapper = shallow(<Header />);

      expect(wrapper.find("#logoutSection")).toHaveLength(0);
    });

    it(`Tests that logoutSection is rendered with context values`, () => {
      const wrapper = shallow(<Header />);

      expect(wrapper.find("#logoutSection")).toHaveLength(0);
    });

    it(`Verifies that the logOut function is called when clicking on logOut link`, () => {
      const wrapper = shallow(<Header user={USER} />);

      expect(wrapper.find("#logoutSection")).toHaveLength(1);
    });
  });
});
