// (parte de cima mantida)
import React, { useState } from "react";
import Perks from "./Perks";
import axios from "axios";
import { Navigate } from "react-router-dom";

const NewPlace = () => {
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [photos, setPhotos] = useState([]); // ainda enviado no form
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extras, setExtras] = useState("");
  const [price, setPrice] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("");
  const [redirect, setRedirect] = useState(false);

  // 🔇 Botão "Adicionar foto" agora não faz nada
  const addPhotoByLink = (e) => {
    e.preventDefault();
    console.log("Função desativada por enquanto.");
  };

  // 🔇 Remoção de fotos também desativada
  const removePhoto = () => {
    console.log("Função de remover desativada.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !title ||
      !city ||
      !description ||
      !price ||
      !checkin ||
      !checkout ||
      !guests
    ) {
      alert("Preencha tudo!");
      return;
    }

    try {
      await axios.post("/places", {
        title,
        city,
        photos,
        description,
        perks,
        extras,
        price,
        checkin,
        checkout,
        guests,
      });
      setRedirect(true);
    } catch (err) {
      console.error(err);
      alert("Erro ao criar anúncio");
    }
  };

  if (redirect) return <Navigate to="/account/places" />;

  return (
   <form onSubmit={handleSubmit} className="w-full px-8 flex flex-col gap-6">
  {/* Título */}
  <div className="flex flex-col gap-1">
    <label className="ml-2 text-2xl font-bold">Título</label>
    <input
      type="text"
      placeholder="Digite o título do anúncio"
      className="border border-gray-300 rounded-full px-4 py-2"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  </div>

  {/* Cidade */}
  <div className="flex flex-col gap-1">
    <label className="ml-2 text-2xl font-bold">Cidade e País</label>
    <input
      type="text"
      placeholder="Ex: São Paulo, Brasil"
      className="border border-gray-300 rounded-full px-4 py-2"
      value={city}
      onChange={(e) => setCity(e.target.value)}
    />
  </div>

  {/* Link da foto */}
  <div className="flex flex-col gap-1 mt-2">
    <label className="ml-2 text-2xl font-bold">Adicione uma foto pelo link</label>
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Coloque o link da foto aqui"
        className="border border-gray-300 rounded-full px-4 py-2 grow"
        value={photoLink}
        onChange={(e) => setPhotoLink(e.target.value)}
      />
      <button
        onClick={addPhotoByLink}
        className="transition hover:bg-gray-200 border border-gray-300 rounded-full px-4 py-2 bg-gray-100 cursor-pointer"
      >
        Enviar foto
      </button>
    </div>
  </div>

  {/* Galeria de fotos (layout visual apenas) */}
  <div className="flex flex-wrap gap-2">
    {photos.length > 0 &&
      photos.map((link) => (
        <div key={link} className="relative w-24 h-24 rounded-xl overflow-hidden">
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-sm text-gray-500">
            Foto
          </div>
          <button
            type="button"
            onClick={() => removePhoto(link)}
            className="absolute top-1 right-1 bg-black bg-opacity-50 text-white rounded-full px-1"
          >
            &times;
          </button>
        </div>
      ))}
  </div>

  {/* Upload arquivo */}
  <div className="grid grid-cols-5 gap-4 items-center">
    <label
      htmlFor="file"
      className="flex flex-col items-center justify-center cursor-pointer aspect-square rounded-2xl border border-gray-300 hover:bg-gray-50 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 mb-1"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
        />
      </svg>
      <span className="text-sm font-medium select-none">Upload</span>
      <input type="file" id="file" className="hidden" />
    </label>
  </div>

  {/* Descrição */}
  <div className="flex flex-col gap-1">
    <label className="ml-2 text-2xl font-bold">Descrição</label>
    <textarea
      placeholder="Descreva detalhes do espaço, localização, ambiente, etc."
      className="resize-none h-56 border border-gray-300 rounded-2xl px-4 py-2"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
  </div>

  {/* Comodidades */}
  <div className="flex flex-col gap-1">
    <label className="ml-2 text-2xl font-bold">Comodidades</label>
    <Perks perks={perks} setPerks={setPerks} />
  </div>

  {/* Extras */}
  <div className="flex flex-col gap-1">
    <label className="ml-2 text-2xl font-bold">Informações extras</label>
    <textarea
      placeholder="Regras da casa, observações, recomendações, etc."
      className="resize-none h-56 border border-gray-300 rounded-2xl px-4 py-2"
      value={extras}
      onChange={(e) => setExtras(e.target.value)}
    />
  </div>

  {/* Preço e horários */}
  <div className="flex flex-col gap-1">
    <h2 className="ml-2 text-2xl font-bold">Restrições e Preço</h2>
    <div className="grid [grid-template-columns:repeat(auto-fit,minmax(225px,1fr))] gap-6">
      <input
        type="number"
        placeholder="Preço (ex: 150)"
        className="border border-gray-300 rounded-full px-4 py-2"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Check-in (ex: 14:00)"
        className="border border-gray-300 rounded-full px-4 py-2"
        value={checkin}
        onChange={(e) => setCheckin(e.target.value)}
      />
      <input
        type="text"
        placeholder="Check-out (ex: 11:00)"
        className="border border-gray-300 rounded-full px-4 py-2"
        value={checkout}
        onChange={(e) => setCheckout(e.target.value)}
      />
      <input
        type="number"
        placeholder="Nº de convidados (ex: 4)"
        className="border border-gray-300 rounded-full px-4 py-2"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />
    </div>
  </div>

  <button
    type="submit"
    className="hover:bg-primary-400 bg-primary-400 min-w-44 cursor-pointer rounded-full px-4 py-2 text-white transition text-center"
  >
    Salvar Informações
  </button>
</form>

  );
};

export default NewPlace;
