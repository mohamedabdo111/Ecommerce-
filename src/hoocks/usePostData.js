import baseUrl from "../Api/baseURL";

const UsePostCategoryWithImage = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await baseUrl.post(url, params, config);
  return response;
};
const UsePostCategoryWithData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await baseUrl.post(url, params, config);
  return response;
};

export { UsePostCategoryWithData, UsePostCategoryWithImage };
