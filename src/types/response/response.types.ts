export type BaseResponse = {
  message: string;
};

export type DetailResponse<T> = BaseResponse & {
  details: T;
};

export type ValidationErrorDetail = {
  field: string;
  message: string;
  namespace?: string;
  value: string;
};
