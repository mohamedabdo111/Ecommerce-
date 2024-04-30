import React from "react";
import "../../style.css";
import { Link } from "react-router-dom";
const Usersidebar = () => {
  return (
    <div className="adminsidbar">
      <Link to="/user/allorders">
        <div>اداره الطلبات</div>
      </Link>

      <Link to="/user/favourite">
        <div>القائمه المفضله</div>
      </Link>
      <Link to="/user/adresses">
        <div>العناوين الشخصيه</div>
      </Link>
      <Link to="/user/user-profile">
        <div>الملف الشخصي</div>
      </Link>
    </div>
  );
};

export default Usersidebar;
