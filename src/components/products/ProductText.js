import React from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ProductDetailsHock from "../../exporthoocks/Product/get-product-details";
import AddToCartHock from "../../exporthoocks/card/add-to-cart-hock";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GetAllCartHock from "../../exporthoocks/card/get-all-cart-hock";

const ProductText = () => {
  const { id } = useParams();

  const [item, onecat] = ProductDetailsHock(id);
  const [selectColor, selectIndex, clicker, AddToCart] = AddToCartHock(
    id,
    item
  );

  return (
    <div>
      <div>
        <p className=" fw-bold text-secondary">{onecat.name}: </p>
        {item ? <p className=" text-secondary">{item.title}</p> : null}
        {item ? <p className="text-warning">{item.ratingsQuantity}</p> : null}
      </div>
      <div>
        <div className="parent-color-product">
          {item
            ? item.availableColors.map((color, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => clicker(index, color)}
                    className="colorproduct"
                    style={{
                      backgroundColor: `${color}`,
                      outline: selectIndex === index ? "3px solid" : "none",
                    }}
                  ></div>
                );
              })
            : null}
        </div>
        <p className=" fw-bold text-secondary">
          المواصفات:
          {item ? <p className="mt-2 fw-normal">{item.description}</p> : null}
        </p>
      </div>

      <div>
        {item ? (
          <Button className=" bg-light text-dark border-secondary text-secondary sallary">
            {item.price} جنيه
          </Button>
        ) : null}
        <Button className="mx-2 bg-black border-0" onClick={AddToCart}>
          اضف للعربه
        </Button>{" "}
        {/* <ToastContainer></ToastContainer> */}
      </div>
    </div>
  );
};

export default ProductText;
