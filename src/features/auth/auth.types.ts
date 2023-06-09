export type CheckEmailFormData = {
  email: string;
};

export type CheckEmailResponse = {
  exists: boolean;
};

export function isCheckEmailResponse(arg: any): arg is CheckEmailResponse {
  return arg && arg.exists !== undefined;
}
