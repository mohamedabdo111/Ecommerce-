import React, { useEffect } from "react";
import HomePage from "./pages/Home/homePage";
import NavBar from "./components/utility/navbar";
import Footer from "./components/utility/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Home/Auth/login";
import Cart from "./pages/Home/Auth/cart";
import Register from "./pages/Home/Auth/register";
import AllcategoryPage from "./pages/Home/categoryPage/AllcategoryPage";
import BrandPage from "./pages/Home/Brandspages/Allbrandpage";
import AllproductPage from "./pages/Home/products/AllproductPage";
import Productdetails from "./pages/Home/products/productdetails";
import Cartpage from "./pages/Home/cart/cartpage";
import Paymentconf from "./pages/Home/payment/paymentconfpage";
import Adminallproductpage from "./pages/Home/admin/Adminallproductpage";
import Adminmanageorder from "./pages/Home/admin/Adminmanageorder";
import Admindetailes from "./pages/Home/admin/Admindetailes";
import AddBrandpage from "./pages/Home/admin/Adminaddbrandpage";
import AdminAddCategory from "./pages/Home/admin/addcategorypage";
import Addsubcategorypage from "./pages/Home/admin/addsubcategorypage";
import Adminaddproductpage from "./pages/Home/admin/Adminaddproductpage";
import UserAllOrders from "./pages/Home/user/UserAllOrderspage";
import UserFavouritepage from "./pages/Home/user/UserFavouritepage";
import UserAdresspage from "./pages/Home/user/UserAdresspage";
import Userinformation from "./pages/Home/user/Userinformationpage";
import UserEditAddresspage from "./pages/Home/user/UserEditAddresspage";
import UserPersonalInfoPage from "./pages/Home/user/UserPersonalInfoPage";
import AdminEditProduct from "./pages/Home/admin/AdminEditProduct";
import Forgitpassword from "./pages/Home/Auth/forgitpassword";
import VerifyPassword from "./pages/Home/Auth/VerifyPassword";
import ResetPassword from "./pages/Home/Auth/ReserPassword";
import AdminAddCopone from "./pages/Home/admin/AdminAddCoponePage";
import ProtectRouteHock from "./exporthoocks/Protect/Protect-Route-Hock";
import Adminallproductpagee from "./pages/Home/admin/Adminmanageorder";
import Protects from "./components/utility/protects";
import ProtectedRoute from "./exporthoocks/Protect/ProtectedRoute";
import AllCategorySame from "./pages/Home/categoryPage/AllCategorySame";

const App = () => {
  const [isUser, isAdmin, userDate] = ProtectRouteHock();
  console.log(userDate);
  console.log(isUser);
  console.log(isAdmin);
  return (
    <>
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/cartshop" element={<Cart></Cart>} />
          <Route
            path="/allCategory"
            element={<AllcategoryPage></AllcategoryPage>}
          />
          <Route
            path="/products/category/:id"
            element={<AllCategorySame></AllCategorySame>}
          ></Route>
          <Route path="/popularbrands" element={<BrandPage></BrandPage>} />
          <Route path="/products" element={<AllproductPage></AllproductPage>} />
          <Route
            path="/details/:id"
            element={<Productdetails></Productdetails>}
          />
          <Route path="/cart" element={<Cartpage></Cartpage>} />
          <Route
            path="/order/paymentmethod"
            element={<Paymentconf></Paymentconf>}
          />

          {/* Admin Routes */}

          <Route element={<ProtectedRoute auth={isAdmin}></ProtectedRoute>}>
            <Route
              path="/admin/allproducts"
              element={<Adminallproductpage></Adminallproductpage>}
            />
            <Route
              path="/admin/manageproduct"
              element={<Adminallproductpagee></Adminallproductpagee>}
            />
            <Route
              path="/admin/order/:id"
              element={<Admindetailes></Admindetailes>}
            />
            <Route
              path="/admin/addbrand"
              element={<AddBrandpage></AddBrandpage>}
            />
            <Route
              path="/admin/addmorecategory"
              element={<AdminAddCategory></AdminAddCategory>}
            />
            <Route
              path="/admin/addsubcategory"
              element={<Addsubcategorypage></Addsubcategorypage>}
            />
            <Route
              path="/admin/addproduct"
              element={<Adminaddproductpage></Adminaddproductpage>}
            />
            <Route
              path="/admin/coupons"
              element={<AdminAddCopone></AdminAddCopone>}
            ></Route>
            <Route
              path="/admin/edit-product/:id"
              element={<AdminEditProduct></AdminEditProduct>}
            ></Route>
          </Route>

          {/* User Routes */}
          <Route element={<ProtectedRoute auth={isUser}></ProtectedRoute>}>
            <Route
              path="/user/allorders"
              element={<UserAllOrders></UserAllOrders>}
            />
            <Route
              path="/user/favourite"
              element={<UserFavouritepage></UserFavouritepage>}
            />
            <Route
              path="/user/adresses"
              element={<UserAdresspage></UserAdresspage>}
            />
            <Route
              path="/user/informations"
              element={<Userinformation></Userinformation>}
            />
            <Route
              path="/user/edit-address/:id"
              element={<UserEditAddresspage></UserEditAddresspage>}
            />

            <Route
              path="/user/user-profile"
              element={<UserPersonalInfoPage></UserPersonalInfoPage>}
            />
          </Route>

          <Route
            path="/user/forgitpassword"
            element={<Forgitpassword></Forgitpassword>}
          ></Route>
          <Route
            path="/user/verify-password"
            element={<VerifyPassword></VerifyPassword>}
          ></Route>
          <Route
            path="/user/new-password"
            element={<ResetPassword></ResetPassword>}
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
};

export default App;
