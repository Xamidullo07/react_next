import React from "react";
import "./style.css";

function Tarif() {
  return (
    <div>
      <div className="news-detail-container">
        {/* Sidebar */}
        <div className="sidebar">
          <div className="sidebar-box">
            <ul>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="news-content">
          <div className="news-header">
            <div className="news-title">
              <h2>
                Rossiyaning Visa, Mastercard va Мир kartalari OSON ilovasida!
              </h2>
            </div>
            <div className="news-logo">
              <img src="/oson-logo.png" alt="OSON" />
            </div>
          </div>

          <p className="news-date">11. May, 2022</p>

          <p className="news-text">
            Rossiya kartalari orqali siz mobil aloqa, kommunal xizmatlardan
            tortib PUBG, AppStore va Steam-gacha bo‘lgan har qanday xizmatlar
            uchun to‘g‘ridan-to‘g‘ri ilovada to‘lovni amalga oshirishingiz
            mumkin. Shuningdek, kartalaringizni OSON-ga ulab UzCARD va HUMO
            kartalariga o‘tkazmalarni amalga oshirishingiz mumkin.
          </p>

          <p className="news-text">
            UzMIR va Mir kartalari orqali siz mobil aloqa, kommunal xizmatlardan
            tortib PUBG, AppStore va Steam-gacha bo‘lgan har qanday xizmatlar
            uchun to‘g‘ridan-to‘g‘ri ilovada to‘lovni amalga oshirishingiz
            mumkin.
          </p>

          <h3 className="news-subtitle">Maqsadimiz</h3>

          <p className="news-text">
            Shuningdek, kartalaringizni OSON-ga ulab UzCARD va HUMO kartalariga
            o‘tkazmalarni amalga oshirishingiz mumkin.
          </p>

          <div className="news-image">
            <img src="/oson-news.png" alt="OSON News" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tarif;
