import React from "react";
import "../../style.css";
import { Link } from "react-router-dom";
const AdminSidebar = () => {
  return (
    <div className="adminsidbar">
      <Link to="/admin/manageproduct">
        <div>اداره الطلبات</div>
      </Link>
      <Link to="/admin/allproducts">
        <div>اداره المنتجات</div>
      </Link>
      <Link to="/admin/addbrand">
        <div>اضف الماركه</div>
      </Link>
      <Link to="/admin/addmorecategory">
        <div>اضف تصنيف</div>
      </Link>
      <Link to="/admin/addsubcategory">
        <div>اضف تصنيف فرعي</div>
      </Link>
      <Link to="/admin/addproduct">
        <div>اضف منتج</div>
      </Link>
      <Link to="/admin/coupons">
        <div>اضف كوبون</div>
      </Link>
    </div>
  );
};

export default AdminSidebar;
