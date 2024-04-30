import React from "react";

import { Container, Dropdown } from "react-bootstrap";

const Searchdroplist = ({ title, onclickDisptach }) => {
  const clickme = (key) => {
    localStorage.setItem("sortby", key);
    onclickDisptach();
  };
  return (
    <Container>
      <div className="d-flex justify-content-between p-2">
        <h4 className="fw-bold">{title}</h4>

        <Dropdown>
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            className="bg-light text-black d-flex flex-row-reverse align-items-center text-light"
          >
            ترتيب حسب
          </Dropdown.Toggle>

          <Dropdown.Menu className="text-end bg-white">
            <Dropdown.Item
              className=" text-black"
              onClick={() => clickme("بدون ترتيب")}
            >
              بدون ترتيب
            </Dropdown.Item>
            <Dropdown.Item
              className=" text-black"
              onClick={() => clickme("السعر من الاعلي للاقل")}
            >
              السعر من الاعلي للاقل
            </Dropdown.Item>

            <Dropdown.Item
              className=" text-black"
              onClick={() => clickme(" السعر من الاقل للاعلي")}
            >
              السعر من الاقل للاعلي
            </Dropdown.Item>
            <Dropdown.Item
              className="text-black"
              onClick={() => clickme("الاكثر مبيعا")}
            >
              الاكثر مبيعا
            </Dropdown.Item>
            <Dropdown.Item
              className=" text-black"
              onClick={() => clickme("الاعلي تقييما")}
            >
              الاعلي تقييما
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </Container>
  );
};

export default Searchdroplist;
