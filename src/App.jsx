import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navbar, Footer } from './components'
import { MyPage, MyRecord, AboutHealth } from './pages'

function App() {

  return (
    <div className=''>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<AboutHealth />} />
          <Route path="/myrecord" element={<MyRecord />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
