import React, { useState } from 'react';
import Academy from '../../../../icons/home.svg'
import logic from './logic'

import './index.scss';

const SavingGoal = () => {
  const { monthDiffy, yearGoal, monthGoal, mounthlyAmount, goalAmount, goalAmountChange, nextMonth, prevMonth } = logic()

  return (
    <div className="saving-goal">
      <img src={Academy} alt="" className="saving-goal__image"/>
      <h2 className="saving-goal__title">
        Buy a house
      </h2>
      <p className="saving-goal__subtitle">
        Saving goal
      </p>
      <div className="saving-goal__form form">
        <div className="form__container">
          <label htmlFor="" className="form__label">
            Total amount
          </label>
          <input type="tel" className="form__input" value={goalAmount} onChange={goalAmountChange}/>
        </div>
        <div className="form__container">
          <label htmlFor="" className="form__label">
            Reach goal by
          </label>
          <div className="form__group">
            <div className="form__icon form__icon--arrow" onClick={prevMonth} />
            <div className="form__date">
              <span>{monthGoal}</span>
              <span>{yearGoal}</span>
            </div>
            <div className="form__icon form__icon--right" onClick={nextMonth} />
            {/* <input type="month" className="form__input" /> */}
          </div>
        </div>
      </div>
      <div className="saving-goal__resume resume">
        <div className="resume__amount">
          <p className="resume__text">
            Monthly amount
          </p>
          <p className="resume__value">
            ${mounthlyAmount}
          </p>
        </div>
        <div className="saving-goal__disclaimer">
          <p className="saving-goal__info">
            You’re planning <span>{monthDiffy} monthly deposits</span> to reach your <span>${goalAmount}</span> goal by <span>{monthGoal} {yearGoal}.</span>
          </p>
        </div>
      </div>
      <button className="saving-goal__button">
        Confirm
      </button>
    </div>
  )
}

export default SavingGoal
