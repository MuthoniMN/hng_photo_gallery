import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Search from './pages/Search';
import HomeLoggedIn from './pages/HomeLoggedIn';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/home' element={<HomeLoggedIn />} />
    </Routes>
  )
}

export default App;
