import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe('Footer component', () => {
  it('renders without crashing', () => {
    expect(shallow(<Footer />).exists());
  });

  it('renders p', () => {
    expect(shallow(<Footer />).find('p').exists());
  });
})
