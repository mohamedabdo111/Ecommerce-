import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../notification";
import { ResetPasswordAction } from "../../redux/actions/AuthAction";

const ResetpasswordHock = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [number, setNumber] = useState("");
  const [Confirmnumber, setConfirmnumber] = useState("");

  const [loading, setLoading] = useState(true);
  const changepassword = (e) => {
    setNumber(e.target.value);
  };
  const changeconfirmpassword = (e) => {
    setConfirmnumber(e.target.value);
  };

  const Validation = () => {
    if (number === "") {
      notify("plase enter the password", "warn");
      return;
    }
  };

  const email = localStorage.getItem("user-email");

  const OnClick = async (e) => {
    e.preventDefault();
    Validation();
    setLoading(true);
    await dispatch(
      ResetPasswordAction({
        email,
        newPassword: number,
      })
    );
    setLoading(false);
  };
  const res = useSelector((item) => item.Auth.reset);
  useEffect(() => {
    if (loading === false) {
      if (res.status === 200) {
        notify("تم", "success");
        setTimeout(() => {
          navigation("/login");
        }, 1500);
      }
      if (
        res.data.message ===
        "User validation failed: password: password min length 6"
      ) {
        notify("يجب ان لا تقل عن 6 ارقام وحروف", "error");
      }
      if (res.data.message === "reset code not verified") {
        notify("اعد ارسال الكود", "error");
      }
    }
  }, [loading]);

  return [
    number,
    Confirmnumber,
    changepassword,
    changeconfirmpassword,
    OnClick,
  ];
};

export default ResetpasswordHock;
