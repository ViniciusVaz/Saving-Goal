import { useState, useEffect } from 'react';
import { getMoneyMask, getMonthDiffy, mapMonth } from '../../../../../utils/helpers'

export default () => {
  const [goalAmount, setGoalAmount] = useState(getMoneyMask('100000'))
  const [mounthlyAmount, setMounthlyAmount] = useState('0')

  const [currentDate, setCurrentDate] = useState(new Date())
  const [monthGoal, setMonthGoal] = useState('')
  const [yearGoal, setYearGoal] = useState('')
  const [monthDiffy, setMonthyDiff] = useState('')

  const setDate = dt => {
    setMonthGoal(mapMonth[dt.getMonth()]);
    setYearGoal(dt.getFullYear());
  }

  const calcPayment = value => {
    const dateNow = new Date;
    const goalAmountNumber = value.replace(/\,/, '')

    const monthDiffy = getMonthDiffy(dateNow, currentDate.getTime())
    const calcMonth = (goalAmountNumber / monthDiffy).toFixed(2)

    setMonthyDiff(monthDiffy)
    setMounthlyAmount(getMoneyMask(calcMonth))
  }

  const goalAmountChange = el => {
    const currentValue = el.target.value
    const goalAmount = getMoneyMask(currentValue)
    setGoalAmount(`${goalAmount}`)
    calcPayment(goalAmount)
  }

  const prevMonth = () => {
    currentDate.setMonth(currentDate.getMonth() - 1)
    setDate(currentDate)
    calcPayment(goalAmount)
  }

  const nextMonth = () => {
    currentDate.setMonth(currentDate.getMonth() + 1)
    setDate(currentDate)
    calcPayment(goalAmount)
  }

  useEffect(() => {
    currentDate.setMonth(currentDate.getMonth() + 10)
    calcPayment(goalAmount)
    setDate(currentDate)
  }, [])

  return {
    nextMonth,
    prevMonth,
    goalAmountChange,
    goalAmount,
    mounthlyAmount,
    monthGoal,
    yearGoal,
    monthDiffy,
  }
}
