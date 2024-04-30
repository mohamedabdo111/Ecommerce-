// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RemoveFromWishListAction } from "../../redux/actions/WishlishAction";

// const RemveFromWashListHock = (item) => {
//   const [state, setState] = useState(true);
//   const [loading, setLoading] = useState(true);

//   const dispatch = useDispatch();
//   const RemoveFromWishListAction = async () => {
//     setState(true);
//     setLoading(true);
//     await dispatch(RemoveFromWishListAction(item._id));
//     setLoading(false);
//   };

//   const res = useSelector((item) => item.WishList.removewishlist);
//   useEffect(() => {
//     if (loading === false) {
//       if (res) {
//         console.log(res);
//         // if (res.status && res.status === 200) {
//         //   notify("تم اضافه المنتج الي المفضله", "success");
//         // } else {
//         //   notify("حدث خطأ عند الاضافه حاول مره اخري", "error");
//         // }
//       }
//     }
//   }, [loading]);

//   return [state, AddToWishList, setState];
// };

// export default RemveFromWashListHock;
