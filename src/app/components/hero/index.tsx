import Image from "next/image";
import React from "react";
import Spiral from "../common/spiral";
import ArrowRight from "../common/arrowright";

const Hero = () => {
  return (
    <div className="flex w-full justify-between pt-10 items-center min-h-screen">
      <div className="flex flex-col items-start small:max-w-3xl">
        <h1 className="text-6xl small:text-8xl font-extrabold">
          Haciendo fácil el ecosistema{" "}
          <span className="text-primary">Defi</span>
        </h1>
        <ul className="py-6 text-xs small:text-lg flex whitespace-nowrap gap-3">
          <li>Cazando airdrops</li> <span className="hidden small:block">|</span>{" "}
          <li>Maximiza tu capital</li> <span className="hidden small:block">|</span>{" "}
          <li>Contenido diario</li>
        </ul>
        <a
          href="https://secretodefi.substack.com/subscribe"
          target="_blank"
          className="group"
        >
          <button className="btn btn-primary font-bold tracking-wider text-xl px-6 uppercase flex items-center gap-2">
            <span>Suscríbete</span>
            <div className="transform transition-transform duration-300 group-hover:rotate-45">
              <ArrowRight width={14} />
            </div>
          </button>
        </a>
      </div>
      <div className="relative items-center justify-center hidden small:flex">
        <Image
          src="/logo.svg"
          alt="logo secreto defi"
          width={370}
          height={370}
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
