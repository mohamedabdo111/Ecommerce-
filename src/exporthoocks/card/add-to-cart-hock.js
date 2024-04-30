import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCartAction } from "../../redux/actions/CartAction";
import notify from "../notification";
import { useNavigate } from "react-router-dom";

const AddToCartHock = (id, item) => {
  const [selectColor, setSelectColor] = useState("");
  const [selectIndex, setSelectIndex] = useState("");
  const [loading, setLoading] = useState(true);
  const dispath = useDispatch();
  const navigate = useNavigate();

  const clicker = (index, color) => {
    setSelectColor(color);
    setSelectIndex(index);
  };

  const AddToCart = async () => {
    if (
      item &&
      item.availableColors &&
      item.availableColors.length >= 1 &&
      selectColor === ""
    ) {
      notify("يجب ان تختار اللون المناسب", "warn");
      return;
    }
    setLoading(true);
    await dispath(
      AddToCartAction({
        productId: id,
        color: selectColor,
      })
    );
    setLoading(false);
  };
  const res = useSelector((item) => item.cart.addtocart);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تم اضافه المنتج الي العربه", "success");
        setTimeout(() => {
          window.location.reload();
        }, 3500);
      } else {
        notify("انت غير مسجل من فضلك  قم بتسجيل الدخول اولا", "warn");

        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    }
  }, [loading]);

  return [selectColor, selectIndex, clicker, AddToCart];
};

export default AddToCartHock;
