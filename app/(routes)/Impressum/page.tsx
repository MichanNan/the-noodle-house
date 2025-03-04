import React from "react";

const ImpressumPage = () => {
  return (
    <div className="w-[70%] mx-auto">
      <h1>Impressum</h1>

      <p>
        NL Food Service GmbH
        <br />
        Bauernvogtkoppel 55c
        <br />
        22303 Hamburg
      </p>
      {/* 
      <p>
        Handelsregister: &#91;Nummer des Registereintrags&#93;
        <br />
        Registergericht: &#91;Name des Registergerichts&#93;
      </p> */}

      <p>
        <strong>Vertreten durch:</strong>
        <br />
        Zhan Niu
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: +49 40 22759255
        <br />
        E-Mail: info@the-noodle-house.de
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europ&auml;ische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ec.europa.eu/consumers/odr/
        </a>
        .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2>
        Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
      </h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <p>
        Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
      </p>
    </div>
  );
};

export default ImpressumPage;
