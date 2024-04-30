import React from "react";
import { Button, Row } from "react-bootstrap";
import Useraddresscard from "./useraddresscard";
import { Link } from "react-router-dom";
import UserViewAddressHock from "../../exporthoocks/user address/User_View_Address_Hock";

const UserAdresses = () => {
  const [items] = UserViewAddressHock();
  console.log(items);
  return (
    <div className="p-2">
      <h4 className="mb-4">دفتر العنوانين</h4>
      {items
        ? items.map((address, index) => {
            return (
              <Useraddresscard address={address} key={index}></Useraddresscard>
            );
          })
        : null}

      {/* <Useraddresscard></Useraddresscard> */}
      <div className="text-center">
        <Link to="/user/informations">
          <Button className=" bg-dark border-0 text-center">
            اضافه عنوان جديد
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default UserAdresses;
