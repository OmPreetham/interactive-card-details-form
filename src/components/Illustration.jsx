import React from 'react'

const Illustration = ({ name, number, month, year, cvc }) => {
  // Define default values for each field
  const defaultName = name ? name : 'YOUR NAME'
  const defaultNumber = number
    ? number.match(/.{1,4}/g).join(' ')
    : '0000 0000 0000 0000'
  const defaultMonth = month ? month : 'MM'
  const defaultYear = year ? year : 'YY'
  const defaultCvc = cvc ? cvc : '000'

  return (
    <div className="illustration">
      <div className="illustration__front front">
        <div className="front__image-wrapper">
          <img
            className="front__image"
            src="images/bg-card-front.png"
            alt="Card Background Front"
          />
        </div>
        <div className="front__details">
          <div className="front__logo-wrapper">
            <img
              className="front__logo"
              src="images/card-logo.svg"
              alt="Card Logo"
            />
          </div>
          <div className="front__info">
            <div className="front__number-wrapper">
              <p className="front__number">{defaultNumber}</p>
            </div>
            <div className="front__subinfo">
              <p className="front__name">{defaultName}</p>
              <p className="font__exp">
                {defaultMonth}/{defaultYear}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="illustration__back back">
        <div className="back__image-wrapper">
          <img
            className="back__image"
            src="images/bg-card-back.png"
            alt="Card Background Back"
          />
        </div>
        <div className="back__cvv-wrapper">
          <p className="back__cvv">{defaultCvc}</p>
        </div>
      </div>
    </div>
  )
}

export default Illustration
