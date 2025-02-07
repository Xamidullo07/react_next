import React from "react";
import "./style.css";
import hamyonImg from "../../../public/Vector.svg";
import Statust from "./statust/page";

function Yangiliklar() {
  return (
    <div>
      <section className="oson-wallet">
        <div className="oson-wallet-container">
          <div className="oson-wallet-text">
            <h1>
              OSON Hamyon <br /> statusini yangilang
            </h1>
            <p>Yangi moliyaviy imkoniyatlar olamini kashf eting</p>
          </div>

          <div className="oson-wallet-image">
            <img
              src={hamyonImg.src}
              alt="Oson Hamyon"
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>
      <Statust />
    </div>
  );
}

export default Yangiliklar;
