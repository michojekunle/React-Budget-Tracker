import { useEffect, useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Budgets from './components/Budgets'
import AddBudget from './components/AddBudget'
import About from './components/About'

const App = () => {
const [showAddBudget, setShowAddBudget] = useState(false)
const [budgets, setBudgets] = useState([])

useEffect(() => {
  /*Make the app fetch the items assynchronously*/
  const getBudgets = async () => {
    const budgetsFromServer = await fetchBudgets()
    setBudgets(budgetsFromServer)
  }

  getBudgets()
}, [])

/* Fetch Budgets */
const fetchBudgets = async () => {
  const res = await fetch('http://localhost:5000/budgets')
  const data = await res.json()

  return data
}

/* Fetch Budgets */
const fetchBudget = async (id) => {
  const res = await fetch(`http://localhost:5000/budgets/${id}`)
  const data = await res.json()

  return data
}

/* Add Budget */
const addBudget = async (budget) => {
  const res = await fetch('http://localhost:5000/budgets', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(budget),
  })

  const data = await res.json()

  setBudgets([...budgets, data])
}

/* Delete Budget */
const deleteBudget = async (id) => {
  const res = await fetch(`http://localhost:5000/budgets/${id}`, {
    method: 'DELETE',
  })
  //We should control the response status to decide if we will change the state or not.
  res.status === 200
    ? setBudgets(budgets.filter((budget) => budget.id !== id))
    : alert('Error Deleting This Budget')
}

/* Toggle Reminder */
const toggleReminder = async (id) => {
  const budgetToToggle = await fetchBudget(id)
  const updateBudget = {...budgetToToggle, reminder: !budgetToToggle.reminder}

const res = await fetch(`http://localhost:5000/budgets/${id}`, {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(updateBudget),
})

  const data = await res.json()

  setBudgets(
    budgets.map((budget) =>
            budget.id === id ? {...budget, reminder: data.reminder} : budget
    )
  )
}

return (
  <Router>
    <div className='container'>
      <Header
        onAdd={() => setShowAddBudget(!showAddBudget)}
        showAdd={showAddBudget}
      />
      <Routes>
      
      <Route
      path='/'
        element={
          <>
            {showAddBudget && <AddBudget onAdd={addBudget}/>}
            {budgets.length > 0 ? (
              <Budgets
                budgets={budgets}
                onDelete={deleteBudget}
                onToggle={toggleReminder}
              />
            ) : (
                'No Budgets To Show'
            )}
          </>
        }
      />
      <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  </Router>
)
}

export default App;
