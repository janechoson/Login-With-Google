export interface login {
  user_id: string;
  password: string;
}

export interface getme {
  user_id: string;
  last_nm: string;
  first_nm: string;
  role_type_cd: string;
  status_cd: string;
  token: null;
}
export interface formState {
  user_id: string;
  password: string;
}
