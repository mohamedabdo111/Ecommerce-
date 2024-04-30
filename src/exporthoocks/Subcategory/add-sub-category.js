import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCategoryAction } from "../../redux/actions/CategoryAction";
import notify from "../../exporthoocks/notification";
import { PostSubCategory } from "../../redux/actions/SubCategoryAction";
const AddSubCategoryHock = () => {
  // usestates
  const [text, setText] = useState("");
  const [idcoutn, setId] = useState("0");
  const [IsPress, setPress] = useState(false);
  const [loading, setLoading] = useState(true);

  //dispatch and selector
  const item = useSelector((i) => i.Category.data.data);
  const x = useSelector((e) => e.SubCategory.Subcat);
  console.log(x);

  const dispatch = useDispatch();

  //when website open
  useEffect(() => {
    dispatch(GetCategoryAction());
  }, []);

  // when input change
  const changer = (e) => {
    setText(e.target.value);
  };

  // when select is change
  const changeoption = (e) => {
    setId(e.target.value);
  };

  // when i click in btn
  const clicker = async (e) => {
    e.preventDefault();
    if (text === "") {
      notify("اكمل اسم  التصنيف الفرعي ", "warn");
      return;
    }
    if (idcoutn === "0") {
      notify("ادخل التصنيف الرئيسي", "warn");
      return;
    }
    setLoading(true);
    setPress(true);
    await dispatch(
      PostSubCategory({
        name: text,
        category: idcoutn,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (x.status === 201) {
        notify("تم اضافه البيانات", "success");
      } else if (x === "ErrorAxiosError: Request failed with status code 400") {
        notify("البيانات متشابهه مع بيانات اخري", "error");
      } else {
        notify("هناك مشكله في عمليه الاضافه", "error");
      }
      setId("0");
      setText("");
      setTimeout(() => {
        setPress(false);
      }, 2000);
    }
  }, [loading]);

  return [text, IsPress, loading, changer, clicker, changeoption, item];
};

export default AddSubCategoryHock;
