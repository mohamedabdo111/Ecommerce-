import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetSpecificAddressAction,
  PostAddressAction,
  UpdateAddressAction,
} from "../../redux/actions/UserAddressAction";
import { useNavigate } from "react-router-dom";
import notify from "../notification";

const UpdateAddressHock = (id) => {
  const navigate = useNavigate();
  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [loadingSpecific, setLoadingSpecific] = useState(true);

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

  useEffect(() => {
    const get = async () => {
      setLoadingSpecific(true);
      await dispatch(GetSpecificAddressAction(id));
      setLoadingSpecific(false);
    };

    get();
  }, []);
  const res = useSelector((item) => item.userAdd.specificaddress);
  const resUpdate = useSelector((i) => i.userAdd.updateadd);

  useEffect(() => {
    if (loadingSpecific === false) {
      if (res && res.status === "success") {
        setAlias(res.data.alias);
        setDetails(res.data.details);
        setPhone(res.data.phone);
        setCity(res.data.city);
      }
    }
  }, [loadingSpecific]);

  const ClickToSave = async (e) => {
    setLoading(true);
    await dispatch(
      UpdateAddressAction(id, {
        alias,
        details,
        phone,
        city,
        postalCode: "",
      })
    );

    setLoading(false);
  };

  console.log(resUpdate);

  useEffect(() => {
    if (loading === false) {
      setTimeout(() => {
        navigate("/user/adresses");
      }, 1000);

      // if (resUpdate && resUpdate.status === 200) {
      //   notify("تم اضافه العنوان ", "success");

      //   setTimeout(() => {
      //     navigate("/user/adresses");
      //   }, 3000);
      // } else {
      //   notify("هناك مشكله", "error");
      // }
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

export default UpdateAddressHock;
