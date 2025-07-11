import { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const axiosGet = async () => {
      try {
        const { data } = await axios.get('/users/profile');
        setUser(data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    axiosGet();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <BrowserRouter>
      <Header user={user} />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route
          path='/login'
          element={user ? <Navigate to='/' /> : <Login user={user} setUser={setUser} />}
        />

        <Route
          path='/register'
          element={user ? <Navigate to='/' /> : <Register setUser={setUser} />}
        />

        <Route
          path='/account/:subpage/:action?'
          element={user ? <Account user={user} setUser={setUser} /> : <Navigate to='/login' />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
