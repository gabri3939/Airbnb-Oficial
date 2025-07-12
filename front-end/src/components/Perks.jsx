import React from 'react';

const Perks = ({ perks, setPerks }) => {
  const handleClick = (target) => {
    const { checked, value } = target;
    setPerks((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  };

  const isChecked = (name) => perks.includes(name);

  return (
    <div className='grid [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))] gap-4'>
      {/* Wifi */}
      <label htmlFor='wifi' className='flex gap-2 items-center px-4 py-3 border border-gray-300 rounded-xl cursor-pointer'>
        <input
          type='checkbox'
          id='wifi'
          value='wifi'
          checked={isChecked('wifi')}
          onChange={(e) => handleClick(e.target)}
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" strokeWidth={1.5}
          stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
        </svg>
        Wifi
      </label>

      {/* Estacionamento */}
      <label htmlFor='parking' className='flex gap-2 items-center px-4 py-3 border border-gray-300 rounded-xl cursor-pointer'>
        <input
          type='checkbox'
          id='parking'
          value='parking'
          checked={isChecked('parking')}
          onChange={(e) => handleClick(e.target)}
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" strokeWidth={1.5}
          stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
        Estacionamento gratuito
      </label>

      {/* TV */}
      <label htmlFor='TV' className='flex gap-2 items-center px-4 py-3 border border-gray-300 rounded-xl cursor-pointer'>
        <input
          type='checkbox'
          id='TV'
          value='TV'
          checked={isChecked('TV')}
          onChange={(e) => handleClick(e.target)}
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" strokeWidth={1.5}
          stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
        TV
      </label>

      {/* Rádio */}
      <label htmlFor='radio' className='flex gap-2 items-center px-4 py-3 border border-gray-300 rounded-xl cursor-pointer'>
        <input
          type='checkbox'
          id='radio'
          value='radio'
          checked={isChecked('radio')}
          onChange={(e) => handleClick(e.target)}
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="m3.75 7.5 16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 0 0 4.5 21h15a2.25 2.25 0 0 0 2.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0 0 12 6.75Z" />
        </svg>
        Rádio
      </label>

      {/* Pets */}
      <label htmlFor='pets' className='flex gap-2 items-center px-4 py-3 border border-gray-300 rounded-xl cursor-pointer'>
        <input
          type='checkbox'
          id='pets'
          value='pets'
          checked={isChecked('pets')}
          onChange={(e) => handleClick(e.target)}
        />
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABW0lEQVR4nO2Uz0rDQBDG8wR6U/Cq7yCIUo+B/b5touZgfZse7Fn7DupLSKvQCuIziO1F8U/rQT3ooTKQhSGYuptcOzAQZne+38xOmChaWB0zxuySfCQ5jON4ycWzLFsGcAPgCUCjMoDkHcmZOIBTFwfQdXGSt5UBAL6U0EjFxyr+UQcwVkKf/4GrALp/PYV+OpIn3oLGmCMA7wCu0jRdkcECGMigjTE7CtyQmJzJHZKrJK/z3FYpQNpVQz3zLYzkheroYd7FNwV4LXR3kBcwArBfyJuU5XlVAmCb5I8S+W42m1slnZ+XAuTdSfYBTEkeKoGhAjuhgSqglef0RSMKMQAsiju31pqojpHckHVQBpA/KUmS9UriMkiSL3PEnT+T3AutvOMhPCvM5Dik+mkogOQkpINehQ4uvQHW2jVZFwGAnuR4AxRoE0A73zP3slHF82+JteVOsPDCImW/7UxXDbL82YEAAAAASUVORK5CYII="
          alt="pets"
          className="w-6 h-6"
        />
        Pets
      </label>

      {/* Entrada privada */}
      <label htmlFor='entrance' className='flex gap-2 items-center px-4 py-3 border border-gray-300 rounded-xl cursor-pointer'>
        <input
          type='checkbox'
          id='entrance'
          value='entrance'
          checked={isChecked('entrance')}
          onChange={(e) => handleClick(e.target)}
        />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" strokeWidth={1.5}
          stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
        Entrada privada
      </label>
    </div>
  );
};

export default Perks;
