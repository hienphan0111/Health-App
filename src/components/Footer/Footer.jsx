import { Link } from "react-router-dom"

const footerItems = [
  {
    id: 1,
    name: '会員登録',
    link: '#'
  },
  {
    id: 2,
    name: '運営会社',
    link: '#'
  },
  {
    id: 3,
    name: '利用規約',
    link: '#'
  },
  {
    id: 4,
    name: '個人情報の取扱について',
    link: '#'
  },
  {
    id: 5,
    name: '特定商取引法に基づく表記',
    link: '#'
  },
  {
    id: 6,
    name: 'お問い合わせ',
    link: '#'
  },
]
const Footer = () => {
  return (
    <div className="bg-dark-500 px-[12%] py-10 fixed max-w-[1280px] bottom-0 w-full font-jb text-xs">
      <ul className="flex justify-start gap-10 items-start">
        {
          footerItems.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Footer
