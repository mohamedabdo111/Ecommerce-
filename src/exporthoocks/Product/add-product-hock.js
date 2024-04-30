import { useDispatch, useSelector } from "react-redux";
import { GetCategoryAction } from "../../redux/actions/CategoryAction";
import { GetAllBrand } from "../../redux/actions/BrandAction";
import { GetSubcategoryWithID } from "../../redux/actions/SubCategoryAction";
import { PostProductAction } from "../../redux/actions/ProductAction";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../exporthoocks/notification";
import { useEffect, useState } from "react";
const AddProductHock = () => {
  // useeffect to run the dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCategoryAction());
    dispatch(GetAllBrand());
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
  const [images, setImages] = useState([]);
  // value state
  const [prodname, setProdname] = useState("");
  const [options, setOptions] = useState([]);
  const [proddiscrip, setProdDiscrip] = useState("");
  const [pricebefore, setPriceBefore] = useState(0);
  const [priceafter, setPriceAfter] = useState(0);
  const [quantaty, setQuantaty] = useState(0);
  const [CatID, setCatID] = useState(0);
  // const [SubCat, setSubCat] = useState([]);
  const [SelectSubCat, setSelectSubCat] = useState([]);
  const [brandID, setBrandID] = useState("");
  const [colorstate, setcolorstate] = useState(false);
  const [colorArray, setColorArray] = useState([]);
  const [loading, setLoading] = useState(true);
  // functions for category and brand
  const changecategory = async (e) => {
    if (e.target.value != 1) {
      await dispatch(GetSubcategoryWithID(e.target.value));
    }
    setCatID(e.target.value);
  };

  const x = useSelector((i) => i.SubCategory.Subcat.data);
  // useeffect to change data only when catId change
  useEffect(() => {
    if (CatID != 1) {
      if (x) {
        setOptions(x);
      }
    }
  }, [CatID]);

  const changeBrand = (e) => {
    setBrandID(e.target.value);
  };

  // when change color
  const changeColor = (color) => {
    setColorArray([...colorArray, color.hex]);
  };

  // to convert image 64 to file
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  const stateus = useSelector((item) => item.vlauese.product);
  console.log(stateus);
  // on click in button and send data to api
  const clicker = async (e) => {
    e.preventDefault();

    if (
      prodname === "" ||
      proddiscrip === "" ||
      pricebefore === 0 ||
      priceafter === 0 ||
      quantaty === 0 ||
      CatID == 1 ||
      SelectSubCat == "" ||
      setBrandID == 1
    ) {
      notify("اكمل البيانات", "warn");
      return;
    }

    // to convert one image to file
    const imagefile = dataURLtoFile(images[0], Math.random() + ".png");

    // to convert array of image to file
    const imageconvertarr = Array.from(
      Array(Object.keys(images).length).keys()
    ).map((i, index) => {
      return dataURLtoFile(images[index], Math.random() + ".png");
    });
    const formdata = new FormData();
    formdata.append("title", prodname);
    formdata.append("description", proddiscrip);
    formdata.append("quantity", quantaty);
    formdata.append("price", pricebefore);
    formdata.append("imageCover", imagefile);
    formdata.append("category", CatID);

    imageconvertarr.map((item) => formdata.append("images", item));
    colorArray.map((color) => formdata.append("availableColors", color));

    SelectSubCat.map((i) => formdata.append("subcategory", i._id));
    setLoading(true);
    await dispatch(PostProductAction(formdata));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setProdname("");
      setCatID(1);
      setColorArray([]);
      setImages([]);
      setBrandID(0);
      setPriceAfter(0);
      setPriceBefore(0);
      setQuantaty(0);
      setProdDiscrip("");
      setSelectSubCat([]);
      setBrandID(0);
      setColorArray([]);

      console.log(stateus.status);
      if (stateus.status === 201) {
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
    images,
    setImages,
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
    options,
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
  ];
};

export default AddProductHock;
