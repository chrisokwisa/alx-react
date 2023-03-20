/**
 * @jest-environment jsdom
 */
import { shallow, mount } from "enzyme";
import React from "react";
import Footer from "./Footer";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { AppContext } from "../App/AppContext";

describe("Footer test", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('Footer component renders "Copyright ${getFullYear()} - ${getFooterCopy(true)}"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("div.footer p")).toHaveLength(1);
    expect(wrapper.find("div.footer p").text()).toContain("Copyright");
  });

  it("Tests that there is no link rendered when user is logged out within context", () => {
    const wrapper = shallow(<Footer user={null} />);
    expect(wrapper.find("div.footer a")).toHaveLength(0);
  });

  it("Tests that there is a link rendered when user is logged in within context", () => {
    const wrapper = shallow(
      <Footer user={{ email: "link@gmail.com", password: "password123" }} />
    );
    expect(wrapper.find("div.footer a")).toHaveLength(1);
    expect(wrapper.find("div.footer a").text()).toEqual("Contact us");
  });
});
