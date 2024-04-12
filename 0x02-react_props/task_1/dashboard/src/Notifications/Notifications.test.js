import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications.test.js', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);  
  });

  it('should render without crashing', () => {
    expect(wrapper.exists());
  });

  it('should render three list items', () => {
    expect(wrapper.find('li').length).toEqual(3);
  });

  it('should render the text "Here is the list of notifications"', () => {
    expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
  });
})
