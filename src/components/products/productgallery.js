import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../images/img1.png";
import discountTwo from "../../images/discountTwo.png";
import discountThree from "../../images/discountThree.png";
import one from "../../images/iphone1.png";
import two from "../../images/iphone2.png";
import { useParams } from "react-router-dom";
import ProductDetailsHock from "../../exporthoocks/Product/get-product-details";
import { GetOneCategory } from "../../redux/actions/CategoryAction";
const Productgallery = () => {
  const { id } = useParams();

  const [item, onecat] = ProductDetailsHock(id);

  return (
    <div className="gallery">
      <Carousel slide={false} interval={20000}>
        {item ? (
          item.images.map((pic) => {
            return (
              <Carousel.Item>
                <img
                  className="gallerydetails"
                  src={pic}
                  alt="sliderImages"
                ></img>
              </Carousel.Item>
            );
          })
        ) : (
          <Carousel.Item>
            <img className="gallerydetails" src={one} alt="sliderImages"></img>
          </Carousel.Item>
        )}
      </Carousel>
    </div>
  );
};

export default Productgallery;
