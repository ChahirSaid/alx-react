import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe('NotificationItem component', () => {
  it('renders without crashing', () => {
    expect(shallow(<NotificationItem />).exists());
  });

  it('renders correct type', () => {
    const wrapper = shallow(<NotificationItem type="default" />);
    expect(wrapper.find('[data-notification-type="default"]').exists());
  });

  it('renders correct value', () => {
    const wrapper = shallow(<NotificationItem value="test" />);
    expect(wrapper.text()).toEqual('test');
  });

  it('renders correct html', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    const li = wrapper.find('li');
    expect(li.html()).toEqual('<li><u>test</u></li>');
  });
});
