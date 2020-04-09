import { useState, useEffect, useRef } from 'react';
import {
  getMoneyMask,
  getMonthDiffy,
  mapMonth
} from '../../../../../utils/helpers';

export default () => {
  const [goalAmount, setGoalAmount] = useState(getMoneyMask('30000000'));
  const [mounthlyAmount, setMounthlyAmount] = useState('0');

  const [currentDate, setCurrentDate] = useState(new Date());
  const [monthGoal, setMonthGoal] = useState('');
  const [yearGoal, setYearGoal] = useState('');
  const [monthDiffy, setMonthyDiff] = useState(0);
  const [errorMessage, setErrorMessage] = useState(false);

  const goalAmountRef = useRef({});

  const setDate = (dt: any) => {
    setMonthGoal(mapMonth[dt.getMonth()]);
    setYearGoal(dt.getFullYear());
  };

  const calcPayment = (value: any) => {
    const dateNow = new Date();
    const goalAmountNumber = value.replace(/,/gm, '');

    const monthDiffy = getMonthDiffy(dateNow, currentDate.getTime());
    const calcMonth = (goalAmountNumber / monthDiffy).toFixed(2);

    setMonthyDiff(monthDiffy);
    setMounthlyAmount(getMoneyMask(calcMonth));
  };

  const goalAmountChange = (el: any) => {
    const currentValue = el.target.value;
    const goalAmount = getMoneyMask(currentValue);
    goalAmountRef.current = goalAmount;

    setGoalAmount(goalAmount);
    calcPayment(goalAmount);
  };

  const prevMonth = () => {
    const dateNow = new Date();
    const monthDiffy = getMonthDiffy(dateNow, currentDate.getTime());

    if (monthDiffy <= 2) {
      setErrorMessage(true);

      if (monthDiffy === 2) {
        currentDate.setMonth(currentDate.getMonth() - 1);
        setDate(currentDate);
        calcPayment(goalAmountRef.current);
      }
    } else {
      currentDate.setMonth(currentDate.getMonth() - 1);
      setErrorMessage(false);
      setDate(currentDate);
      calcPayment(goalAmountRef.current);
    }
  };

  const nextMonth = () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    setDate(currentDate);
    calcPayment(goalAmountRef.current);
    setErrorMessage(false);
  };

  const watchKeyPress = (e: any) => {
    e.stopPropagation();
    if (e.keyCode === 37) {
      prevMonth();
    } else if (e.keyCode === 39) {
      nextMonth();
    }
  };

  useEffect(() => {
    currentDate.setMonth(currentDate.getMonth() + 48);
    setDate(currentDate);
    calcPayment(goalAmount);
    goalAmountRef.current = goalAmount;
    document.addEventListener('keydown', watchKeyPress);

    return () => document.removeEventListener('keydown', watchKeyPress, false);
  }, []);

  return {
    nextMonth,
    prevMonth,
    goalAmountChange,
    goalAmount,
    mounthlyAmount,
    monthGoal,
    yearGoal,
    monthDiffy,
    errorMessage
  };
};
