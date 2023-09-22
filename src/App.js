import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Search from './pages/Search';
import HomeLoggedIn from './pages/HomeLoggedIn';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <Routes>
      <Route path='/' element={isAuthenticated ? <HomeLoggedIn /> : <Home />} />
      <Route path='/home' element={<HomeLoggedIn />} />
      <Route path='/search' element={<Search />} />
    </Routes>
  )
}

export default App;
