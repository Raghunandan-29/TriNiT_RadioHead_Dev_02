import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Courses from './Pages/Courses';
import Testimonial from './Pages/Testimonial';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<Aboutus/>}/>
          <Route path='/courses' element={<Courses/>}/>
          <Route path='#' element={<Testimonial/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
