import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe('Header component', () => {
  it('renders without crashing', () => {
    expect(shallow(<Header />).exists());
  });

  it('renders header', () => {
    expect(shallow(<Header />).find('img').exists());
  });

  it('renders h1', () => {
    expect(shallow(<Header />).find('h1').exists());
  });
});
