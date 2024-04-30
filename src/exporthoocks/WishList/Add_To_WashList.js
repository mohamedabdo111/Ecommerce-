import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddToWishListAction,
  RemoveFromWishListAction,
} from "../../redux/actions/WishlishAction";
import notify from "../notification";

const AddToWashListHock = (item) => {
  const [state, setState] = useState(true);
  const [loading, setLoading] = useState(true);
  const [removeloading, setRemoveloading] = useState(true);

  const res = useSelector((item) => item.WishList.addwishlist);
  const removeItem = useSelector((item) => item.WishList.removewishlist);

  const dispatch = useDispatch();

  //   when add in washlist
  const AddToWishList = async () => {
    setState(false);
    setLoading(true);
    await dispatch(
      AddToWishListAction({
        productId: item._id,
      })
    );
    setLoading(false);
  };

  //when remove from washlist
  const RemoveFromWishList = async () => {
    setState(true);
    setRemoveloading(true);
    await dispatch(RemoveFromWishListAction(item._id));
    setRemoveloading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تم اضافه المنتج الي المفضله", "success");
        return;
      } else if (res && res.status === 401) {
        window.location.href = "/login";
      }
    }
  }, [loading]);

  useEffect(() => {
    if (removeloading === false) {
      console.log(removeItem);
      if (removeItem && removeItem.status === 200) {
        notify("تم حذف المنتج من المفضله", "warn");
      }
    }
  }, [removeloading]);

  return [state, AddToWishList, setState, RemoveFromWishList];
};

export default AddToWashListHock;
