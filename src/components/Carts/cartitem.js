import React, { useEffect, useState } from "react";
// import one from "../../images/iphone1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { ClearOneCartAction } from "../../redux/actions/CartAction";
import notify from "../../exporthoocks/notification";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "react-bootstrap";
import UpdateCountHock from "../../exporthoocks/card/update-count-hock";

const Cartitem = ({ totalPrice, item }) => {
  const [loading, setLoading] = useState(true);
  const dispath = useDispatch();
  const deleteOneCart = async (id) => {
    setLoading(true);
    await dispath(ClearOneCartAction(id));
    setLoading(false);
  };
  console.log(item);

  const res = useSelector((item) => item.cart.clearone);
  console.log(res);
  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تم حذف المنتج", "success");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
  }, [loading]);
  const [ClickToUpdata, ChangeCount, count] = UpdateCountHock(item);
  return (
    <div className="d-flex align-items-center stylest my-2 justify-content-between gap-3">
      <img
        src={`http://127.0.0.1:8000/products/${item.product.imageCover}`}
        style={{ width: "25%", height: "fit-content" }}
        alt="imgae"
      />
      <div className=" w-75">
        <div>
          <div className="d-flex justify-content-between">
            <p className=" fw-bold text-secondary">
              {item.product.category.name}
            </p>
            <p
              className=" fw-bold text-secondary heart text-danger"
              onClick={() => deleteOneCart(item._id)}
            >
              <FontAwesomeIcon icon={faTrashCan} /> ازاله
            </p>
          </div>
          <p className=" text-secondary">{item.product.title}</p>
        </div>
        <div>
          <div className="parent-color-product">
            {item.color === "" ? null : (
              <div
                className="colorproduct"
                style={{ backgroundColor: `${item.color}` }}
              ></div>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div className=" text-secondary text-center">
            الكميه{" "}
            <input
              type="number"
              style={{ width: "50px" }}
              value={count}
              className=" text-center"
              onChange={ChangeCount}
            ></input>
            <Button className=" bg-dark me-2 border-0" onClick={ClickToUpdata}>
              تعديل الكيمه
            </Button>
          </div>
          <h5>{item.price} جنيه</h5>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Cartitem;
