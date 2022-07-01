import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Celender from './component/Calender/Celender';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
     
      <Navbar></Navbar>
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path='/calander' element={<Celender></Celender>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
