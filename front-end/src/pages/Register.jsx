import React, { useState } from 'react'; // Corrigido aqui
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

const Register = ({ setUser }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false); // Corrigido aqui

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && password && name) {
      try {
        // 🔥 Ajuste a URL para /users/
        const { data: userDoc } = await axios.post('/users/', {
          name,
          email,
          password,
        });

        // 🔥 Evitar expor password do backend: só pegar _id, name, email
        setUser({
          _id: userDoc._id,
          name: userDoc.name,
          email: userDoc.email,
        });

        setRedirect(true); // Aqui também
      } catch (error) {
        alert(`Deu um erro ao cadastrar o usuário: ${error.response?.data?.message || error.message}`);
      }
    } else {
      alert('Você precisa preencher o e-mail, o nome e a senha!');
    }
  };

  if (redirect) return <Navigate to='/' />;

  return (
    <section className='flex items-center'>
      <div className="gap-4 flex flex-col items-center max-w-96 mx-auto w-full">
        <h1 className='text-3xl font-bold'>Faça seu cadastro</h1>
        <form className='flex flex-col gap-2 w-full' onSubmit={handleSubmit}>
          <input
            type="text"
            className='w-full rounded-full border border-gray-300 px-4 py-2'
            placeholder='Digite seu nome'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className='w-full rounded-full border border-gray-300 px-4 py-2'
            placeholder='Digite seu e-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className='w-full rounded-full border border-gray-300 px-4 py-2'
            placeholder='Digite sua senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="cursor-pointer bg-primary-400 text-white font-bold w-full rounded-full border border-gray-300 px-4 py-2"
          >
            Registrar
          </button>
        </form>
        <p>
          Já tem uma conta?{' '}
          <Link to='/login' className='underline font-semibold'>
            Logue aqui!
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
