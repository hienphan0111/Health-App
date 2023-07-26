import DiaryCard from '../DiaryCard/DiaryCard';
import PropTypes from 'prop-types';

const Diary = ({ diary }) => {
  return (
    <div>
      <h2 className='uppercase text-dark-600 text-xl text-left mb-2 w-full'>my diary</h2>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-3 text-dark-600'>
        {
          diary.map((item) => (
            <DiaryCard key={item.id} title={item.title} date={item.date} time={item.time} content={item.content} />
          ))
        }
      </div>
    </div>
  )
};

Diary.propTypes = {
  diary: {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  },
};

export default Diary;
