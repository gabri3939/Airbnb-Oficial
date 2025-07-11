import React, { useState } from 'react';
import Perks from './Perks'; // ajuste o caminho conforme sua estrutura
import axios from "axios";

const NewPlace = () => {
  const [Title, setTitle] = useState("");
  const [City, setCity] = useState("");
  const [Photos, setPhotos] = useState("");
  const [description, setDescription] = useState("");
  const [persk, setPersk] = useState([]);
  const [extras, setExtras] = useState("");
  const [price, setPrice] = useState("");
  const [checkin, setCheckin] = useState ("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ Title, City, Photos, description, persk });
  }; 
    //const NewPlace =  await    axios.post("/places", {

   // });
  return (
    <form onSubmit={handleSubmit} className='w-full px-8 flex flex-col gap-6'>

      {/* Título */}
      <div className='flex flex-col gap-1'>
        <label htmlFor='Title' className='ml-2 text-2xl font-bold'>Título</label>
        <input
          type="text"
          placeholder='Digite o título do seu anúncio'
          className='border border-gray-300 rounded-full px-4 py-2'
          id='Title'
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Cidade e País */}
      <div className='flex flex-col gap-1'>
        <label htmlFor='city' className='ml-2 text-2xl font-bold'>Cidade e País</label>
        <input
          type="text"
          placeholder='Digite a cidade e país do seu anúncio'
          className='border border-gray-300 rounded-full px-4 py-2'
          id='city'
          value={City}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      {/* Fotos */}
      <div className='flex flex-col gap-1 mt-2'>
        <label htmlFor='Photos' className='ml-2 text-2xl font-bold'>Fotos</label>
        <div className='flex gap-2'>
          <input
            type="text"
            placeholder='Adicione uma foto pelo link dela'
            className='border border-gray-300 rounded-full px-4 py-2 grow'
            id='Photos'
            value={Photos}
            onChange={(e) => setPhotos(e.target.value)}
          />
          <button className='transition hover:bg-gray-200 border border-gray-300 rounded-full px-4 py-2 bg-gray-100 cursor-pointer'>
            Enviar foto
          </button>
        </div>
      </div>

      {/* Upload quadrado */}
      <div className="grid grid-cols-5 gap-4 items-center">
        <label
          htmlFor="file"
          className="flex flex-col items-center justify-center cursor-pointer aspect-square rounded-2xl border border-gray-300 hover:bg-gray-50 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 mb-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
            />
          </svg>
          <span className="text-sm font-medium select-none">Upload</span>
        </label>
        <input type="file" id="file" className="hidden" />
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Descrição */}
      <div className='flex flex-col gap-1'>
        <label htmlFor='description' className='ml-2 text-2xl font-bold'>Descrição</label>
        <textarea
          placeholder='Digite a descrição do seu anúncio'
          className='resize-none h-56 border border-gray-300 rounded-2xl px-4 py-2'
          id='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Comodidades */}
      <div className='flex flex-col gap-1'>
        <label htmlFor='persk' className='ml-2 text-2xl font-bold'>Comodidades</label>
        <Perks setPersk={setPersk} />
      </div>



{/* Informações extra */}
      <div className='flex flex-col gap-1'>
        <label htmlFor='extras' className='ml-2 text-2xl font-bold'>Informações extras</label>
        <textarea
          placeholder='Coloque aqui qualquer tipo de informação do seu anúncio'
          className='resize-none h-56 border border-gray-300 rounded-2xl px-4 py-2'
          id='extras'
          value={extras}
          onChange={(e) => setExtras(e.target.value)}
        />
      </div>





      {/* Restrições e Preço */}
      <div className='flex flex-col gap-1'>
        <h2  className='ml-2 text-2xl font-bold'>Restrições e Preço</h2>
        <div  className='grid [grid-template-columns:repeat(auto-fit,minmax(225px,1fr))] gap-6'>
        <div className='flex flex-col gap-2'>
            <label className='ml-2 text-xl font-bold' htmlFor="price">Preço</label>
            <input
            type="number"
            placeholder='500'
            className='border border-gray-300 rounded-full px-4 py-2'
            id='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>




<div className='flex flex-col gap-2'>
            <label className='ml-2 text-xl font-bold' htmlFor="checkin">Checking</label>
            <input
            type="text"
            placeholder='16:00'
            className='border border-gray-300 rounded-full px-4 py-2'
            id='checkin'
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
          />
        </div>


<div className='flex flex-col gap-2'>
            <label className='ml-2 text-xl font-bold' htmlFor="checkout">Checkout</label>
            <input
            type="text"
            placeholder='12:00'
            className='border border-gray-300 rounded-full px-4 py-2'
            id='checkout'
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
          />
        </div>

        <div className='flex flex-col gap-2'>
            <label className='ml-2 text-xl font-bold' htmlFor="guests">Nº convidados</label>
            <input
            type="number"
            placeholder='4'
            className='border border-gray-300 rounded-full px-4 py-2'
            id='guests'
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />
        </div>





        </div>
        
        
      </div>





    <button className='hover:bg-primary-400 bg-primary-400  min-w-44 cursor-pointer  rounded-full px-4 py-2 text-white transition text-center'>Salvar Informações</button>
    </form>
  );
};

export default NewPlace;
