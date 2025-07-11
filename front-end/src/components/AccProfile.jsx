import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const AccProfile = ({ user, setUser }) => {
  const [redirect, setRedirect] = useState(false);

  const logout = async () => {
    try {
      const { data } = await axios.post("users/logout");
      console.log(data);
      setUser(null);
      setRedirect(true);
      } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  if (redirect) return <Navigate to="/" />;

  if (!user) return <></>; // Se NÃO tiver usuário, não mostra nada

  return (
    <div className='flex flex-col items-center gap-4'>
      <p>Logado como {user?.name} ({user?.email})</p>
      <button onClick={logout} className='min-w-44 rounded-full bg-primary-400 text-white px-4 p-2 cursor-pointer transition'>
        Logout
      </button>
    </div>
  );
}

export default AccProfile;
