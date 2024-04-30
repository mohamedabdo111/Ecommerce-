import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { PostReviewAcion } from "../../redux/actions/ProductRewieAction";
import notify from "../notification";

const ProductRewiesHock = () => {
  const [rateText, setRateText] = useState("");
  const [rateNumber, setRateNumber] = useState("");
  const [loading, setLoading] = useState(true);
  const [ispress, setIsPress] = useState(true);
  const dispatch = useDispatch();

  //   const use
  const { id } = useParams();
  //   console.log(id);

  const ChangeInputRate = (e) => {
    setRateText(e.target.value);
  };

  const ChangeStarsRate = (value) => {
    setRateNumber(value);
  };

  let user = "";
  if (JSON.parse(localStorage.getItem("user") != null)) {
    user = JSON.parse(localStorage.getItem("user"));
  }

  const onsubmit = async (e) => {
    e.preventDefault();
    if (rateText === "") {
      notify("اكتب تعليق", "error");
      return;
    }
    if (rateNumber === "") {
      notify("التقييم فارغ ن فضلك اضف تقييم", "error");
    }
    setLoading(true);
    await dispatch(
      PostReviewAcion(id, {
        review: rateText,
        rating: rateNumber,
      })
    );
    setLoading(false);
  };

  const res = useSelector((item) => item.Review.createReview);
  useEffect(() => {
    if (loading === false) {
      if (res) {
        // console.log(res);
        if (res.data.message === "You are not allowed to perform this action") {
          notify("غير مسموح للادمن باضافه تعليق", "error");
        } else if (res.status && res.status === 400) {
          notify("لقد قمت باضافه تعليق من قبل ", "error");
        } else if (res.status && res.status === 201) {
          notify("تم اضافه التعليق", "success");
          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      }
    }
  }, [loading]);

  return [
    rateText,
    rateNumber,
    ChangeInputRate,
    ChangeStarsRate,
    user,
    onsubmit,
  ];
};

export default ProductRewiesHock;
