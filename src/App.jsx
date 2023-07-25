import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar, Footer } from './components'
import { MyPage, MyRecord, AboutHealth } from './pages'

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <div className='md:px-[12%]'>
          <Routes>
            <Route path="/" element={<AboutHealth />} />
            <Route path="/myrecord" element={<MyRecord />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
