import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeletProductReview } from "../../redux/actions/ProductRewieAction";
import notify from "../../exporthoocks/notification";
const Deleterate = (Allcomments) => {
  const dispatch = useDispatch();

  const [showDelete, setShowDelete] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);
  const handleDelete = async () => {
    setLoading(true);
    await dispatch(DeletProductReview(Allcomments._id));
    setLoading(false);
    setShowDelete(false);
  };
  const select = useSelector((item) => item.Review.deltereview);

  useEffect(() => {
    if (loading === false) {
      if (select) {
        if (select.status && select.status === 204) {
          notify("تم حذف تعليقك", "success");
          window.location.reload();
        } else {
          notify("هناك مشكله في حذف التعليق حاول مره اخري", "error");
        }
      }
    }
  }, [loading]);

  return [handleShow, showDelete, handleClose, handleDelete];
};

export default Deleterate;
