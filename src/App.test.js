import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without an error', () => {
    const wrapper = shallow(<App />);
    const appComponent = wrapper.find("[data-test='component-app']");
    expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {});

test('renders counter display', () => {});

test('counter starts at zero', () => {});

test('clicking the button increments counter', () => {});

test('clicking button increments counter display', () => {});
