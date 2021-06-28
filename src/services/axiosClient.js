import axios from "axios";
import qs from "qs";
import { httpToHttps } from "../utils/myFunction";

const axiosClient = axios.create({
  baseURL: "https://movie0706.cybersoft.edu.vn/api",
  // Tự cấu hình cách lấy params mặc định của axios bỏ qua giá trị null và undefined trong params
  paramsSerializer: (params) => qs.stringify(params, { skipNulls: true }),
});

axiosClient.interceptors.request.use(
  //xu ly truoc khi request duoc gui len server
  (config) => {
    //Them authorization vao header
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      const { accessToken } = JSON.parse(userInfo);
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  //xu ly khi request bi loi (request chua duoc gui len server)
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  // xu ly ket qua tra ve tu server
  (response) => {
    response.data = httpToHttps(response.data);
    return response;
  },
  // xu ly neu ket qua tra ve bi loi
  (error) => {
    if (error.status === 401) {
      // xu ly logout: clear localStorage, day nguoi dung ve trang login
    }
    if (error.status === 500) {
      //xu ly thong bao cho nguoi dung server dang bi loi
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
