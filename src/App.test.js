import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a shallow wrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {object} state - Initial state for setup
 * @returs {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
    const wrapper = shallow(<App {...props} />);
    if (state) wrapper.setState(state);
    return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of the data-test attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`);
};

test('renders without an error', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-app');

    expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'increment-button');

    expect(button.length).toBe(1);
});

test('renders counter display', () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');

    expect(counterDisplay.length).toBe(1);
});

test('counter starts at zero', () => {
    const wrapper = setup();
    const initialCounterState = wrapper.state('counter');

    expect(initialCounterState);
});

test('clicking button increments counter display', () => {
    const counter = 7;
    const wrapper = setup(null, { counter });
    const button = findByTestAttr(wrapper, 'increment-button');

    button.simulate('click');

    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(counter + 1);
});
