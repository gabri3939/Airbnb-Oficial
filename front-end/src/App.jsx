import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
  <Header />

  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/login' element={<Login />}/>
    </Routes>
  </BrowserRouter>
);

}

export default App;
