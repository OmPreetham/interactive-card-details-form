const Form = () => {
  return (
    <div className="form-wrapper">
      <form className="card" action="">
        <div className="card__block-wrapper">
          <label className="card__label" htmlFor="name">
            Cardholder Name
          </label>
          <input
            className="card__input"
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Jane Appleseed"
          />
        </div>
        <div className="card__block-wrapper">
          <label className="card__label" htmlFor="number">
            Card Number
          </label>
          <input
            className="card__input"
            type="number"
            name="number"
            id="number"
            min={0}
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </div>
        <div className="card__extra-wrapper">
          <div className="card__block-wrapper">
            <p className="card__label">Exp. Date (MM/YY)</p>
            <div className="card__exp-wrapper">
              <input
                className="card__input"
                type="number"
                name="month"
                id="month"
                min={0}
                max={12}
                placeholder="MM"
              />

              <input
                className="card__input"
                type="number"
                name="year"
                id="year"
                min={0}
                max={99}
                placeholder="YY"
              />
            </div>
          </div>
          <div className="card__block-wrapper">
            <label className="card__label" htmlFor="cvv">
              CVC
            </label>
            <input
              className="card__input"
              type="number"
              name="cvv"
              id="cvv"
              min={0}
              max={9999}
              placeholder="e.g. 123"
            />
          </div>
        </div>
        <button className="card__submit" type="submit">
          Confirm
        </button>
      </form>
    </div>
  )
}
export default Form
