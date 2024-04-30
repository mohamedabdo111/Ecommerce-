import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../notification";
import { PostBrandAdmin } from "../../redux/actions/BrandAction";
import img from "../../images/addpic.png";
// import "react-toastify/dist/ReactToastify.css";

const AddBrandHock = () => {
  // use states
  const [imageselect, setImageselect] = useState(img);
  const [text, setText] = useState("");
  const [imgpost, setImagePost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isPress, setPress] = useState(false);

  // dispatch
  const dispatch = useDispatch();

  const handelimage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageselect(URL.createObjectURL(e.target.files[0]));
      setImagePost(e.target.files[0]);
    }
  };

  const changevalue = (e) => {
    e.persist();
    setText(e.target.value);
  };
  // useselector
  const res = useSelector((item) => item.Brand.data);
  console.log(res);

  const clicker = async (e) => {
    e.preventDefault();
    if (text === "" || imgpost === null) {
      notify("اكمل البيانات", "warn");
      return;
    }
    const formdata = new FormData();
    formdata.append("name", text);
    formdata.append("image", imgpost);
    setLoading(true);
    setPress(true);
    await dispatch(PostBrandAdmin(formdata));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res.status === 201) {
        notify("تمت الاضافه بنجاح", "success");
      } else {
        notify("البيانات متشابهه لبيانات اخري", "error");
      }
      setTimeout(() => {
        setPress(false);
      }, 1000);
      setImageselect(img);
      setImagePost(null);
      setLoading(true);
      setText("");
    }
  }, [loading]);

  return [
    imageselect,
    isPress,
    loading,
    text,
    handelimage,
    changevalue,
    clicker,
  ];
};

export default AddBrandHock;
