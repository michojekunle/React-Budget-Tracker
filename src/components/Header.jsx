import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  /*The header has a title and a button that opens up a window to add the budget or close the window*/
  return (
    <header className='header'>

    {/*The header has a title*/}
    <h1>{title}</h1>
    {location.pathname === '/' && (
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
        />
    )}
    </header>
  )
}

/*Set the title*/
Header.defaultProps = {
  title: 'Budget Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

/*Export the header*/
export default Header