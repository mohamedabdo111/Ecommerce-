import { useEffect, useState } from "react";
import notify from "../notification";
import { useDispatch, useSelector } from "react-redux";
import { ForgitPasswordAction } from "../../redux/actions/AuthAction";
import { useNavigate } from "react-router-dom";

const ForgitpasswordHock = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const onChageEmail = (e) => {
    setEmail(e.target.value);
  };

  const validation = () => {
    if (email === "") {
      notify("ادخل الايميل", "error");
    }
  };

  const onClickBtn = async (e) => {
    e.preventDefault();
    validation();
    localStorage.setItem("user-email", email);
    setLoading(true);
    await dispatch(
      ForgitPasswordAction({
        email,
      })
    );
    setLoading(false);
  };

  const res = useSelector((item) => item.Auth.forgitpass);
  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res.data.status);
        if (res.data.status === "Success") {
          notify("تم ارسال الكود", "success");
          setTimeout(() => {
            navigation("/user/verify-password");
          }, 1500);
        } else if (res.data.status === "fail") {
          notify("تحقق من هذا الايميل", "error");
        }
      }
    }
  }, [loading]);

  return [email, onChageEmail, onClickBtn];
};

export default ForgitpasswordHock;
