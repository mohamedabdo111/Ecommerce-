import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostAddressAction } from "../../redux/actions/UserAddressAction";
import { useNavigate } from "react-router-dom";
import notify from "../notification";

const UserAddAddressHock = () => {
  const navigate = useNavigate();
  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const ChangeAlias = (e) => {
    setAlias(e.target.value);
  };
  const ChangeDetails = (e) => {
    setDetails(e.target.value);
  };
  const ChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const ChangeCity = (e) => {
    setCity(e.target.value);
  };

  const ClickToSave = async (e) => {
    setLoading(true);
    await dispatch(
      PostAddressAction({
        alias,
        details,
        phone,
        city,
        postalCode: "",
      })
    );
    setLoading(false);
  };

  const res = useSelector((item) => item.userAdd.newadd);
  console.log(res);
  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تم اضافه العنوان ", "success");

        setTimeout(() => {
          navigate("/user/adresses");
        }, 3000);
      } else {
        notify("هناك مشكله", "error");
      }
    }
  }, [loading]);
  return [
    alias,
    details,
    phone,
    city,
    ChangeAlias,
    ChangeDetails,
    ChangePhone,
    ChangeCity,
    ClickToSave,
  ];
};

export default UserAddAddressHock;
