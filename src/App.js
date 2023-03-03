import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CarouselBootstrap from './components/CarouselBootstrap';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Shop from './components/Shop';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<CarouselBootstrap/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about-us' element={<AboutUs/>}/>
          <Route path='/shop' element={<Shop/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
