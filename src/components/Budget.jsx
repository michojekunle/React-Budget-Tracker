import { FaTimes } from 'react-icons/fa'

/*This will enable one to set the reminder to the budget on or off when double clicked on; and also to delete the budget*/
const Budget = ({ budget, onDelete, onToggle }) => {
  return (
    <div className={`budget ${budget.reminder && 'reminder'}`} onDoubleClick={() => onToggle(budget.id)}>
     {/*Toggle the budget reminder on or off when double on double click -->*/}
        <h3>
          {budget.name}{' '}
            <FaTimes style={{ color: 'red', cursor: 'pointer' }}
              onClick={() => onDelete(budget.id)}
            />
        </h3>
            <p>{budget.amount}</p>
    </div>
  )
}

export default Budget
