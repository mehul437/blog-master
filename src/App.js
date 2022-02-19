import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import Header from './component/Header';
import Bollywoodlatest from './component/Bollywoodlatest';
import Detail from './component/Detail';
import Home from './component/Home';

function App() {
  return (
   <>
   
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Navigate to='/home'/>}/>
          <Route path='/home' element={<Home />} />
          <Route path='/bollywood' element={<Bollywoodlatest  />} />
          <Route path='/hollywood' element={<Bollywoodlatest />} />
          <Route path='/technology' element={<Bollywoodlatest />} />
          <Route path='/food' element={<Bollywoodlatest />} />
          <Route path='/fitness' element={<Bollywoodlatest />} />
          <Route path=':category/:id' element={<Detail/>}/> 
        </Routes>
      </Router>

   
  
   </>
  );
}

export default App
