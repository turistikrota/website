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

export type VerifyRequiredForLoginResponse = {
  verifyRequired: boolean;
};

export function isLoginResponse(arg: any): arg is LoginResponse {
  return arg && arg.token !== undefined;
}

export function isVerifyRequiredForLoginResponse(
  arg: any
): arg is VerifyRequiredForLoginResponse {
  return arg && arg.verifyRequired !== undefined;
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

export type VerifyFormData = {
  token: string;
};

export type VerifyFailResponse = {
  email: string;
  reSendable: boolean;
};

export function isVerifyFailResponse(arg: any): arg is VerifyFailResponse {
  return arg && arg.email !== undefined && arg.reSendable !== undefined;
}

export type ReSendVerificationFormData = {
  email: string;
};

export type ExpiredError = {
  isExpire: boolean;
};

export function isExpiredError(arg: any): arg is ExpiredError {
  return arg && typeof arg.isExpire !== undefined;
}
