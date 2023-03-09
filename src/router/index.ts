import { createRouter, createWebHistory, START_LOCATION } from "vue-router";
import generatedRoutes from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";
import { useAuthStore } from "@/stores/auth";
const routes = setupLayouts(generatedRoutes);

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  const { getProfile, loggedIn, user } = useAuthStore();
  if (from === START_LOCATION && to.meta?.requiresAuth && loggedIn) {
    await getProfile();
  }

  if (!router.options.routes.map((route) => route.path).includes(to.path)) {
    return next({ name: "new_feed" });
  }

  if ((to.meta?.requiresAuth && !loggedIn) || !user) {
    return next({ name: "sign_in" });
  } else next();
  return next();
});

export default router;
// createRouter: Hàm để tạo một router Vue mới.
// createWebHistory: Lớp để tạo một router history dựa trên API của trình duyệt.
// START_LOCATION: Một biến hằng chứa thông tin về địa chỉ URL khi ứng dụng được khởi động.
// generatedRoutes: Một danh sách các tuyến được tạo ra tự động bởi plugin Vue CLI.
// setupLayouts: Hàm để thiết lập các bố cục cho các trang được tạo ra tự động.
// useAuthStore: Một hàm để lấy trạng thái của cửa hàng Vuex được sử dụng cho xác thực.
// Router được tạo ra bằng cách sử dụng createRouter với một lịch sử web và danh sách các tuyến được thiết lập bằng setupLayouts và generatedRoutes.

// Một số các hàm xử lý được đăng ký cho router,
// bao gồm scrollBehavior để luôn luôn cuộn lên đầu trang và beforeEach để kiểm tra xác thực trước khi điều hướng đến một trang.
// Nếu người dùng không đăng nhập và truy cập một trang yêu cầu xác thực, họ sẽ được điều hướng đến trang đăng nhập.
//  Nếu đường dẫn không phù hợp với bất kỳ tuyến nào được định nghĩa trong danh sách tuyến,
//   người dùng sẽ được điều hướng đến trang tìm kiếm hợp đồng.
