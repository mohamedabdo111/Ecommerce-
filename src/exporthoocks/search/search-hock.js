import { useEffect, useState } from "react";
import GetAllProducHock from "../Product/get-all-product-hock";
import { useNavigate } from "react-router-dom";
const SearchHock = () => {
  // const navigate = useNavigate();
  const [searchWord, setSearchWord] = useState("");
  const [item, pageCount, onpress, getProduct] = GetAllProducHock();

  const onChangeInputSearch = (e) => {
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);
  };

  useEffect(() => {
    getProduct(localStorage.getItem("searchWord"));
  }, [searchWord]);

  return [searchWord, onChangeInputSearch];
};

export default SearchHock;
