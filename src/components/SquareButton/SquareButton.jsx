import PropTypes from 'prop-types';

const SquareButton = ({ text, subText, handleClick }) => {
  return (
    <button type='button' onClick={handleClick}>
      {text}
      <hr />
      {subText}
    </button>
  )
}

SquareButton.propTypes = {
  text: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default SquareButton
