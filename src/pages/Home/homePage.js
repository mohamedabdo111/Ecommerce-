import React from "react";
import Slider from "../../components/home/slider";
import Categore from "../../components/home/categore";
import Cardsection from "../../components/products/cardsection";
import Sponser from "../../components/home/sponser";
import ParentCards from "../../components/brands/parentCards";
import GetProducHock from "../../exporthoocks/Product/get-product-hock";

const HomePage = () => {
  const [item] = GetProducHock();
  // console.log(item);

  return (
    <div>
      <Slider></Slider>

      <Categore></Categore>
      <Cardsection
        title={"الاكثر مبيعا"}
        btnName={"المزيد"}
        anything={"/products"}
        product={item}
      ></Cardsection>
      <Sponser></Sponser>
      <Cardsection
        title={"احدث الازياء"}
        btnName={"المزيد"}
        anything={"/products"}
        product={item}
      ></Cardsection>
      <ParentCards></ParentCards>
    </div>
  );
};

export default HomePage;
