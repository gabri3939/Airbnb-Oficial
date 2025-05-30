import React from 'react';

const Item = () => {
  return (
    <a href="/" className="flex flex-col gap-2">
      <img
        src="/img/imagem acomodação.png"
        alt="Imagem acomodação"
        className="aspect-square object-cover rounded-2xl"
      />

      <div>
        <h3 className="text-xl font-semibold">Rio de Janeiro, Brasil</h3>
        <p className="truncate text-gray-600">
          Relaxe neste espaço calmo e cheio de estilo. Studio no coração da Lapa, ao lado dos principais bares e baladas do bairro mais boêmio do Rio de Janeiro. Que tal ir à Escadaria Selarón, Santa Teresa, Arcos da Lapa e metrô a pé? Ou alugar uma bike e passear pelo deslumbrante Aterro do Flamengo visitando as praias mais famosas do Rio de Janeiro? Tudo isso você só encontra aqui neste aconchegante studio, com a localização perfeita para você não perder nenhuma atração do Rio. Venha aproveitar!
        </p>
        <p>
          <span className="font-semibold">R$ 550</span> por noite
        </p>
      </div>
    </a>
  );
};

export default Item;
