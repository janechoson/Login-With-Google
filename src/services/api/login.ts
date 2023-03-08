import BaseRequest from "./BaseRequest";
import type { login, getme } from "@/types/login";

export default class LoginRequest extends BaseRequest {
  login(data: login) {
    return this.post("UserAPI/Login", data);
  }

  getMe(): Promise<getme> {
    return this.get("UserAPI/getme");
  }

  getMessage() {
    return this.get("messages");
  }
}
