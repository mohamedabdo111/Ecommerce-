import { combineReducers } from "redux";
import { CategoryReducer } from "./CategoryReducer";
import { BrandReducer } from "./BrandReducer";
import { SubCategoryReducer } from "./SubCategoryReducer";
import { ProductReducer } from "./ProductReducer";
import { AuthReducer } from "./AuthReducer";
import { ProductReviewReducer } from "./ReviewReducer";
import { WishListReducer } from "./WishListReducer";
import { CouponReducer } from "./CouponReducer";
import { UserAddressReducer } from "./UserAddressReducer";
import { CartReducer } from "./CartReducer";
import { ChcekOutReducer } from "./chechoutReducer";
export const RootReducer = combineReducers({
  Category: CategoryReducer,
  Brand: BrandReducer,
  SubCategory: SubCategoryReducer,
  vlauese: ProductReducer,
  Auth: AuthReducer,
  Review: ProductReviewReducer,
  WishList: WishListReducer,
  Coupon: CouponReducer,
  userAdd: UserAddressReducer,
  cart: CartReducer,
  checkOut: ChcekOutReducer,
});
