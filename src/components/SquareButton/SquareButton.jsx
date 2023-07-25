import PropTypes from 'prop-types';

const SquareButton = ({ text, subText, handleClick }) => {
  return (
    <button type='button' onClick={handleClick} className='h-[10em] bg-dark-600 flex flex-col items-center justify-center gap-2'>
      <p className='uppercase text-primary-300 text-xl p-2'>
        {text}
      </p>
      <hr className='w-8' />
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
