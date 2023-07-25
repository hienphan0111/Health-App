import { ImageCard } from '../../components';
import { aboutHealth } from '../../data/aboutHeath';

const AboutHealth = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-5'>
      {
        aboutHealth.map((item) => (
          <div key={item.id} className='text-gray flex flex-col items-start gap-2'>
            <ImageCard imgUrl={item.image} info={item.createdAt}  />
            <p className='text-[14px]'>{item.content}</p>
            <span className='text-primary-500 text-xs'>{item.tags}</span>
          </div>
        ))
      }
    </div>
  )
}

export default AboutHealth
