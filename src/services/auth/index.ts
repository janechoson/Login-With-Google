// import axios from "axios";
import LoginRequest from "../api/login";

export function getToken(data: { password: string; user_id: string }) {
  const getToken = new LoginRequest();
  return getToken.login(data);
}

export function getMe() {
  const getme = new LoginRequest();
  return getme.getMe();
}

export function getMessage() {
  const getmessage = new LoginRequest();
  return getmessage.getMessage();
}
