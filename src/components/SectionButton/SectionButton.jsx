import { PropTypes } from 'prop-types';

const SectionButton = ({ title, subtitle, image }) => {
  return (
    <div className="bg-cover border-primary-300 border-[24px] w-60 h-60 gap-2 relative" style={{ backgroundImage: `url(${image})`}}>
      <div className='flex flex-col justify-center items-center absolute w-full h-full ' style={{ backgroundColor: 'rgba(57, 57,57, 0.5'}}>
        <h2 className='text-primary-300 uppercase'>{title}</h2>
        <h3 className='bg-primary-400 font-jp px-5 py-1 text-xs'>{subtitle}</h3>
      </div>
    </div>
  )
}

SectionButton.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default SectionButton
