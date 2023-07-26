import PropTypes from 'prop-types';

const DiaryCard = ({ title, date, time, content }) => {
  return (
    <div className='border border-gray'>
      <div className='flex flex-col items-start pl-2'>
        <p>{date}</p>
        <p>{time}</p>
      </div>
      <div className='font-jp px-3 pt-3 pb-10 text-left'>
        <h3>{title}</h3>
        <p className='text-xs'>{content}</p>
      </div>
    </div>
  )
}

DiaryCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default DiaryCard;
