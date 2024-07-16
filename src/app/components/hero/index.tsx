import Image from "next/image";
import React from "react";
import Spiral from "../common/spiral";

const Hero = () => {
  return (
    <div className="flex w-full justify-between pt-10 items-center min-h-screen">
      <div className="flex flex-col items-start max-w-3xl">
        <h1 className="text-6xl sm:text-8xl font-extrabold">
          haciendo fácil el ecosistema{" "}
          <span className="text-primary">Defi</span>
        </h1>
        <p className="py-6 text-lg flex gap-3">
          Cazando airdrops <span>|</span> Maximiza tu capital <span>|</span>{" "}
          Contenido diario
        </p>
        <button className="btn btn-primary font-bold tracking-wider text-xl px-6 uppercase">
          Suscríbete
        </button>
      </div>
      <div className="relative flex items-center justify-center">
        <Image
          src="/logo.svg"
          alt="logo secreto defi"
          width={400}
          height={400}
          objectFit="cover"
          quality={100}
        />
        <div className="absolute">
          <Spiral />
        </div>
      </div>
    </div>
  );
};

export default Hero;
