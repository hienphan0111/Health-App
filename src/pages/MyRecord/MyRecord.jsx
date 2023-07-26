import { HealthGraph, MyExercises, SectionButton } from '../../components';
import myrecommend1 from '../../assets/images/myrecommend-1.jpg';
import myrecommend2 from '../../assets/images/myrecommend-2.jpg';
import myrecommend3 from '../../assets/images/myrecommend-3.jpg';

const menuItems = [
  {
    id: 1,
    title: 'Body record',
    subtitle: '自分のカラダの記録',
    image: myrecommend1
  },
  {
    id: 2,
    title: 'Body record',
    subtitle: '自分のカラダの記録',
    image: myrecommend2
  },
  {
    id: 3,
    title: 'Body record',
    subtitle: '自分のカラダの記録',
    image: myrecommend3
  },
]

const MyRecord = () => {
  return (
    <div className='flex flex-col items-center gap-10 px-[12%]'>
      <div className='flex justify-between w-full mt-10'>
        {
          menuItems.map((item) => (
            <SectionButton key={item.id} title={item.title} subtitle={item.subtitle} image={item.image} />
          ))
        }
      </div>
      <div className='bg-dark-600 w-full mx-[12%]'>
        <HealthGraph />
      </div>
      <div className='bg-dark-600 w-full'>
        <MyExercises />
      </div>
    </div>
  )
}

export default MyRecord
