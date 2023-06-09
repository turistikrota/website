export type CheckEmailFormData = {
  email: string;
};

export type CheckEmailResponse = {
  exists: boolean;
};

export function isCheckEmailResponse(arg: any): arg is CheckEmailResponse {
  return arg && arg.exists !== undefined;
}

export type LoginFormData = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

export function isLoginResponse(arg: any): arg is LoginResponse {
  return arg && arg.token !== undefined;
}

export type RegisterFormData = {
  email: string;
  password: string;
};

export type RegisterResponse = {
  token: string;
};

export function isRegisterResponse(arg: any): arg is RegisterResponse {
  return arg && arg.token !== undefined;
}
