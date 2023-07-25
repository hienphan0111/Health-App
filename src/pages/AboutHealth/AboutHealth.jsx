import { ImageCard, SquareButton, Button } from '../../components';
import { aboutHealth } from '../../data/aboutHeath';

const menu = [
  {
    id: 1,
    name: 'Recommended column',
    subTitle: 'オススメ',
  },
  {
    id: 2,
    name: 'Recommended diet',
    subTitle: 'ダイエット',
  },
  {
    id: 3,
    name: 'Recommended beauty',
    subTitle: 'オススメ',
  },
  {
    id: 4,
    name: 'Recommended health',
    subTitle: '健康',
  },
];

const AboutHealth = () => {
  return (
    <div className=''>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-16'>
        {
          menu.map((item) => (
            <SquareButton key={item.id} text={item.name} subText={item.subTitle} handleClick={() => {}}/>
            ))
          }
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-5 mb-10'>
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
      <Button handleClick={() => {}} text='コラムをもっと見る' />
    </div>
  )
}

export default AboutHealth
