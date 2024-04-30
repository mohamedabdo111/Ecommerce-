import baseUrl from "../Api/baseURL";

const UseDeleteData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.delete(url, config);
  return res;
};

export default UseDeleteData;
