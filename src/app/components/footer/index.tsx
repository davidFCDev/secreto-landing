import React from "react";
import { BsSubstack } from "react-icons/bs";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">Sobre mi</a>
        <a className="link link-hover">Contacto</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://x.com/SecretoDefi"
            target="_blank"
            className="text-xl"
          >
            <FaXTwitter />
          </a>
          <a href="https://t.me/secretodefi" target="_blank" className="text-xl">
            <FaTelegram />
          </a>
          <a href="https://secretodefi.substack.com/subscribe" target="_blank" className="text-xl">
            <BsSubstack />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Secreto Defi © ${new Date().getFullYear()} - Todos los derechos
          reservados
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
