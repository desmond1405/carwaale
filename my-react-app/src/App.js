import './App.css';
import Home from './pages/Home';
import { Link, Route, Routes } from 'react-router-dom';
import Car1 from './components/Baleno';
import Car2 from './components/Baleno2';
import Car3 from './components/Ertiga';
function App() {
  
  
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/baleno' element={<Car1/>}/>
      <Route path='/baleno2' element={<Car2/>}/>
      <Route path='/ertiga' element={<Car3/>}/>
    </Routes>
    
    </>
  );
}

export default App;
