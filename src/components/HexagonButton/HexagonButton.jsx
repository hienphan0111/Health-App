import PropTypes from 'prop-types';
import './hexagonStyles.css';

const HexagonButton = ({ text, icon, handleClick }) => {
  return (
    <div className='w-24'>
      <button type='button' onClick={handleClick}>
        <div className='hex bg-gradient-to-r from-primary-300 to-primary-400 w-24 h-24 flex flex-col justify-center items-center'>
          <p>{text}</p>
          <img src={icon} alt='icon' className='w-12 h-12' />
        </div>
      </button>
    </div>
  )
}

HexagonButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default HexagonButton;
