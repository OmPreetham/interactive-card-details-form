const Illustration = () => {
  return (
    <div className="illustration">
      <div className="illustration__front front">
        <div className="front__image-wrapper">
          <img
            className="front__image"
            src="/images/bg-card-front.png"
            alt="Card Background Front"
          />
        </div>
        <div className="front__details">
          <div className="front__logo-wrapper">
            <img
              className="front__logo"
              src="/images/card-logo.svg"
              alt="Card Logo"
            />
          </div>
          <div className="front__info">
            <div className="front__number-wrapper">
              <p className="front__number">0000 0000 0000 0000</p>
            </div>
            <div className="front__subinfo">
              <p className="front__name">JANE APPLESEED</p>
              <p className="font__exp">00/00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="illustration__back back">
        <div className="back__image-wrapper">
          <img
            className="back__image"
            src="/images/bg-card-back.png"
            alt="Card Background Back"
          />
        </div>
        <div className="back__cvv-wrapper">
          <p className="back__cvv">000</p>
        </div>
      </div>
    </div>
  )
}
export default Illustration
