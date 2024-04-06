const Form = () => {
  return (
    <div className="form-wrapper">
      <form className="card" action="">
        <div className="card__name-wrapper">
          <label className="card__name" htmlFor="name">
            Cardholder Name
          </label>
          <input
            className="card__input-name"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="card__number-wrapper">
          <label className="card__number" htmlFor="number">
            Card Number
          </label>
          <input
            className="card__input-number"
            type="number"
            name="number"
            id="number"
          />
        </div>
        <div className="card__extra-wrapper">
          <div className="card__exp-wrapper">
            <p className="card__exp-name">Exp. Date (MM/YY)</p>
            <div className="card__month-wrapper">
              <label className="card__month" htmlFor="month">
                Month
              </label>
              <input
                className="card__input-month"
                type="number"
                name="month"
                id="month"
              />
            </div>
            <div className="card__year-wrapper">
              <label className="card__year" htmlFor="year">
                Year
              </label>
              <input
                className="card__input-year"
                type="number"
                name="year"
                id="year"
              />
            </div>
          </div>
          <div className="card__cvv-wrapper">
            <label className="card__cvv" htmlFor="cvv">
              CVV
            </label>
            <input
              className="card__input-cvv"
              type="number"
              name="cvv"
              id="cvv"
            />
          </div>
        </div>
        <button className="card__submit" type="submit">
          Confrim
        </button>
      </form>
    </div>
  )
}
export default Form
