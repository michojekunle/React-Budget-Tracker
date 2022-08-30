import PropTypes from 'prop-types'

/*A button that allows one to set its color, the text it displays and the function it executes on a click event*/
const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
        style={{ backgroundColor: color }}
        className='btn'
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button