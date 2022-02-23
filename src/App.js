import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import Header from './component/Header';
import Bollywoodlatest from './component/Bollywoodlatest';
import Detail from './component/Detail';
import Home from './component/Home';
import Hollywood from './component/Hollywood';
import Technology from './component/Technology';
import Food from './component/Food';
import Fitness from './component/Fitness';

function App() {
  return (
   <>
   
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Navigate to='/home'/>}/>
          <Route path='/home' element={<Home />} />
          <Route path='/bollywood' element={<Bollywoodlatest  />} />
          <Route path='/hollywood' element={<Hollywood />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/food' element={<Food />} />
          <Route path='/fitness' element={<Fitness />} />
          <Route path=':category/:id' element={<Detail/>}/> 
        </Routes>
      </Router>

   
  
   </>
  );
}

export default App
