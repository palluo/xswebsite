import axios from "axios";
import iview from "view-design";

/**
 * @class HttpRequest
 * @param {Object} options { BASEURL, TIMEOUT }
 * @description 基于axios二次封装类，提供给不同地址实例使用
 */
export default class HttpRequest {
  constructor({ BASEURL, TIMEOUT = 60000 * 3 }) {
    this.config = {
      baseURL: BASEURL,
      timeout: TIMEOUT,
      withCredentials: true
    };
    this.instance = axios.create(this.config);
    // 安装拦截器
    this.interceptors();
    return this.instance;
  }
  // 拦截器
  interceptors(instance = this.instance) {
    // 请求拦截
    instance.interceptors.request.use(
      config => {
        return config;
      },
      error => {
        // 请求失败
        return Promise.reject(error);
      }
    );
    // 响应拦截
    instance.interceptors.response.use(
      response => {
        const { status } = response;
        if (status === 200) {
          const { data } = response;
          const { code, status, message, error } = data; // error 兼容soe
          if (code !== 1000) {
            iview.Message.error(`${status} ${message}`);
            return Promise.reject(message);
          }
          if (error) {
            iview.Message.error(`${error.code} ${error.message}`);
            return Promise.reject(error.message);
          }
          return Promise.resolve(data);
        } else {
          return iview.Message.error(status);
        }
      },
      error => {
        // axios捕获服务器异常
        iview.Message.error(error.message);
        return Promise.reject(error.response);
      }
    );
  }
  getInstance() {
    return this.instance;
  }
  static get(...args) {
    return axios.get(...args);
  }
}
