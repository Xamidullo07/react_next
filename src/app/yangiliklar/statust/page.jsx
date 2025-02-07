import React from "react";
import "./stayle.css";
import item_img from "../../../../public/Vector (1).svg";

function Statust() {
  return (
    <div>
      <div className="statuslar-container">
        <h2 className="statuslar-title">OSON statuslarini olish</h2>

        <div className="statuslar-steps">
          <div className="status-step">
            <h3>Nima kerak</h3>
            <p>Yoshi: 18 dan yuqori</p>
            <p>Passport</p>
          </div>
          <div className="status-step">
            <h3>Ish vaqti</h3>
            <p>Du - Ju</p>
            <p>9:00 - 18:00</p>
          </div>
          <div className="status-step">
            <h3>Bog‘lanish</h3>
            <p>+71 207 80 80</p>
            <p>@oson_official</p>
          </div>
        </div>

        <div className="statuslar-cards">
          <div className="status-card">
            <p className="card-header">Boshlang‘ich</p>
            <img src={item_img.src} alt="Hamyon" className="card-icon" />
            <p className="card-title">Hamyon ochilganda</p>
            <p className="card-subtitle">Hamyon uchun</p>
            <p className="card-price">1 500 000 so‘m</p>
            <p className="card-subtitle">Bir martalik to‘lov</p>
            <p className="card-price">300 000 so‘m</p>
          </div>
          <div className="status-card">
            <p className="card-header">Boshlang‘ich</p>
            <img src={item_img.src} alt="Hamyon" className="card-icon" />
            <p className="card-title">Hamyon ochilganda</p>
            <p className="card-subtitle">Hamyon uchun</p>
            <p className="card-price">1 500 000 so‘m</p>
            <p className="card-subtitle">Bir martalik to‘lov</p>
            <p className="card-price">300 000 so‘m</p>
          </div>
          <div className="status-card">
            <p className="card-header">Boshlang‘ich</p>
            <img src={item_img.src} alt="Hamyon" className="card-icon" />
            <p className="card-title">Hamyon ochilganda</p>
            <p className="card-subtitle">Hamyon uchun</p>
            <p className="card-price">1 500 000 so‘m</p>
            <p className="card-subtitle">Bir martalik to‘lov</p>
            <p className="card-price">300 000 so‘m</p>
          </div>
        </div>

        <div className="statuslar-steps-list">
          <div className="step">
            <div className="step-number">1</div>
            <p>Boshlang‘ich statusni olish uchun mobile ilovani yuklab oling</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <p>Asosiy statusni olish uchun ariza yuboring</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <p>
              Professional statusni olish uchun bizning ofisga tashrif buyuring
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statust;
