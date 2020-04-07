import React, { useState } from 'react';
import Home from '../../../../icons/home.svg'
import Money from '../../../../icons/money.svg'
import Arrow from '../../../../icons/arrow.svg'
import logic from './logic'

import './index.scss';

const SavingGoal = () => {
  const { monthDiffy, yearGoal, monthGoal, mounthlyAmount, goalAmount, goalAmountChange, nextMonth, prevMonth, errorMessage } = logic()

  return (
    <div className="saving-goal">
      <img src={Home} alt="" className="saving-goal__image"/>
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
          <div className="form__group">
            <div className="form__icon">
              <img src={Money} alt=""/>
            </div>
            <input type="tel" className="form__input" value={goalAmount} onChange={goalAmountChange}/>
          </div>
        </div>
        <div className="form__container">
          <label htmlFor="" className="form__label">
            Reach goal by
          </label>
          <div className="form__group">
            <div className={`form__icon ${errorMessage ? 'form__icon--disabled' : '' }`} onClick={prevMonth}>
              <img src={Arrow} alt=""/>
            </div>
            <div className="form__date">
              <span className="form__date-month">{monthGoal}</span>
              <span className="form__date-year">{yearGoal}</span>
            </div>
            <div className="form__icon form__icon--right" onClick={nextMonth}>
              <img src={Arrow} alt=""/>
            </div>
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
