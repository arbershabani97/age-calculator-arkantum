/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

import IconArrow from './assets/icon-arrow.svg';

import Input from './components/Input';
import Counter from './components/Counter';

import { dateDiff } from './utils/dateDiff';

import Extras from './Extras';

import './App.css';

function App() {
  const [day, setDay] = useState<any>();
  const [month, setMonth] = useState<any>();
  const [year, setYear] = useState<any>();

  const [dayError, setDayError] = useState<string | null>();
  const [monthError, setMonthError] = useState<string | null>();
  const [yearError, setYearError] = useState<string | null>();

  const [calculatedDays, setCalculatedDays] = useState<string | number>('- -');
  const [calculatedMonths, setCalculatedMonths] = useState<string | number>('- -');
  const [calculatedYears, setCalculatedYears] = useState<string | number>('- -');

  const checkForErrors = () => {
    let hasError = false;
    if (!day) {
      hasError = true;
      setDayError('This field is required');
    } else if (day < 0 || day > 31) {
      hasError = true;
      setDayError('Must be a valid day');
    } else {
      setDayError(null);
    }
    if (!month) {
      hasError = true;
      setMonthError('This field is required');
    } else if (month < 0 || month > 12) {
      hasError = true;
      setMonthError('Must be a valid month');
    } else {
      setMonthError(null);
    }

    if (!year) {
      hasError = true;
      setYearError('This field is required');
    } else if (year) {
      const date = new Date();
      if (date.getFullYear() < year) {
        hasError = true;
        setYearError('Must be in the past');
      } else if (year < 0) {
        hasError = true;
        setYearError('Must be a valid year');
      } else {
        setYearError(null);
      }
    } else {
      setYearError(null);
    }
    return hasError;
  };

  const handleDayUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value || null;
    setDay(value);
  };
  const handleMonthUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value || null;
    setMonth(value);
  };
  const handleYearUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value || null;
    setYear(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCalculatedDays('- -');
    setCalculatedMonths('- -');
    setCalculatedYears('- -');
    setDayError(null);
    setMonthError(null);
    setYearError(null);
    // Timeout to wait for the data to clear (so we see the animation)
    setTimeout(() => {
      const hasError = checkForErrors();
      if (!hasError) {
        const previousDate = month + '-' + day + '-' + year;

        const diff = dateDiff(previousDate);
        setCalculatedYears(diff[0]);
        setCalculatedMonths(diff[1]);
        setCalculatedDays(diff[2]);
      }
    }, 0);
  };

  return (
    <div className="wrapper">
      <form className="age-calculator d-flex center" onSubmit={handleSubmit}>
        <div className="age-calculator-box">
          <div className="d-flex row age-calculator-box--form">
            <Input
              label="DAY"
              id="day"
              error={dayError}
              type="number"
              placeholder="DD"
              value={day}
              onChange={handleDayUpdate}
            />
            <Input
              label="MONTH"
              id="month"
              error={monthError}
              type="number"
              placeholder="MM"
              value={month}
              onChange={handleMonthUpdate}
            />
            <Input
              label="YEAR"
              id="year"
              error={yearError}
              type="number"
              placeholder="YYYY"
              value={year}
              onChange={handleYearUpdate}
            />
          </div>
          <div className="age-calculator-box--divider d-flex center">
            <hr className="age-calculator-box--divider-hr " />
            <button className="age-calculator-box--divider-button" type="submit">
              <img
                className="age-calculator-box--divider-button--img"
                src={IconArrow}
                alt="icon-arrow"
              />
            </button>
          </div>
          <div className="age-calculator-box--calculations">
            <h1 className="age-calculator-box--calculations-h1">
              <span className="age-calculator-box--calculations-h1--span">
                <Counter value={calculatedYears} />{' '}
              </span>
              years
            </h1>
            <h1 className="age-calculator-box--calculations-h1">
              <span className="age-calculator-box--calculations-h1--span">
                <Counter value={calculatedMonths} />{' '}
              </span>
              months
            </h1>
            <h1 className="age-calculator-box--calculations-h1">
              <span className="age-calculator-box--calculations-h1--span">
                <Counter value={calculatedDays} />{' '}
              </span>
              days
            </h1>
          </div>
        </div>
      </form>
      <Extras />
    </div>
  );
}

export default App;
