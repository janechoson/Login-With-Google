// setCookie: Hàm này nhận ba tham số: tên cookie, giá trị của cookie và số ngày sống của cookie.
// Nếu số ngày sống được cung cấp, hàm sẽ tính toán ngày hết hạn của cookie bằng cách thêm số ngày vào thời gian hiện tại và gán nó vào biến expires.
//  Sau đó, hàm sử dụng document.cookie để tạo một chuỗi cookie bằng cách kết hợp tên, giá trị, hạn sử dụng và đường dẫn của cookie.
export const setCookie = (name: string, value: any, days: number): void => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

// getCookie: Hàm này nhận một tham số là tên cookie và trả về giá trị của cookie đó.
// Hàm tách các cookie đã lưu trong trình duyệt bằng cách sử dụng document.cookie và chạy một vòng lặp qua từng cookie để tìm cookie có tên được chỉ định.
//  Nếu cookie được tìm thấy, hàm trả về giá trị của cookie, nếu không hàm trả về null.
export const getCookie = (name: string) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

// eraseCookie: Hàm này nhận một tham số là tên cookie
// và xóa cookie có tên đó khỏi trình duyệt bằng cách gán một giá trị trống cho cookie đó và đặt hạn sử dụng cho cookie vào thời gian quá khứ, vì vậy trình duyệt sẽ xóa nó.
export const eraseCookie = (name: string) => {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};
