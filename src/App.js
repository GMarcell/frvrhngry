import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CarouselBootstrap from './components/CarouselBootstrap';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<CarouselBootstrap/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
