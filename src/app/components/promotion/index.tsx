import React from "react";
import ArrowRight from "../common/arrowright";

const Promotion = () => {
  return (
    <div className="flex flex-col gap-24 py-24 items-start w-full">
      <div className="flex w-full justify-between gap-10 bg-base-100 p-10 border border-zinc-800">
        <div className="flex flex-col gap-14 items-start justify-between w-full max-w-xl">
          <div className="flex flex-col gap-4 text-start">
            <h2 className="uppercase text-primary font-semibold text-2xl tracking-widest">
              Promociones
            </h2>
            <h1 className="text-5xl font-bold">Impulsa tu proyecto</h1>
          </div>
          <p className="text-lg">
            Si necesitas promocionar tu proyecto, no dudes en ponerte en contacto conmigo y discutiremos las mejores opciones.
          </p>
        </div>
        <div className="flex items-end justify-end group">
          <a href="">
            <button className="flex items-center gap-3 text-xl font-semibold btn btn-primary rounded-none">
              Contacta conmigo{" "}
              <div className="rotate-45 group-hover:transform group-hover:translate-x-1 transition duration-300 ease-in-out">
                <ArrowRight width={14} />
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
