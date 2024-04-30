import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetAllPorduct,
  GetAllProductActionQuerysting,
  GetNumberOfPage,
} from "../../redux/actions/ProductAction";

const GetAllProducHock = () => {
  const dispatch = useDispatch();
  let limit = 12;

  const getProduct = async () => {
    let word = "";
    let query = "";
    let priceTo = "",
      pricefrom = "";
    if (localStorage.getItem("searchWord") != null) {
      word = localStorage.getItem("searchWord");
    }

    if (localStorage.getItem("checkInput") != null) {
      query = localStorage.getItem("checkInput");
    }

    if (localStorage.getItem("priceFrom") != null) {
      pricefrom = localStorage.getItem("priceFrom");
    }
    if (localStorage.getItem("priceTo") != null) {
      priceTo = localStorage.getItem("priceTo");
    }

    let priceFromString = "";
    if (pricefrom === "" || pricefrom <= 0) {
      priceFromString = "";
    } else {
      priceFromString = `&{price[gte]=${pricefrom}}`;
    }

    let priceToString = "";
    if (priceTo === "" || priceTo <= 0) {
      priceToString = "";
    } else {
      priceToString = `&price[lte]${priceTo}`;
    }

    sortByValues();
    await dispatch(
      GetAllProductActionQuerysting(
        `sort=${sort}&keyword=${word}&limit=${limit}&${query}${priceFromString}${priceToString}`
      )
    );
  };

  useEffect(() => {
    getProduct("");
  }, []);
  const AllData = useSelector((item) => item.vlauese.product);
  //   let count = 0;
  //   if (AllData) {
  //     count = AllData.data;
  //   }
  let item = [];
  let pageCount = [];
  try {
    if (AllData) {
      item = AllData.data;
    } else {
      item = [];
    }
  } catch (error) {}

  try {
    if (AllData) {
      pageCount = AllData.paginationResult.numberOfPages;
    } else {
      pageCount = [];
    }
  } catch (error) {}

  const onpress = async (page) => {
    let word = "";
    let query = "";
    if (localStorage.getItem("searchWord") != null) {
      word = localStorage.getItem("searchWord");
    }

    if (localStorage.getItem("checkInput") != null) {
      query = localStorage.getItem("checkInput");
    }
    sortByValues();
    await dispatch(
      GetAllProductActionQuerysting(
        `sort=${sort}&page=${page}&keyword=${word}&limit=${limit}&${query}`
      )
    );
  };

  // sortby values
  let sortType = "",
    sort = "";
  const sortByValues = () => {
    if (localStorage.getItem("sortby") != null) {
      sortType = localStorage.getItem("sortby");
    }

    if (sortType === "بدون ترتيب") {
      sort = "";
    } else if (sortType === "السعر من الاعلي للاقل") {
      sort = "-price";
    } else if (sortType === " السعر من الاقل للاعلي") {
      sort = "+price";
    } else if (sortType === "الاكثر مبيعا") {
      sort = "-sold";
    } else if (sortType === "الاعلي تقييما") {
      sort = "-ratingsQuantity";
    }
  };
  // const loading = useSelector((item) => item.vlauese.loading);
  return [item, pageCount, onpress, getProduct];
};

export default GetAllProducHock;
