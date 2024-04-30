import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllWishlistAction } from "../../redux/actions/WishlishAction";

const ViewFavoriteProduct = () => {
  const [loading, setLoading] = useState(true);
  const [favProd, setFavProd] = useState([]);
  const dispatch = useDispatch();
  const washlistId = useSelector((item) => item.WishList.getallwishlist);

  // console.log(localStorage.getItem("token"));
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(GetAllWishlistAction());
      setLoading(false);
    };
    get();
  }, []);

  useEffect(() => {
    if (loading === false) {
      if (washlistId.data) {
        // console.log(washlistId.data);
        setFavProd(washlistId.data);
      }
    }
  }, [loading]);
  return [favProd];
};

export default ViewFavoriteProduct;
