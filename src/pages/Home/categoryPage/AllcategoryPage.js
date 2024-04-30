import React from "react";
import CategoryContainer from "../../../components/category/categoryContainer";
import { Container } from "react-bootstrap";
import PaginationCode from "../../../components/utility/pagination";
import DisplayCategoryHock from "../../../exporthoocks/Category/display-category-hock";
const AllcategoryPage = () => {
  const [loading, pageCount, select, onpress] = DisplayCategoryHock();

  return (
    <Container className="my-2">
      <h4 className="my-3">كل التصنيفات</h4>
      <CategoryContainer
        data={select.data}
        loading={loading}
      ></CategoryContainer>
      <PaginationCode pageCount={pageCount} onpress={onpress}></PaginationCode>
    </Container>
  );
};

export default AllcategoryPage;
