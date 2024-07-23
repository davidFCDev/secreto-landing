"use client";

import React, { useState } from "react";
import LegalAdvice from "../components/legaladvice";
import Privacity from "../components/privacity";

import NavBar from "../components/nav";
import Footer from "../components/footer";

const Legal = () => {
  const [selected, setSelected] = useState(0);

  const tabs = [
    {
      title: "Aviso Legal",
      content: <LegalAdvice />,
    },
    {
      title: "Política de Privacidad",
      content: <Privacity />,
    },
  ];

  const handleTabChange = (index: number) => {
    setSelected(index);
  };

  return (
    <div className="w-full bg-base-300 min-h-screen">
      <NavBar />

      <main className="my-40 px-6 small:px-20 xlarge:px-40 flex flex-col gap-5 text-justify">
        <div className="flex flex-row gap-0 small:gap-10 justify-between">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabChange(index)}
              className={`text-xl font-semibold ${
                selected === index ? "text-primary hover:text-secondary" : " hover:text-primary"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <hr className="w-full border-2 border-base-100" />
        <div>{tabs[selected].content}</div>
      </main>

      <Footer />
    </div>
  );
};

export default Legal;
