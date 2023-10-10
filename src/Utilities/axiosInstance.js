import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dev-api-commerce.chicos.com",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "x-api-key": "2H7QGTtTn9fKaTk2ar8dVmvXC9yyWlNtgjMea1QZDX4Kxkak",
  },
});

export default axiosInstance;
