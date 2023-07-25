import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-healthy.png';
import memo from '../../assets/icons/icon_memo.svg';
import info from '../../assets/icons/icon_info.svg';
import challenge from '../../assets/icons/icon_challenge.svg';
import { styles } from './styles';
import { FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';

const bgMenu = [
  {
    id: 1,
    name: '自分の記録',
    link: '#',
  },
  {
    id: 2,
    name: '体重グラフ',
    link: '#',
  },
  {
    id: 3,
    name: '目標',
    link: '#',
  },
  {
    id: 4,
    name: '選択中のコース',
    link: '#',
  },
  {
    id: 5,
    name: 'コラム一覧',
    link: '#',
  },
  {
    id: 6,
    name: '設定',
    link: '#',
  },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='w-full flex items-center justify-between flex-wrap py-3 px-[12%] bg-dark-500'>
      <div className='flex items-center flex-shrink-0 text-white mr-6 lg:mr-72'>
        <img src={logo} className='w-100 h-10 mr-2' alt='Logo' />
      </div>

      <div
        className='w-full hidden flex-grow md:flex md:items-center md:w-auto' >
        <div className='font-jp text-sm lg:flex-grow flex gap-10'>
          <div className={styles.menuItem}>
            <img src={memo} alt="memo" />
            <a
              href='#'
              className={styles.menuLink}
            >
              自分の記録
            </a>
          </div>
          <div className={styles.menuItem}>
            <img src={challenge} alt="challenge" />
            <a
              href='#'
              className={styles.menuLink}
            >
              チャレンジ
            </a>
          </div>
          <div className={styles.menuItem}>
            <img src={info} alt="info" />
            <a
              href='#'
              className={styles.menuLink}
            >
              お知らせ
            </a>
          </div>
        </div>
      </div>

      {/* Hamberger button */}

      <div className='block text-light relative'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400'
        >
          <FiMenu className={`text-light text-2xl ${isOpen ? 'hidden' : 'block'}`} />
          <IoMdClose className={`text-light text-xl ${isOpen ? 'block' : 'hidden'}`} />
        </button>
        {isOpen ? (
          <div className='absolute bg-dark-500 w-[280px] right-0 font-jp'>
            <ul className='grid grid-cols-1 divide-y divide-gray/80'>
              {
                bgMenu.map((item) => (
                  <li key={item.id} className={styles.bgMenuItem}><Link>{item.name}</Link></li>
                ))
              }
            </ul>
          </div>) : null
          }
      </div>
    </nav>
  );
}

export default Navbar;
