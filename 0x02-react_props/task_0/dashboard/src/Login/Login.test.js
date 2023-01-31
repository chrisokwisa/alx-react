import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login component', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders 2 input tags and 2 label tags', () => {
    const login = shallow(<Login />);
    expect(login.find('input')).toHaveLength(2);
    expect(login.find('label')).toHaveLength(2);
  });
});