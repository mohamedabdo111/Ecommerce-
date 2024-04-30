import { useEffect, useState } from "react";
import img1 from "../../images/addpic.png";
import { useDispatch, useSelector } from "react-redux";
import { PostCategory } from "../../redux/actions/CategoryAction";
import "react-toastify/dist/ReactToastify.css";

import notify from "../../exporthoocks/notification";

const AddCategoryHock = () => {
  // usestate
  const [image, setImage] = useState(img1);
  const [name, setName] = useState("");
  const [imageinURL, setOfURL] = useState(null);
  const [loading, setLoading] = useState(true);
  const [press, setPress] = useState(false);

  //   function for input name when it change

  const changeName = (e) => {
    e.persist();
    setName(e.target.value);
  };

  // useSelector
  const status = useSelector((i) => i.Category.data);

  // usedispath
  const dispath = useDispatch();

  //display image
  const handelchange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setOfURL(e.target.files[0]);
    }
  };

  //when click in btn
  const clicker = async (e) => {
    e.preventDefault();

    if (name === "" || imageinURL === null) {
      notify("اكمل البيانات", "warn");
      return;
    }
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("image", imageinURL);
    setLoading(true);

    setPress(true);
    await dispath(PostCategory(formdata));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (status.status === 201) {
        notify("تمت الاضافه بنجاح", "success");
      } else {
        notify("البيانات متشابهه لبيانات اخري", "error");
      }
      setImage(img1);
      setName("");
      setLoading(true);
      setTimeout(() => {
        setPress(false);
      }, 2000);
    }
  }, [loading]);

  return [
    image,
    name,
    imageinURL,
    press,
    loading,
    handelchange,
    clicker,
    changeName,
    status,
  ];
};

export default AddCategoryHock;
