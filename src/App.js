import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CarouselBootstrap from './components/CarouselBootstrap';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<CarouselBootstrap/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
