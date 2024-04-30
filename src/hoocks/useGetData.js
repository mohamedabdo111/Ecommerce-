import baseUrl from "../Api/baseURL";

export const UseGetData = async (url, params) => {
  const res = await baseUrl.get(url, params);
  return res.data;
};

export const UseGetDataToken = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.get(url, config);
  return res.data;
};
