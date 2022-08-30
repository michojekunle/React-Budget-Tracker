import Budget from './Budget'

/*Displays all the budgets fetched from the URL to the screen*/
const Budgets = ({ budgets, onDelete, onToggle }) => {
/*Maps each budget per the budget's key*/
  return (
    <>
      {budgets.map((budget, index) => (
      <Budget key={index} budget={budget} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
    )
}

export default Budgets