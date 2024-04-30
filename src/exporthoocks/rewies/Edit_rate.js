import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditProductReview } from "../../redux/actions/ProductRewieAction";
import notify from "../notification";
const EditRate = (Allcomments) => {
  const dispatch = useDispatch();

  console.log(Allcomments._id);
  const [showEdit, setShowEdit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stars, setStars] = useState(Allcomments.rating);
  const [text, setText] = useState(Allcomments.review);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const ratingChanged = (e) => {
    setStars(e);
  };

  const ChangeText = (e) => {
    setText(e.target.value);
  };
  //   console.log(Allcomments);
  const handleEdit = async () => {
    setLoading(true);
    await dispatch(
      EditProductReview(Allcomments._id, {
        review: text,
        rating: stars,
      })
    );
    setLoading(false);
    handleCloseEdit();
  };
  const select = useSelector((item) => item.Review.editreview);

  useEffect(() => {
    if (loading === false) {
      if (select) {
        if (select.status && select.status === 200) {
          notify("تم التعديل بنجاح", "success");
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        } else {
          notify("هناك مشكله في التعديل", "error");
        }
      }
    }
  }, [loading]);

  return [
    handleShowEdit,
    setShowEdit,
    handleCloseEdit,
    handleEdit,
    stars,
    setStars,
    ratingChanged,
    showEdit,
    text,
    ChangeText,
  ];
};

export default EditRate;
