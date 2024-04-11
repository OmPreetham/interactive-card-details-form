import Illustration from './components/Illustration'
import Form from './components/Form'
import ThankYou from './components/ThankYou'
import { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [cvc, setCvc] = useState('')

  console.log(name, number, month, year, cvc)

  const updateName = (name) => {
    setName(name)
  }

  const updateNumber = (number) => {
    setNumber(number)
  }

  const updateMonth = (month) => {
    setMonth(month)
  }

  const updateYear = (year) => {
    setYear(year)
  }

  const updateCvc = (cvc) => {
    setCvc(cvc)
  }

  return (
    <main className="wrapper">
      <Illustration
        name={name}
        number={number}
        month={month}
        year={year}
        cvc={cvc}
      />
      <Form
        name={name}
        number={number}
        month={month}
        year={year}
        cvc={cvc}
        updateName={updateName}
        updateNumber={updateNumber}
        updateMonth={updateMonth}
        updateYear={updateYear}
        updateCvc={updateCvc}
      />
    </main>
  )
}
export default App
