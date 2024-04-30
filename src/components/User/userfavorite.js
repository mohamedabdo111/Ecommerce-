import React, { useEffect, useState } from "react";
import PaginationCode from "../utility/pagination";
import Cardsection from "../products/cardsection";
import { useDispatch, useSelector } from "react-redux";
import { GetAllWishlistAction } from "../../redux/actions/WishlishAction";

const Userfavorite = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [items, setItemes] = useState([]);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(GetAllWishlistAction());
      setLoading(false);
    };
    get();
  }, []);

  const res = useSelector((item) => item.WishList.getallwishlist);
  useEffect(() => {
    if (loading === false) {
      if (res && res.data) {
        // console.log(res);
        setItemes(res.data);
      }
    }
  }, [loading]);

  return (
    <div className="p-2">
      <h4>قائمه المفضله</h4>
      <Cardsection title={""} btnName={""} product={items}></Cardsection>
      {/* <PaginationCode></PaginationCode> */}
    </div>
  );
};

export default Userfavorite;
