import './App.css';
import Gallery from './components/Gallery';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className='container mx-auto'>
      <Navigation loggedIn={false} />
      <Gallery />
    </div>
  );
}

export default App;
