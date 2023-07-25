import PropTypes from 'prop-types';

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick} type='button' className='rounded-md bg-gradient-to-r from-primary-300 to-primary-400 px-10 py-2'>
      {text}
    </button>
  )
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}
export default Button
