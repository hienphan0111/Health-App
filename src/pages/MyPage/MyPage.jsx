import { useState } from 'react';
import { Button, HealthGraph, HexagonButton, ImageCard } from '../../components';
import './styles.css';
import d01 from '../../assets/images/d01.jpg';
import iconKnife from '../../assets/icons/icon_knife.svg';
import iconCup from '../../assets/icons/icon_cup.svg';
import { meals } from '../../data/meals.js';

const menuItems = [
  {
    id: 1,
    name: 'Morning',
    icon: iconKnife,
  },
  {
    id: 2,
    name: 'Lunch',
    icon: iconKnife,
  },
  {
    id: 3,
    name: 'Dinner',
    icon: iconKnife,
  },
  {
    id: 4,
    name: 'Snack',
    icon: iconCup,
  },
]

const MyPage = () => {

  const [numCard, setNumCard] = useState(meals.slice(0, 8));

  const handleLoadMore = () => {
    if (numCard.length < meals.length) {
      setNumCard(meals.slice(0, numCard.length + 8));
    }
  }

  const handleFilter = (name) => {
    const filtered = meals.filter((item) => item.name === name);
    setNumCard(filtered);
  }

  const percentage = 75;
  return (
    <div className='flex flex-col items-center'>
      <div className='grid w-full' style={{ gridTemplateColumns: '40% 60%'}}>
        <div className='bg-cover w-full h-full flex items-center justify-center' style={{ backgroundImage: `url(${d01})`}}>
          <div className="radial-progress flex items-center gap-2 border-primary-300" style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }}>
            <div className='flex items-baseline gap-2'>
              <span>
                05/21
              </span>
              <p className='text-2xl'>{percentage}</p>
            </div>
          </div>
        </div>
        <div className='bg-dark-600 pr-10 pl-3'>
          <HealthGraph />
        </div>
      </div>
      <div className='flex px-[25%] justify-between w-full py-10'>
        {
          menuItems.map((item) => (
            <HexagonButton key={item.id} text={item.name} icon={item.icon} handleClick={() => handleFilter(item.name)} />
          ))
        }
      </div>
      <div className='w-full px-2 md:px-[12%] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-5'>
        {
          numCard.map((item) => (
            <ImageCard key={item.id} imgUrl={item.image} info={item.name} />
          ))
        }
      </div>
      <div className={`py-10 ${numCard.length >= meals.length ? 'hidden' : 'block'}`}>
        <Button text='記録をもっと見る' handleClick={handleLoadMore} />
      </div>
    </div>
  )
}

export default MyPage
