import { useEffect, useState } from "react";
import notify from "../notification";
import { useDispatch, useSelector } from "react-redux";
import { SignUpAction } from "../../redux/actions/AuthAction";
import { useNavigate } from "react-router-dom";

const AuthSignUp = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const navigation = useNavigate();

  const onchangename = (e) => {
    setname(e.target.value);
  };
  const onChangeEmail = (e) => {
    setemail(e.target.value);
  };

  const onChangePassword = (e) => {
    setpassword(e.target.value);
  };

  const onChangeConfirmPass = (e) => {
    setConfirmPass(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const validation = () => {
    if (name === "") {
      notify("ادخل اسم المستخدم", "warn");
      return;
    }

    if (email === "") {
      notify("ادخل الايميل ", "warn");
      return;
    }
    if (password === "" || confirmPass === "") {
      notify("اكتب كلمه السر", "warn");
      return;
    }
    if (phone === "") {
      notify("ادخل رقم الهاتف ", "warn");
      return;
    }
    if (password != confirmPass) {
      notify("كلمه السر غير متطابقه", "warn");
      return;
    }
  };

  const clickFunction = async (e) => {
    e.preventDefault();
    validation();
    setLoading(true);

    await dispatch(
      SignUpAction({
        name,
        email,
        password,
        passwordConfirm: confirmPass,
        phone,
      })
    );
    setLoading(false);
  };

  const res = useSelector((item) => item.Auth.createuser);
  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          notify("تم التسجيل بنجاح", "success");
          setTimeout(() => {
            navigation("/login");
          }, 2000);
          return;
        }
        if (res.data) {
          if (res.data.errors[0].msg === "E-mail already in use") {
            notify("هذا الايميل مستخدم بالفعل", "error");
          }
          if (res.data.errors[0].msg === "must be at least 6 chars") {
            notify("يجب ان تكون كلمه السر من 6 ", "error");
          }
          if (res.data.errors[0].msg === "Password confirmation is incorrect") {
            notify("تاكد من تطابق كلمه السر", "error");
          }
          if (res.data.errors[0].msg === "accept only egypt phone numbers") {
            notify("تاكد من ادخال الرقم بشكل صحيح", "error");
          }
        }
      }
    }
  }, [loading]);
  return [
    name,
    email,
    password,
    confirmPass,
    phone,
    onchangename,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPass,
    onChangePhone,
    clickFunction,
  ];
};

export default AuthSignUp;
