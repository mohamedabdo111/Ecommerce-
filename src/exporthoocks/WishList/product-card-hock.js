import React, { useEffect } from "react";

const ProductCardHock = (item, setState, favproduct) => {
  if (favproduct.message === "Invalid Token. please login again") {
  } else {
    var filter = favproduct.map((i) => {
      return i._id;
    });
  }

  if (filter) {
    var somefilter = filter.some((i) => i === item._id);
  }

  useEffect(() => {
    if (somefilter === true) {
      setState(false);
    } else {
      setState(true);
    }
  }, [somefilter]);

  return [somefilter];
};

export default ProductCardHock;
