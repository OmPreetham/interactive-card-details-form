import React, { useState, useEffect } from 'react'
import ThankYou from './ThankYou'

const Form = ({
  name,
  number,
  month,
  year,
  cvc,
  updateName,
  updateNumber,
  updateMonth,
  updateYear,
  updateCvc,
}) => {
  const [nameError, setNameError] = useState(false)
  const [numberError, setNumberError] = useState(false)
  const [monthError, setMonthError] = useState(false)
  const [yearError, setYearError] = useState(false)
  const [cvcError, setCvcError] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Check for updated value after each change
  useEffect(() => {
    // Validate name
    if (!/^[a-zA-Z ]*$/.test(name)) {
      setNameError(true)
    } else {
      setNameError(false)
    }
  }, [name])

  useEffect(() => {
    // Validate number
    if (!/^[0-9]{0,16}$/.test(number)) {
      setNumberError(true)
    } else {
      setNumberError(false)
    }
  }, [number])

  useEffect(() => {
    // Validate month
    if (!/^[0-9]*$/.test(month)) {
      setMonthError(true)
    } else if (parseInt(month) < 1 || parseInt(month) > 12) {
      setMonthError(true)
    } else {
      setMonthError(false)
    }
  }, [month])

  useEffect(() => {
    // Validate year
    if (!/^[0-9]*$/.test(year)) {
      setYearError(true)
    } else if (parseInt(year) < 0 || parseInt(year) > 99) {
      setYearError(true)
    } else {
      setYearError(false)
    }
  }, [year])

  useEffect(() => {
    // Validate CVC
    if (!/^[0-9]{0,4}$/.test(cvc)) {
      setCvcError(true)
    } else {
      setCvcError(false)
    }
  }, [cvc])

  const handleSubmit = (event) => {
    event.preventDefault()

    // Check if any errors exist
    if (!nameError && !numberError && !monthError && !yearError && !cvcError) {
      // Perform form submission logic here (e.g., send data to server)
      setFormSubmitted(true)
    }
  }

  return (
    <div className="form-wrapper">
      {!formSubmitted ? (
        <form className="card" onSubmit={handleSubmit}>
          <div
            className={`card__block-wrapper ${
              nameError ? 'card__block-wrapper--error' : ''
            }`}
          >
            <label className="card__label" htmlFor="name">
              Cardholder Name
            </label>
            <input
              className={`card__input ${nameError ? 'card__input--error' : ''}`}
              onChange={(event) => updateName(event.target.value)}
              value={name}
              type="text"
              name="name"
              id="name"
              placeholder="e.g. Jane Appleseed"
            />
            {nameError && (
              <p className="card__error-message">Wrong format, letters only.</p>
            )}
          </div>
          <div
            className={`card__block-wrapper ${
              numberError ? 'card__block-wrapper--error' : ''
            }`}
          >
            <label className="card__label" htmlFor="number">
              Card Number
            </label>
            <input
              className={`card__input ${
                numberError ? 'card__input--error' : ''
              }`}
              onChange={(event) => updateNumber(event.target.value)}
              value={number}
              type="text"
              name="number"
              id="number"
              placeholder="e.g. 1234567890123456"
            />
            {numberError && (
              <p className="card__error-message">
                Must be 16 characters long, numbers only.
              </p>
            )}
          </div>
          <div className="card__extra-wrapper">
            <div
              className={`card__block-wrapper ${
                monthError || yearError ? 'card__block-wrapper--error' : ''
              }`}
            >
              <p className="card__label">Exp. Date (MM/YY)</p>
              <div className="card__exp-wrapper">
                <input
                  className={`card__input ${
                    monthError ? 'card__input--error' : ''
                  }`}
                  onChange={(event) => updateMonth(event.target.value)}
                  value={month}
                  type="text"
                  name="month"
                  id="month"
                  maxLength={2}
                  placeholder="MM"
                />
                <input
                  className={`card__input ${
                    yearError ? 'card__input--error' : ''
                  }`}
                  onChange={(event) => updateYear(event.target.value)}
                  value={year}
                  type="text"
                  name="year"
                  id="year"
                  maxLength={2}
                  placeholder="YY"
                />
              </div>
              {(monthError || yearError) && (
                <p className="card__error-message">
                  Wrong format or out of range.
                </p>
              )}
            </div>
            <div
              className={`card__block-wrapper ${
                cvcError ? 'card__block-wrapper--error' : ''
              }`}
            >
              <label className="card__label" htmlFor="cvv">
                CVC
              </label>
              <input
                className={`card__input ${
                  cvcError ? 'card__input--error' : ''
                }`}
                onChange={(event) => updateCvc(event.target.value)}
                value={cvc}
                type="text"
                name="cvv"
                id="cvv"
                placeholder="e.g. 123"
              />
              {cvcError && (
                <p className="card__error-message">
                  Wrong format, numbers only.
                </p>
              )}
            </div>
          </div>
          <button className="card__submit" type="submit">
            Confirm
          </button>
        </form>
      ) : (
        <ThankYou setFormSubmitted={setFormSubmitted} />
      )}
    </div>
  )
}

export default Form
