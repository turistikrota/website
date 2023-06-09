import { ToastContextType } from "~/components/toast/Toast";

export const parseApiError = (error: any, toastContext: ToastContextType) => {
  const arr = [checkIfValidationError, checkIfBaseError];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i](error, toastContext)) {
      return;
    }
  }
};

const checkIfValidationError = (
  error: any,
  toastContext: ToastContextType
): boolean => {
  if (Array.isArray(error)) {
    error.forEach((err) => {
      toastContext.error(err.message, 10000);
    });
    return true;
  }
  return false;
};
const checkIfBaseError = (
  error: any,
  toastContext: ToastContextType
): boolean => {
  if (error && typeof error === "string") {
    toastContext.error(error, 10000);
  } else if (error && typeof error === "object" && error.message) {
    toastContext.error(error.message, 10000);
  }
  return true;
};
