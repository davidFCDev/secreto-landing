import React from "react";
import { BsSubstack } from "react-icons/bs";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import ArrowRight from "../common/arrowright";

const Links = () => {
  return (
    <div className="flex flex-col py-14 small:py-24 gap-10 small:gap-24 items-center w-full">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="uppercase text-primary font-semibold text-xl small:text-2xl tracking-widest">
          Social
        </h2>
        <h1 className="text-4xl small:text-5xl font-bold">Encuéntrame aquí</h1>
      </div>
      <div className="w-full flex flex-col small:flex-row">
        <a href="https://x.com/SecretoDefi" target="_blank" className="flex flex-col p-10 bg-base-100 w-full h-[350px] small:h-[400px] justify-between border border-zinc-800 cursor-pointer hover:bg-primary hover:text-base-300 transition duration-300 ease-in-out">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg small:text-xl font-bold uppercase">Encuéntrame en la red</h2>
            <p className="text-base small:text-lg">34k+ seguidores</p>
          </div>
          <div className="flex w-full justify-between items-end">
            <div className="flex flex-col-reverse gap-10 items-start justify-between text-5xl font-bold">
              <h2>X.com</h2>
              <div className="text-6xl">
                <FaXTwitter />
              </div>
            </div>
            <ArrowRight width={18} />
          </div>
        </a>
        <a href="https://t.me/secretodefi" target="_blank" className="flex flex-col p-10 bg-base-100 w-full h-[350px] small:h-[400px] justify-between border border-zinc-800 cursor-pointer hover:bg-primary hover:text-base-300 transition duration-300 ease-in-out">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg small:text-xl font-bold uppercase">Únete a la comunidad</h2>
            <p className="text-base small:text-lg">5k+ miembros</p>
          </div>
          <div className="flex w-full justify-between items-end">
            <div className="flex flex-col-reverse gap-10 items-start justify-between text-5xl font-bold">
              <h2>Telegram</h2>
              <div className="text-6xl">
                <FaTelegram />
              </div>
            </div>
            <ArrowRight width={18} />
          </div>
        </a>

        <div className="indicator w-full">
          <span className="indicator-item badge badge-primary px-5 py-4 text-base font-semibold">
            new
          </span>
          <a href="https://secretodefi.substack.com/subscribe" target="_blank" className="flex flex-col p-10 bg-base-100 w-full h-[350px] small:h-[400px] justify-between border border-zinc-800 cursor-pointer hover:bg-primary hover:text-base-300 transition duration-300 ease-in-out">
            <div className="flex flex-col gap-2">
              <h2 className="text-lg small:text-xl font-bold uppercase">Accede a la membresía</h2>
              <p className="text-base small:text-lg">Entérate primero</p>
            </div>
            <div className="flex w-full justify-between items-end">
              <div className="flex flex-col-reverse gap-10 items-start justify-between text-5xl font-bold">
                <h2>Substack</h2>
                <div className="text-6xl">
                  <BsSubstack />
                </div>
              </div>
              <ArrowRight width={18} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
