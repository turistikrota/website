import { ToastContextType } from "~/components/toast/Toast";

type ErrorChainEl = {
  error: any;
  form: any;
  toastContext: ToastContextType;
};

export const parseApiError = (
  error: any,
  form: any,
  toastContext: ToastContextType
) => {
  const arr = [checkIfValidationError, checkIfBaseError];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i]({
        error,
        form,
        toastContext,
      })
    ) {
      return;
    }
  }
};

const checkIfValidationError = ({
  error,
  form,
  toastContext,
}: ErrorChainEl): boolean => {
  if (Array.isArray(error)) {
    error.forEach((err) => {
      setFormError({
        form,
        msg: err.message,
        callback: () => toastContext.error(err.message, 10000),
        field: err.namespace,
      });
    });
    return true;
  }
  return false;
};
const checkIfBaseError = ({
  error,
  form,
  toastContext,
}: ErrorChainEl): boolean => {
  if (error && typeof error === "string") {
    toastContext.error(error, 10000);
  } else if (error && typeof error === "object" && error.message) {
    toastContext.error(error.message, 10000);
  }
  return true;
};

type SetFormErrorProps = {
  form: any;
  msg: string;
  callback: () => void;
  field?: string;
};

const setFormError = ({ form, msg, callback, field }: SetFormErrorProps) => {
  if (form && form.setFieldError) {
    form.setErrors({
      [field || ""]: msg,
    });
    form.setSubmitting(false);
  } else {
    callback();
  }
};
