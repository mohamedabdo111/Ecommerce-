import { useDispatch, useSelector } from "react-redux";
import { GetCategoryAction } from "../../redux/actions/CategoryAction";
import { GetAllBrand } from "../../redux/actions/BrandAction";
import { GetSubcategoryWithID } from "../../redux/actions/SubCategoryAction";
import {
  EditProductAction,
  GetPorductID,
  PostProductAction,
} from "../../redux/actions/ProductAction";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../exporthoocks/notification";
import { useEffect, useState } from "react";
const AdminEditProductHock = (id) => {
  // useeffect to run the dispatch

  const dispatch = useDispatch();
  useEffect(() => {
    const run = async () => {
      await dispatch(GetPorductID(id));
      await dispatch(GetCategoryAction());
      await dispatch(GetAllBrand());
    };
    run();
  }, []);

  // useselector for category list
  // category data
  const categoryData = useSelector((i) => i.Category.data);
  // brand data
  const brandData = useSelector((i) => i.Brand.data);

  //   const options = () => {};
  const selectedValue = () => {};
  const onSelect = (selectedlist) => {
    console.log(selectedlist);
    setSelectSubCat(selectedlist);
  };
  const onRemove = (selectedlist) => {
    console.log(selectedlist);
    setSelectSubCat(selectedlist);
  };

  // state for images
  // value state
  const [prodname, setProdname] = useState("");
  const [proddiscrip, setProdDiscrip] = useState("");
  const [pricebefore, setPriceBefore] = useState(0);
  const [priceafter, setPriceAfter] = useState(0);
  const [quantaty, setQuantaty] = useState(0);
  const [CatID, setCatID] = useState(1);
  // const [SubCat, setSubCat] = useState([]);
  const [SelectSubCat, setSelectSubCat] = useState([]);
  const [brandID, setBrandID] = useState("");
  const [colorstate, setcolorstate] = useState(false);
  const [colorArray, setColorArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imagess, setImagess] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImagess(imageList);
  };
  console.log(imagess);

  let x = imagess.map((i) => i.file);

  // useselector for edit product
  const OneProduct = useSelector((item) => item.vlauese.details);
  // useEffect to change input when wibsite loading or enter in edit product

  useEffect(() => {
    if (OneProduct.data) {
      setProdname(OneProduct.data.title);
      setProdDiscrip(OneProduct.data.description);
      setQuantaty(OneProduct.data.quantity);
      setPriceAfter(OneProduct.data.price);
      setColorArray(OneProduct.data.availableColors);
      // setCatID(OneProduct.data.category);
      setImagess(OneProduct.data.images);
      setPriceBefore(OneProduct.data.price);
    }
  }, [OneProduct]);

  // functions for category and brand
  const changecategory = async (e) => {
    setCatID(e.target.value);
  };

  const changeBrand = (e) => {
    setBrandID(e.target.value);
  };

  // when change color
  const changeColor = (color) => {
    setColorArray([...colorArray, color.hex]);
  };

  const stateus = useSelector((item) => item.vlauese.updateprodut);

  // console.log(x);
  // on click in button and send data to api
  const clicker = async (e) => {
    e.preventDefault();

    if (
      prodname === "" ||
      proddiscrip === "" ||
      pricebefore === 0 ||
      priceafter === 0 ||
      quantaty === 0 ||
      imagess === ""
    ) {
      notify("اكمل البيانات", "warn");
      return;
    }

    const formdata = new FormData();
    formdata.append("title", prodname);
    formdata.append("description", proddiscrip);
    formdata.append("quantity", quantaty);
    formdata.append("price", pricebefore);
    formdata.append("imageCover", x[0]);
    x.map((item) => formdata.append("images", item));
    colorArray.map((color) => formdata.append("availableColors", color));
    setLoading(true);
    await dispatch(EditProductAction(id, formdata));

    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      // console.log(stateus.status);
      if (stateus.status === 200) {
        notify("تمت الاضافه بنجاح", "success");
        window.location.reload();
      } else {
        notify("هناك مشكله", "error");
      }

      setLoading(true);
    }
  }, [loading]);

  // inputs change functions
  const InputNameFun = (e) => {
    setProdname(e.target.value);
  };
  const InputdiscribeFun = (e) => {
    setProdDiscrip(e.target.value);
  };
  const InputPriceBeforeFun = (e) => {
    setPriceBefore(e.target.value);
  };
  const InputPriceAfterFun = (e) => {
    setPriceAfter(e.target.value);
  };
  const InputQuantatyFun = (e) => {
    setQuantaty(e.target.value);
  };
  const SetColorState = () => {
    setcolorstate(!colorstate);
  };

  return [
    prodname,
    InputNameFun,
    proddiscrip,
    InputdiscribeFun,
    pricebefore,
    InputPriceBeforeFun,
    priceafter,
    InputPriceAfterFun,
    quantaty,
    InputQuantatyFun,
    categoryData,
    brandData,
    selectedValue,
    onSelect,
    onRemove,
    brandID,
    colorstate,
    setcolorstate,
    colorArray,
    changecategory,
    changeColor,
    changeBrand,
    setColorArray,
    clicker,
    SetColorState,
    SelectSubCat,
    CatID,
    imagess,
    onChange,
    maxNumber,
    x,
  ];
};

export default AdminEditProductHock;
