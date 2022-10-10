import logo from './logo.svg';
import './App.css';
import Home from './component/Home';

import { Route, Routes } from 'react-router-dom';
import Login from './share/Login';
import Register from './share/Register';
import ShowLoginData from './share/ShowLoginData';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/show' element={<ShowLoginData/>}/>
      </Routes>
    </div>
  );
}

export default App;
