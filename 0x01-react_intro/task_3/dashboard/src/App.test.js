import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    expect(shallow(<App />).exists());
  });

  it('renders App-header', () => {
    expect(shallow(<App />).find('.App-header').exists());
  });

  it('renders App-body', () => {
    expect(shallow(<App />).find('.App-body').exists());
  });

  it('renders App-footer', () => {
    expect(shallow(<App />).find('.App-footer').exists());
  });
})
