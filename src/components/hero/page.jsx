import "./style.css";
import mobil_img from "./mobil_img.png";
import btn1 from "../../../public/Group 48096649.png";
import btn2 from "../../../public/Frame 48096780.svg";

export default function Hero() {
  return (
    <div className="home_pages">
      <div className="container">
        <div className="hero_content">
          <h2 className="home_title">
            Barcha Xalqaro va Mahalliy To'lovlar Oson
          </h2>
          <div className="buttons">
            <button className="store_btn">
              <img src={btn1.src} alt="Google Play" /> Google Play
            </button>
            <button className="store_btn">
              <img src={btn2.src} alt="App Store" /> App Store
            </button>
          </div>
        </div>
        <div className="hero_image">
          <img src={mobil_img.src} alt="Mobile App" />
        </div>
      </div>

      <div className="features">
        <div className="feature_card">
          <h3>Ommabop</h3>
          <p>
            Har qanday mahalliy yoki xalqaro kartalarni ulang. Tezroq a'zo
            bo‘ling!
          </p>
        </div>
        <div className="feature_card">
          <h3>Oson</h3>
          <p>
            Naqd pul yoki kartani olib yurish shart emas, sizning telefoningiz
            elektron hamyon bo‘ladi.
          </p>
        </div>
        <div className="feature_card">
          <h3>Xavfsiz</h3>
          <p>
            Biz sizning shaxsiy ma'lumotlaringizni ishonchli himoya qilamiz.
          </p>
        </div>
      </div>
    </div>
  );
}
