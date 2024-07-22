import React from "react";
import Image from "next/image";

const Carousel = () => {
  const cardsData = [
    {
      imgSrc: "/post-1.png",
      title: "Salida de fiat",
      subtitle: "No mezcles caminos entre la entrada y salida.",
      twitterLink: "https://x.com/SecretoDefi/status/1632457063367319552",
    },
    {
      imgSrc: "/post-2.png",
      title: "Seguridad",
      subtitle: "Herramientas de seguridad para evitar perder tu liquidez.",
      twitterLink: "https://x.com/SecretoDefi/status/1714705695868670278",
    },
    {
      imgSrc: "/post-3.png",
      title: "Reclamos",
      subtitle: "Reclamar tokens, fondos o retirar liquidez de un protocolo desde el Smart Contract.",
      twitterLink: "https://x.com/SecretoDefi/status/1764707335484604839",
    },
    {
      imgSrc: "/post-4.png",
      title: "Proyectos",
      subtitle: "Paga con tus cryptos. Este bullrun lo vas a necesitar.",
      twitterLink: "https://x.com/SecretoDefi/status/1814676798472405491",
    },
  ];

  return (
    <div className="flex flex-col gap-24 py-24 items-center w-full">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="uppercase text-primary font-semibold text-2xl tracking-widest">
          X.com
        </h2>
        <h1 className="text-5xl font-bold">Algunos de mis post</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="card bg-base-100 w-96 shadow-xl rounded-none"
          >
            <div className="relative w-full h-56 bg-white">
              <Image
                src={card.imgSrc}
                alt={card.title}
                layout="fill"
                objectFit="contain"
                className="object-top"
              />
            </div>
            <div className="card-body">
              <h2 className="card-title">{card.title}</h2>
              <p>{card.subtitle}</p>
              <div className="card-actions justify-end">
                <a
                  href={card.twitterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary rounded-none font-bold"
                >
                  Ver en X
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
