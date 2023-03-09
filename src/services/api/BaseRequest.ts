import { getCookie } from "@/plugins/cookies";
import axios from "axios";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

export default class BaseRequest {
  getPrefix() {
    return import.meta.env.VITE_API_ENDPOINT_URL;
  }
  getAuthorization() {
    return `Bearer ${getCookie("token")}`;
  }
  configHeader() {
    return {
      Authorization: this.getAuthorization(),
    };
  }
  get<T>(url: string, params = {}): Promise<T> {
    return new Promise((resolve, reject) => {
      axios
        .get(this.getPrefix() + url, {
          params,
          headers: this.configHeader(),
          withCredentials: false,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          this._errorHandler(reject, error);
        });
    });
  }
  //  Đây là phương thức get để thực hiện HTTP GET request. Phương thức này nhận vào hai tham số là url và params (mặc định là một object trống {}),
  //  và trả về một Promise với kiểu trả về là T.
  // Trong phương thức này, đầu tiên tạo một Promise mới bằng cách sử dụng new Promise((resolve, reject) => { ... }).
  // Phương thức axios.get() được sử dụng để gửi HTTP GET request đến this.getPrefix() + url với params và headers được cấu hình bằng phương thức configHeader().
  // Nếu request thành công, resolve() được gọi với tham số là dữ liệu trả về từ server được lấy từ response data response.data.
  //  Nếu request thất bại, _errorHandler() được gọi với tham số là function reject và lỗi error để xử lý lỗi.

  post(url: string, data = {}) {
    const params = data;
    return new Promise((resolve, reject) => {
      axios
        .post(this.getPrefix() + url, params, {
          headers: this.configHeader(),
          withCredentials: false,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          this._errorHandler(reject, error);
        });
    });
  }
  put(url: string, data = {}) {
    const params = data;
    return new Promise((resolve, reject) => {
      axios
        .put(this.getPrefix() + url, params, {
          headers: this.configHeader(),
          withCredentials: false,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          this._errorHandler(reject, error);
        });
    });
  }
  delete(url: string, data = {}) {
    return new Promise((resolve, reject) => {
      axios
        .delete(this.getPrefix() + url, {
          headers: this.configHeader(),
          withCredentials: false,
          data,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          this._errorHandler(reject, error);
        });
    });
  }
  _responseHandler(resolve: any, res: any) {
    return resolve(res.body.data);
  }
  _errorHandler(reject: any, err: any) {
    if (err.response && err.response.status === 401) {
      // TODO:
    }
    if (
      err.response &&
      (err.response.status === 403 ||
        (err.response.data && err.response.data.errorCode === 403))
    ) {
      // TODO:
    }
    if (err.response && err.response.status === 503) {
      // TODO:
    }
    if (err.response && err.response.status === 400) {
      // TODO:
    }
    return reject(err);
  }
}

// getPrefix(): Phương thức trả về địa chỉ URL của API được lưu trữ trong biến môi trường VITE_API_ENDPOINT_URL.
// getAuthorization(): Phương thức trả về chuỗi chuỗi xác thực JWT đã lưu trữ trong cookie "token" bằng cách sử dụng phương thức getCookie() từ một plugin được import.
// configHeader(): Phương thức trả về đối tượng chứa tiêu đề HTTP Authorization, được sử dụng để xác thực yêu cầu, bằng cách gọi phương thức getAuthorization().
// get(), post(), put(), delete(): Các phương thức này được sử dụng để tạo các yêu cầu HTTP GET, POST, PUT và DELETE tương ứng đến API.
//  Chúng sử dụng Axios để thực hiện các yêu cầu và trả về một promise chứa dữ liệu phản hồi từ API.
// _errorHandler(): Đây là phương thức xử lý lỗi được sử dụng bởi các phương thức trên. Nếu có lỗi xảy ra,
//  phương thức này kiểm tra mã lỗi và thực hiện một số hành động nhất định (ví dụ: chuyển hướng đến trang đăng nhập nếu lỗi xác thực xảy ra).
