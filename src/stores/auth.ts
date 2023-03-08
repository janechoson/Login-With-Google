import { defineStore } from "pinia";
import { getToken, getMe } from "@/services/auth/index";
import { setCookie, getCookie, eraseCookie } from "@/plugins/cookies";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useAuthStore = defineStore("authStore", () => {
  const user = ref({});
  const router = useRouter();
  const loggedIn = ref<boolean>(
    getCookie("loggedIn") && getCookie("loggedIn") !== "false" ? true : false
  );
  const login = async (dataLogin: { user_id: string; password: string }) => {
    try {
      const data = await getToken(dataLogin);
      if (data) {
        loggedIn.value = true;
        setCookie("loggedIn", true, 1);
        setCookie("token", data, 1);
        await getProfile();
        return loggedIn.value;
      }
    } catch (error: any) {
      return { error: error.response.data };
    }
  };
  //  Trước tiên, hàm kiểm tra xem người dùng đã đăng nhập hay chưa bằng cách sử dụng cookie với tên loggedIn.
  //  Nếu cookie đã được đặt và có giá trị khác "false", loggedIn sẽ được đặt là true, ngược lại loggedIn sẽ được đặt là false.
  // Sau đó, hàm gọi hàm getToken để lấy token cho người dùng với thông tin đăng nhập được cung cấp.
  // Nếu nhận được dữ liệu từ getToken, loggedIn sẽ được đặt là true, cookie loggedIn cũng được đặt lại thành true
  // và cookie token sẽ được đặt với giá trị của token và thời gian sống là 1 ngày. Sau đó, hàm gọi hàm getProfile để lấy thông tin hồ sơ người dùng.
  // Nếu có bất kỳ lỗi nào xảy ra, hàm sẽ trả về một đối tượng chứa thông tin lỗi để xử lý.

  const getProfile = async () => {
    try {
      const data = await getMe();
      if (data) {
        setCookie("userId", data.user_id, 1);
        user.value = data;
        loggedIn.value = true;
        setCookie("loggedIn", true, 1);
      }
    } catch (error) {
      logout();
      loggedIn.value = false;
      setCookie("loggedIn", false, 1);
      user.value = {};
    }
  };
  // Gọi hàm getMe để lấy thông tin người dùng.
  // Nếu thành công, cập nhật giá trị của biến user thành dữ liệu người dùng lấy được,
  // cập nhật giá trị của biến loggedIn thành true và lưu giá trị true vào cookie loggedIn.
  // Nếu thất bại, gọi hàm logout để đăng xuất, cập nhật giá trị của biến loggedIn thành false
  // và lưu giá trị false vào cookie loggedIn, và đặt giá trị của biến user thành một đối tượng trống.

  const logout = () => {
    router.push("/sign_in");
    loggedIn.value = false;
    setCookie("loggedIn", String(false), 1);
    eraseCookie("token");
    eraseCookie("userId");
    user.value = {};
    return true;
  };
  return { login, loggedIn, user, getProfile, logout };
});
