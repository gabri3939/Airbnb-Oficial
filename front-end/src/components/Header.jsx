import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='shadow-md'>
      <div className='flex items-center justify-between px-4 py-4 sm:px-8 max-w-7xl mx-auto'>

        {/* Logo */}
        <Link to='/' className='flex items-center'>
          <img
            className='h-10'
            src="/img/Airbnb_Logo.png"
            alt="Logo do Airbnb"
          />
        </Link>

        {/* Procura centralizado */}
        <Link to='/' className='hidden lg:flex justify-center border border-gray-300 rounded-full px-4 py-2 pr-4 pl-6 shadow-md'>
          <div className='flex items-center space-x-4'>
            <p className='border-r pr-4 border-gray-300'>Qualquer lugar</p>
            <p className='border-r px-4 border-gray-300'>Qualquer semana</p>
            <p className='px-4'>Hóspedes</p>

            <div className='bg-primary-400 rounded-full p-2 text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
          </div>
        </Link>

        {/* Perfil à direita */}
        <Link to='/login'>
          <div className='flex items-center space-x-2 border border-gray-300 rounded-full px-4 py-2 shadow-md'>
            {/* Ícone do menu */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-gray-600">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>

            {/* Ícone do perfil */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-gray-600">
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
            </svg>

            {/* Texto Perfil */}
            <p className='sm:max-w-32 max-w-20 truncate'>Gabriel</p>
          </div>
        </Link>

      </div>
    </header>
  );
};

export default Header;
