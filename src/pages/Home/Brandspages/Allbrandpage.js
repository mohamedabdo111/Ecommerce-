import React from "react";
import BrandsContainer from "../../../components/brands/brandsContainer";
import PaginationCode from "../../../components/utility/pagination";
import DisplayBrandHock from "../../../exporthoocks/Brand/display-Brand-hock";

const BrandPage = () => {
  const [img, loading, pagesnumber, onpress] = DisplayBrandHock();

  return (
    <div>
      <BrandsContainer image={img} loading={loading}></BrandsContainer>
      {pagesnumber > 1 ? (
        <PaginationCode
          pageCount={pagesnumber}
          onpress={onpress}
        ></PaginationCode>
      ) : null}
    </div>
  );
};

export default BrandPage;
