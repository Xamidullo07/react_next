import React from "react";
import "./style.css";
import wallet from "./wallet.png";

function Wallet() {
  return (
    <section className="ewallet">
      <div className="container">
        <div className="text-content">
          <h2>OSON elektron Hamyon</h2>
          <p>
            Har qanday UZCARD, HUMO, Visa, MasterCard kartalari orqali mahalliy
            yoki xalqaro kartalarni bog‘lashingiz mumkin.
          </p>
          <button className="create-btn">+ yaratish</button>
        </div>
        <div className="image-content">
          <img src={wallet.src} alt="Elektron hamyon" />
        </div>
      </div>
    </section>
  );
}

export default Wallet;
