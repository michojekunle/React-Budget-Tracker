import { useState } from 'react'

const AddBudget = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    /*Ensure that the name input is never null*/
    if (!name) {
      alert('Please add a budget')
      return
    }

    /*When adding the budget, store the name, amount and the reminder status*/
    onAdd({ name: name, amount: amount, reminder })

    setName('')
    setAmount('')
    setReminder(false)
  }

  /*Display a form that allows one to enter the budget values*/
  return (
  <form className='add-form' onSubmit={onSubmit}>
    <div className='form-control'>
      <label>Budget</label>
      <input
        type='text'
        placeholder='Add Budget'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
    </div>

  {/*<!--  Take in the amount */}
    <div className='form-control'>
      <label>Amount</label>
      <input
              type='text'
              placeholder='Amount'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
      />
    </div>

    {/*Take in the reminder status*/}
    <div className='form-control form-control-check'>
      <label>Set Reminder</label>
      <input
              type='checkbox'
              checked={reminder}
              value={reminder}
              onChange={(e) => setReminder(e.currentTarget.checked)}
      />
    </div>

    <input type='submit' value='Save Budget' className='btn btn-block' />
  </form>
  )
}

export default AddBudget