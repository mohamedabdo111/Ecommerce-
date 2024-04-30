import { useEffect, useState } from "react";
import notify from "../notification";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../redux/actions/AuthAction";
import { useNavigate } from "react-router-dom";

const LoginHock = () => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [Ispress, setIspress] = useState(false);
  const navigate = useNavigate();

  const onchangename = (e) => {
    setemail(e.target.value);
  };
  const onchangepassword = (e) => {
    setpassword(e.target.value);
  };

  const validation = () => {
    if (email === "") {
      notify("ادخل الايميل", "error");
      return;
    }
    if (password === "") {
      notify("ادخل كلمه السر", "error");
    }
  };
  const onClick = async (e) => {
    e.preventDefault();
    validation();
    setLoading(true);
    setIspress(true);
    await dispatch(
      LoginAction({
        email,
        password,
      })
    );
    setLoading(false);
  };

  const response = useSelector((item) => item.Auth.loginaccoutn);
  console.log(response);
  useEffect(() => {
    if (response) {
      if (response.data) {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.data));

          window.location.href = "/";
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }

        if (response.data.message) {
          notify("خطا في الايميل او الباسوورد", "error");
        }
      }
      setIspress(false);
    }
  }, [loading]);

  return [
    email,
    password,
    loading,
    Ispress,
    onchangename,
    onchangepassword,
    onClick,
    response,
  ];
};

export default LoginHock;
