import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/img1.png";
import discountTwo from "../../images/discountTwo.png";
import discountThree from "../../images/discountThree.png";
import discou from "../../images/dis1.webp";
const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (item) => {
    setIndex(item);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="bg-primary">
        <div className="col-sm-12 col-md-6 h-100 d-flex justify-content-center align-items-center">
          <img className="imgslider" src={discou} alt="sliderImages"></img>
        </div>
        <Carousel.Caption className="textSlider col-sm-12 col-md-6 h-100">
          <h3>SHOP Online</h3>
          <p>
            Spring Sale Alert: Enjoy a whopping 50% off on all online purchases!
            Hurry, grab your favorites before they're gone! Get ready to save
            big with our exclusive online discount: 50% off everything! Don't
            miss out, shop now! Unlock incredible savings online with a generous
            50% discount across our entire collection! Shop smart, shop savvy!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="bg-success">
        <div className="col-sm-12 col-md-6 h-100 d-flex justify-content-center align-items-center">
          <img className="imgslider" src={discountTwo} alt="sliderImages"></img>
        </div>
        <Carousel.Caption className="textSlider col-sm-12 col-md-6">
          <h3>خصم 10% الحق الان</h3>
          <p>
            تنبيه! تخفيضات الربيع: استمتع بخصم 10% على جميع الطلبات عبر
            الإنترنت! سارع، احصل على مفضلاتك قبل نفاد الكمية! استعد لتوفير كبير
            مع خصم حصري عبر الإنترنت: 10% على كل شيء! لا تفوت الفرصة، تسوق الآن!
            احصل على توفير لا يصدق عبر الإنترنت مع خصم سخي بنسبة 10% على
            مجموعتنا كاملة! تسوق بذكاء، وتسوق بذكاء!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="bg-dark">
        <div className="col-sm-12 col-md-6 h-100 d-flex justify-content-center align-items-center">
          <img
            className="imgslider"
            src={discountThree}
            alt="sliderImages"
          ></img>
        </div>
        <Carousel.Caption className="textSlider col-sm-12 col-md-6">
          <h3>خصم يصل الي 50% </h3>
          <p>
            تنبيه! تخفيضات الربيع: استمتع بنسبة خصم 50% على جميع المشتريات عبر
            الإنترنت! لا تفوت الفرصة، احصل على مفضلاتك الآن! توفير كبير ينتظرك
            عبر الإنترنت: خصم 50% على كل شيء! لا تضيع الوقت، قم بالتسوق الآن
            ووفر! خصم استثنائي! احصل على خصم بنسبة 50% عبر الإنترنت على مجموعتنا
            الكاملة! تسوق الآن واستفد من هذا العرض الرائع!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
