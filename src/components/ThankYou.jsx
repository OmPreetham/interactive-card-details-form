const ThankYou = () => {
  return (
    <div className="thank-you-wrapper">
      <div className="thank-you">
        <div className="thank-you__image-wrapper">
          <img
            className="thank-you__image"
            src="/images/icon-complete.svg"
            alt="Icon Complete"
          />
        </div>
        <div className="thank-you__message-wrapper">
          <p className="thank-you__message">Thank You!</p>
          <p className="thank-you__info">We've added your card details</p>
        </div>
        <button className="thank-you__continue">Continue</button>
      </div>
    </div>
  )
}
export default ThankYou
