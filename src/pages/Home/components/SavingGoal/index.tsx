import * as React from 'react';
import Academy from '../../../../icons/home.svg'

import './index.scss';

const SavingGoal: React.FC = () => {
  const amount = '521';

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
        <div className="form__group">
          <label htmlFor="" className="form__label">
            Total amount
          </label>
          <input type="number" className="form__input"/>
        </div>
        <div className="form__group">
          <label htmlFor="" className="form__label">
            Reach goal by
          </label>
          <input type="text" className="form__input"/>
        </div>
      </div>
      <div className="saving-goal__resume resume">
        <div className="resume__amount">
          <p className="resume__text">
            Monthly amount
          </p>
          <p className="resume__value">
            ${amount}
          </p>
        </div>
        <div className="saving-goal__disclaimer">
          <p className="saving-goal__info">
            You’re planning <span>48 monthly deposits</span> to reach your <span>$25,000</span> goal by <span>October 2020.</span>
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
