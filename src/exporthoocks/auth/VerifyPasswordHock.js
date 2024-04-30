import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostVerifyPasswordAction } from "../../redux/actions/AuthAction";
import notify from "../notification";
import { useNavigate } from "react-router-dom";

const VerifyPasswordHock = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(true);
  const changeinput = (e) => {
    setNumber(e.target.value);
  };

  console.log(number);

  const Validation = () => {
    if (number === "" || number.length < 6) {
      console.log("sorry");
    } else {
      console.log("not empty");
    }
  };

  const OnClick = async (e) => {
    e.preventDefault();
    Validation();
    setLoading(true);
    await dispatch(
      PostVerifyPasswordAction({
        resetCode: number,
      })
    );
    setLoading(false);
  };
  const res = useSelector((item) => item.Auth.verify);
  useEffect(() => {
    if (loading === false) {
      console.log(res.data.status);
      if (res.data.status === "Success") {
        notify("تم", "success");
        setTimeout(() => {
          navigation("/user/new-password");
        }, 1500);
      }

      if (res.data.status === "fail") {
        notify("تحقق من الكود", "error");
      }
    }
  }, [loading]);

  return [number, changeinput, OnClick];
};

export default VerifyPasswordHock;
