import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe('Login component', () => {
  it('renders without crashing', () => {
    expect(shallow(<Login />).exists());
  });

  it('renders email input', () => {
    expect(shallow(<Login />).find('input[type="email"]').exists());
  });

  it('renders password input', () => {
    expect(shallow(<Login />).find('input[type="password"]').exists());
  });

  it('renders label for email', () => {
    expect(shallow(<Login />).find('label[htmlFor="email"]').exists());
  });

  it('renders label for password', () => {
    expect(shallow(<Login />).find('label[htmlFor="password"]').exists());
  });
});
