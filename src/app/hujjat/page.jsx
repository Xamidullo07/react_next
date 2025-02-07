import React from "react";
import "./stayle.css";

function Hujjat() {
  return (
    <div>
      <div className="news-container">
        {/* Asosiy yangilik */}
        <div className="main-news">
          <img
            src="/news-main.jpg"
            alt="OSON news"
            className="main-news-image"
          />
          <div className="main-news-content">
            <h3>OSON O‘zbekistonning eng qulay va yaxshisi deb topildi</h3>
            <p>15 May, 2023</p>
            <button className="btn-read">Batafsil</button>
          </div>
        </div>

        {/* All news */}
        <h2 className="news-title">All news</h2>
        <div className="news-grid">
          <div className="news-card">
            <img src="/news-1.jpg" alt="news" />
            <div className="news-text">
              <h4>
                OSON va O‘zbekiston kibersport assotsiatsiyasi OCA bilan bitim
                imzoladilar
              </h4>
              <p>15 May, 2023</p>
              <button className="btn-read">Batafsil</button>
            </div>
          </div>

          <div className="news-card">
            <img src="/news-2.jpg" alt="news" />
            <div className="news-text">
              <h4>
                OSON va O‘zbekiston kibersport assotsiatsiyasi OCA bilan bitim
                imzoladilar
              </h4>
              <p>15 May, 2023</p>
              <button className="btn-read">Batafsil</button>
            </div>
          </div>

          <div className="news-card">
            <img src="/news-3.jpg" alt="news" />
            <div className="news-text">
              <h4>
                Rossiyaning Visa, Mastercard va Mir kartalari OSON ilovasida
              </h4>
              <p>15 May, 2023</p>
              <button className="btn-read">Batafsil</button>
            </div>
          </div>

          <div className="news-card">
            <img src="/news-4.jpg" alt="news" />
            <div className="news-text">
              <h4>OSON bilan PUBG to'lov qilish</h4>
              <p>15 May, 2023</p>
              <button className="btn-read">Batafsil</button>
            </div>
          </div>

          <div className="news-card">
            <img src="/news-5.jpg" alt="news" />
            <div className="news-text">
              <h4>
                Rossiyaning Visa, Mastercard va Mir kartalari OSON ilovasida
              </h4>
              <p>15 May, 2023</p>
              <button className="btn-read">Batafsil</button>
            </div>
          </div>

          <div className="news-card">
            <img src="/news-6.jpg" alt="news" />
            <div className="news-text">
              <h4>OSON bilan Musiqiy to‘lovlar va Gift kartalarni bo‘ling!</h4>
              <p>15 May, 2023</p>
              <button className="btn-read">Batafsil</button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="news-footer">
          <img src="/oson-logo.png" alt="OSON" className="footer-logo" />
          <p>OSON bilan Bo‘ling</p>
        </div>
      </div>
    </div>
  );
}

export default Hujjat;
