"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const PopupModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="z-30 ">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center z-40 "
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
        contentLabel="Welcome Modal"
      >
        <div className="p-[40px] relative bg-white rounded w-[1000px] h-[400px] flex flex-col justify-center font-blod tracking-widest gap-4">
          <button
            className="absolute top-2 right-2 text-black text-2xl"
            onClick={closeModal}
          >
            &times; {/* X  */}
          </button>
          <h2 className="text-center text-2xl font-bold text-green-800">
            ERHALTE 10€ RABATT AUF DEINE NÄCHSTEN 3 Bestellungen MIT CODE:
            NOODLES
          </h2>
          <div className="text-center text-xl">
            Diesen kannst du am Ende des Bestellvorgangs unter "Rabattcode
            eingeben" einlösen
          </div>
          <div className="flex items-center justify-center h-screen">
            <Link
              href="https://thenoodlehouse.online-karte.com/"
              className="bg-green-800 text-white p-4 rounded-xl text-xl hover:bg-green-500 transition w-[250px] h-[50px] flex items-center justify-center"
            >
              Bestellen Online
            </Link>
          </div>
        </div>
      </Modal>
      <button
        className="fixed bottom-8 right-8 bg-green-800 text-white p-4 rounded-full text-xl hover:bg-green-500 transition"
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        Gutschein sichern
      </button>
    </div>
  );
};

export default PopupModal;
