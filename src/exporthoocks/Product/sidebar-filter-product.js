import { useEffect, useState } from "react";
import { GetCategoryAction } from "../../redux/actions/CategoryAction";
import { useDispatch, useSelector } from "react-redux";
import { GetAllBrand } from "../../redux/actions/BrandAction";
import GetAllProducHock from "./get-all-product-hock";

const SideBarProduct = () => {
  const [item, pageCount, onpress, getProduct] = GetAllProducHock();
  const dispatch = useDispatch();
  useEffect(() => {
    const get = async () => {
      await dispatch(GetCategoryAction());
      await dispatch(GetAllBrand());
    };

    get();
  }, []);

  const allCategory = useSelector((item) => item.Category.data);
  const allBrand = useSelector((i) => i.Brand.data);

  let categories = [];

  if (allCategory) {
    categories = allCategory.data;
  }
  let brands = [];
  if (allBrand) {
    brands = allBrand.data;
  }

  const [check, setCheck] = useState([]);
  // const ChangeInput = (e) => {
  //   let targetValue = e.target.value;
  //   // if (e.target.checked === true) {
  //   if (targetValue === "0") {
  //     setCheck([]);
  //   } else {
  //     if (e.target.checked === true) {
  //       setCheck([...check, targetValue]);
  //     } else if (e.target.checked === false) {
  //       const newArr = check.filter((item) => item != targetValue);
  //       setCheck(newArr);
  //     }
  //   }
  //   // }
  // };

  // console.log(check);
  let querystring_products = "";
  const ChangeInput = (e) => {
    let targetValue = e.target.value;

    if (targetValue === "0") {
      setCheck([]);
    } else {
      if (e.target.checked === true) {
        setCheck([...check, targetValue]);
      } else if (e.target.checked === false) {
        const remover = check.filter((item) => item != targetValue);
        setCheck(remover);
      }
    }

    setTimeout(() => {
      getProduct();
    }, 1000);
  };

  querystring_products = check
    .map((item) => "category[in][]=" + item)
    .join("&");
  localStorage.setItem("checkInput", querystring_products);

  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(0);

  const changePriceFrom = (e) => {
    setPriceFrom(e.target.value);
    localStorage.setItem("priceFrom", e.target.value);
  };
  const changePriceTo = (e) => {
    setPriceTo(e.target.value);
    localStorage.setItem("priceTo", e.target.value);
  };

  useEffect(() => {
    getProduct();
  }, [priceFrom, priceTo]);

  // console.log(check);
  return [categories, brands, ChangeInput, changePriceFrom, changePriceTo];
};

export default SideBarProduct;
