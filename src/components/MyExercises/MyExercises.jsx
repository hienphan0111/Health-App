import { PiDotBold } from 'react-icons/pi';
import { myExercises } from '../../data/myExercises';

const MyExercises = () => {

  return (
    <div className=''>
      <div className='flex justify-start w-full p-3 gap-3'>
        <h1>My Exercises</h1>
        <span>2021.05.21</span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full divide-y gap-x-5 max-h-52 overflow-auto'>
        {
          myExercises.map((item) => (
            <div key={item.id} className='flex justify-between w-full font-jp pt-5'>
              <div className='flex'>
                <PiDotBold className='text-xl' />
                <div className='flex flex-col items-start'>
                  <p>{item.name}</p>
                  <p>{item.energy} kcal</p>
                </div>
              </div>
              <p className='text-primary-300 pr-6'>{item.time} min</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyExercises
