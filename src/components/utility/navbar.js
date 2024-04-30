import React, { useEffect, useState } from "react";
import { Container, Form, NavDropdown, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png";
import "../../style.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchHock from "../../exporthoocks/search/search-hock";
import GetAllCartHock from "../../exporthoocks/card/get-all-cart-hock";

const NavBar = () => {
  const [searchWord, onChangeInputSearch] = SearchHock();
  const [user, setuser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      setuser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const LogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setuser("");
  };

  // localstorage for search bar

  let word = "";
  if (localStorage.getItem("searchWord") != null) {
    word = localStorage.getItem("searchWord");
  }
  // const [numberofitems, setNumberOfItems] = useState(0);
  const [res] = GetAllCartHock();
  let numberofitems = 0;
  if (res) {
    numberofitems = res.numOfCartItems;
  } else {
    numberofitems = 0;
  }

  // console.log(numberofitems);

  return (
    <Navbar expand="lg" className="bg-dark text-light">
      <Container>
        <Navbar.Brand href="#" className="col-lg-1 m-0">
          <a href="/">
            {" "}
            <img src={logo} className="img-navbar" alt="logo"></img>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="bg-body-tertiary"
        />
        <Navbar.Collapse id="navbarScroll" className="col-lg-11 text-center">
          <Form className="d-flex justify-content-center col-lg-10 ">
            <Form.Control
              type="text"
              placeholder="ابحث"
              aria-label="Search"
              value={word}
              onChange={onChangeInputSearch}
            />
          </Form>

          {user != "" ? (
            <NavDropdown
              title={user.name}
              id="basic-nav-dropdown"
              className="me-3"
            >
              {user.role === "admin" ? (
                <NavDropdown.Item href="/admin/manageproduct" className=" ">
                  الملف الشخصي
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item href="/user/adresses">
                  الملف الشخصي
                </NavDropdown.Item>
              )}
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" className="" onClick={LogOut}>
                تسجيل الخروج
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <div className="col-lg-1 heart text-light">
              <a href="/login">
                <span>
                  <FontAwesomeIcon icon={faCircleUser} />
                </span>
                <span>دخول</span>
              </a>
            </div>
          )}

          <div className="col-lg-1 heart ">
            <a href="/cart">
              <span className="position-relative">
                <FontAwesomeIcon icon={faCartShopping} />
                <span className="bg-danger badge ">{numberofitems}</span>
              </span>{" "}
              <span>العربه</span>
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
