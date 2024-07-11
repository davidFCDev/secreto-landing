import React from "react";
import { BsSubstack } from "react-icons/bs";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import ArrowRight from "../common/arrowright";

const Links = () => {
  return (
    <div className="flex flex-col gap-20 py-24 items-center w-full">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="uppercase text-primary font-semibold text-2xl tracking-widest">
          Social
        </h2>
        <h1 className="text-5xl font-bold">Encuéntrame aqui</h1>
      </div>
      <div className="w-full flex">
        <div className="flex flex-col p-12 bg-base-100 w-full h-[400px] justify-between border border-zinc-800 cursor-pointer hover:bg-primary hover:text-base-300 transition duration-300 ease-in-out">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold uppercase">Find me on the feed</h2>
            <p className="text-lg">200k+ followers</p>
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
        </div>
        <div className="flex flex-col p-10 bg-base-100 w-full h-[400px] justify-between border border-zinc-800 cursor-pointer hover:bg-primary hover:text-base-300 transition duration-300 ease-in-out">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold uppercase">Join our community</h2>
            <p className="text-lg">300k+ members</p>
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
        </div>

        <div className="indicator w-full">
          <span className="indicator-item badge badge-primary px-5 py-4 text-base font-semibold">
            new
          </span>
          <div className="flex flex-col p-10 bg-base-100 w-full h-[400px] justify-between border border-zinc-800 cursor-pointer hover:bg-primary hover:text-base-300 transition duration-300 ease-in-out">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-bold uppercase">Get membership</h2>
              <p className="text-lg">be always early</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
