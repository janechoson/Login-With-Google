import dayjs, { extend, locale, type Dayjs } from "dayjs";
import "dayjs/locale/ja";
import duration from "dayjs/plugin/duration";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
extend(duration);
extend(relativeTime);
extend(localizedFormat);
extend(utc);
extend(timezone);
extend(isSameOrAfter);
extend(isSameOrBefore);
extend(isBetween);
locale("ja");
export default dayjs;
export type { Dayjs };

// Import các plugin của Day.js như duration, isBetween, isSameOrAfter, isSameOrBefore, localizedFormat, relativeTime, timezone và utc.
//  Các plugin này mở rộng các tính năng của Day.js để xử lý định dạng thời gian và ngày tháng theo nhiều cách khác nhau.

// Sử dụng hàm extend để đăng ký các plugin với thư viện Day.js.
//  Các plugin này sẽ mở rộng tính năng của Day.js và cho phép sử dụng các phương pháp mới để xử lý thời gian và ngày tháng.

// Sử dụng hàm locale để cài đặt ngôn ngữ mặc định cho thư viện Day.js.
// Trong đoạn code này, ngôn ngữ được chọn là "ja" (tiếng Nhật).

// Export đối tượng Day.js đã được cài đặt và có thể sử dụng trong ứng dụng của bạn.
// Cùng với đối tượng Day.js, module cũng xuất ra kiểu Dayjs để có thể sử dụng cho kiểm tra kiểu dữ liệu của các đối tượng được tạo bởi Day.js.
