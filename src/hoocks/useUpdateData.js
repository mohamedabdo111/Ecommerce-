import baseUrl from "../Api/baseURL";

const UseUpdateWithImage = async (url, params) => {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const response = await baseUrl.put(url, params, config);
  return response;
};
const UseUpdateWithData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await baseUrl.put(url, params, config);
  return response;
};

export { UseUpdateWithImage, UseUpdateWithData };
