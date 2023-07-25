import PropTypes from 'prop-types';

const ImageCard = ({ imgUrl, info }) => {
  return (
    <div className='relative w-full h-[10rem] bg-cover' style={{ backgroundImage: `url(${imgUrl})`}}>
      <p className='absolute left-0 bottom-0 p-2 bg-primary-300'>{info}</p>
    </div>
  )
}

ImageCard.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  info: PropTypes.string
}

export default ImageCard
