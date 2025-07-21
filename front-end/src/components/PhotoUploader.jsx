import React from 'react';
import axios from 'axios';

const PhotoUploader = ({ photoLink, setPhotoLink, photos, setPhotos }) => {
  const uploadPhotoByLink = async () => {
    if (!photoLink) {
      alert("Você precisa inserir um link antes de enviar.");
      return;
    }

    try {
      const response = await axios.post("/places/upload/link", { link: photoLink });
      const { filename } = response.data;

      setPhotos(prev => [...prev, filename]);
      setPhotoLink("");
    } catch (err) {
      console.error("Erro ao enviar foto por link:", err);
      alert("Erro ao enviar foto. Verifique o link.");
    }
  };

  const removePhoto = (filename) => {
    setPhotos(prevPhotos => prevPhotos.filter(photo => photo !== filename));
  };

  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* Link da foto */}
      <div className="flex flex-col gap-1">
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
            type="button"
            onClick={uploadPhotoByLink}
            className="transition hover:bg-gray-200 border border-gray-300 rounded-full px-4 py-2 bg-gray-100 cursor-pointer"
          >
            Enviar foto
          </button>
        </div>
      </div>

      {/* Galeria de fotos + botão de upload */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((link) => (
          <div
            key={link}
            className="relative aspect-square rounded-2xl border border-gray-300 overflow-hidden hover:bg-gray-50"
          >
            <img
              src={`http://localhost:3000/uploads/${link}`}
              alt="img do lugar"
              className="w-full h-full object-cover"
              onError={e => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = '/fallback.png'; // fallback opcional
              }}
            />
            <button
              type="button"
              onClick={() => removePhoto(link)}
              className="absolute top-2 right-2 bg-black bg-opacity-60 text-white rounded-full px-2 py-0.5 text-sm"
            >
              &times;
            </button>
          </div>
        ))}

        {/* Bloco de upload por arquivo */}
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
    </div>
  );
};

export default PhotoUploader;
