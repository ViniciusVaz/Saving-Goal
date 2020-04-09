import * as React from 'react';
import { mount } from 'enzyme';
import App from '../src/App';

import { MemoryRouter } from 'react-router';
import Home from '../src/pages/Home';
import SavingGoal from '../src/pages/Home/components/SavingGoal';
import { mapMonth } from '../src/utils/helpers';

const increaseMount = (initial: number, current: number) => {
  if ((initial === 0 && current === 11) || current < initial) {
    return true;
  } else {
    return false;
  }
};

describe('App', () => {
  it('Render Component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });
  it('Decrease Month', () => {
    const wrapper = mount(<SavingGoal />);
    const el = wrapper.find('.form__icon--left');
    const initialMonth = wrapper.find('.form__date-month').props().children;
    const monthIndex = mapMonth.findIndex(i => i === initialMonth);

    el.simulate('click');

    const currentMonth = wrapper.find('.form__date-month').props().children;
    const currentIndex = mapMonth.findIndex(i => i === currentMonth);

    expect(increaseMount(monthIndex, currentIndex)).toBeTruthy();
  });
  it('Increase Month', () => {
    const wrapper = mount(<SavingGoal />);
    const el = wrapper.find('.form__icon--right');
    const initialMonth = wrapper.find('.form__date-month').props().children;
    const monthIndex = mapMonth.findIndex(i => i === initialMonth);

    el.simulate('click');

    const currentMonth = wrapper.find('.form__date-month').props().children;
    const currentIndex = mapMonth.findIndex(i => i === currentMonth);

    expect(increaseMount(monthIndex, currentIndex)).toBeFalsy();
  });
  it('Validate calc safe per month', () => {
    const wrapper = mount(<SavingGoal />);

    const monthsToGo = wrapper.find('.saving-goal__info>span').get(0).props
      .children[0];
    const goalAmount = wrapper.find('.saving-goal__info>span').get(1).props
      .children[1];
    const currentSafePerMonth = wrapper
      .find('.resume__value')
      .props()
      .children.toString()
      .split('$,')[1];

    const goalFormated = goalAmount.replace(/,/gm, '');
    const currentSafeFormated = currentSafePerMonth.replace(/,/gm, '');

    const safePerMonth = (goalFormated / monthsToGo).toFixed(2);

    expect(currentSafeFormated === safePerMonth).toBeTruthy();
  });
  it('Input goal should accept only numbers', () => {
    const wrapper = mount(<SavingGoal />);

    //Set a negative value
    wrapper
      .find('.form__input')
      .simulate('change', { target: { value: '-200,000.00' } });
    const mustBePositive = wrapper.find('.form__input').props().value;
    const mustBePositiveFormated = Number(
      mustBePositive.toString().replace(/,/gm, '')
    );

    //Set a text
    wrapper
      .find('.form__input')
      .simulate('change', { target: { value: 'aasd' } });
    const mustBeEmpty = wrapper.find('.form__input').props().value;

    expect(mustBePositiveFormated > 0).toBeTruthy();
    expect(mustBeEmpty.toString().length === 0).toBeTruthy();
  });
});
