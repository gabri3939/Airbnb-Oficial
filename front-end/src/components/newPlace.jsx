// (parte de cima mantida)
import React, { useState } from "react";
import Perks from "./Perks";
import axios from "axios";
import { Navigate } from "react-router-dom";
import PhotoUploader from "./PhotoUploader";
import { useEffect } from "react";

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

  <PhotoUploader {...{ photoLink, setPhotoLink, photos, setPhotos }} />

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
