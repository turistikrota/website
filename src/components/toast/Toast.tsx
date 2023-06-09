"use client";

import React, { useEffect, useState } from "react";

type ToastType =
  | "success"
  | "error"
  | "info"
  | "warning"
  | "ask"
  | "primary"
  | "secondary"
  | "ask-primary"
  | "ask-secondary";

type Toast = {
  id: string;
  title?: string;
  type: ToastType;
  closing: boolean;
  message: string;
  duration?: number;
  interactive: boolean;
  icon?: React.ReactNode | JSX.Element;
  onClose?: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
};

type AskProps = {
  icon?: React.ReactNode | JSX.Element;
  title: string;
  description: string;
  confirmText: string;
  cancelText: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

type ContextType = {
  success: (message: string, duration?: number) => void;
  error: (message: string, duration?: number) => void;
  info: (message: string, duration?: number) => void;
  warning: (message: string, duration?: number) => void;
  ask: (props: AskProps) => Promise<boolean>;
  primary: (message: string, duration?: number) => void;
  secondary: (message: string, duration?: number) => void;
  askPrimary: (props: AskProps) => Promise<boolean>;
  askSecondary: (props: AskProps) => Promise<boolean>;
};

const ToastContext = React.createContext<ContextType>({
  success: () => {},
  error: () => {},
  info: () => {},
  warning: () => {},
  ask: () => Promise.resolve(false),
  primary: () => {},
  secondary: () => {},
  askPrimary: () => Promise.resolve(false),
  askSecondary: () => Promise.resolve(false),
});

export type ToastContextType = ContextType;

type ListContextType = {
  toasts: Toast[];
  onToast: (toast: Toast) => void;
  removeToast: (id: string) => void;
};

const ToastListContext = React.createContext<ListContextType>({
  toasts: [],
  onToast: () => {},
  removeToast: () => {},
});

type Props = {
  children: React.ReactNode;
};

const DefaultIcons: Record<ToastType, React.ReactNode | JSX.Element> = {
  success: <i className="bx bx-base bx-check"></i>,
  error: <i className="bx bx-sm bx-error"></i>,
  info: <i className="bx bx-base bx-info-circle"></i>,
  warning: <i className="bx bx-base bx-error-circle"></i>,
  ask: <i className="bx bx-base bx-question-mark"></i>,
  primary: <i className="bx bx-base bx-check"></i>,
  secondary: <i className="bx bx-sm bx-error"></i>,
  "ask-primary": <i className="bx bx-base bx-question-mark"></i>,
  "ask-secondary": <i className="bx bx-base bx-question-mark"></i>,
};

type Styles = {
  icon: string;
  card: string;
  text: string;
  title: string;
  close: string;
  primaryButton: string;
  secondaryButton: string;
};

const ToastStyles: Record<ToastType, Styles> = {
  success: {
    icon: "text-green-500 bg-green-100 dark:text-green-400 dark:bg-green-900 dark:bg-opacity-50",
    card: "bg-green-400 text-green-900 bg-opacity-10 dark:text-green-400 dark:bg-green-900 dark:bg-opacity-10",
    title: "",
    text: "text-green-700",
    close: "text-green-500 hover:text-green-700",
    primaryButton: "",
    secondaryButton: "",
  },
  error: {
    icon: "text-red-500 bg-red-200 bg-opacity-50 dark:text-red-400 dark:bg-red-900 dark:bg-opacity-50",
    card: "bg-red-400 text-red-900 bg-opacity-10 dark:text-red-400 dark:bg-red-900 dark:bg-opacity-10",
    title: "",
    text: "text-red-700",
    close: "text-red-500 hover:text-red-700",
    primaryButton: "",
    secondaryButton: "",
  },
  info: {
    icon: "text-blue-500 bg-blue-200 bg-opacity-50 dark:text-blue-400 dark:bg-blue-900 dark:bg-opacity-50",
    card: "bg-blue-400 text-blue-900 bg-opacity-10 dark:text-blue-400 dark:bg-blue-900 dark:bg-opacity-10",
    title: "",
    text: "text-blue-700",
    close: "text-blue-500 hover:text-blue-700",
    primaryButton: "",
    secondaryButton: "",
  },
  warning: {
    icon: "text-yellow-500 bg-yellow-200 bg-opacity-50 dark:text-yellow-400 dark:bg-yellow-900 dark:bg-opacity-50",
    card: "bg-yellow-400 text-yellow-900 bg-opacity-10 dark:text-yellow-400 dark:bg-yellow-900 dark:bg-opacity-10",
    title: "",
    text: "text-yellow-700",
    close: "text-yellow-500 hover:text-yellow-700",
    primaryButton: "",
    secondaryButton: "",
  },
  ask: {
    icon: "text-secondary-500 bg-secondary-100 dark:text-secondary-400 dark:bg-secondary-900 dark:bg-opacity-50",
    card: "bg-second-400 text-secondary-900 bg-opacity-10 dark:text-secondary-400 dark:bg-secondary-900 dark:bg-opacity-10",
    title: "",
    text: "text-secondary-700",
    close: "text-secondary-500 hover:text-secondary-700",
    primaryButton: "bg-secondary-500 hover:bg-secondary-600 text-white",
    secondaryButton:
      "bg-secondary-700 bg-opacity-10 hover:bg-opacity-20 text-secondary-700 hover:text-secondary-800 border-secondary-700",
  },
  primary: {
    icon: "text-primary-500 bg-primary-100 dark:text-primary-400 dark:bg-primary-900 dark:bg-opacity-50",
    card: "bg-primary-400 text-primary-900 bg-opacity-10 dark:text-primary-400 dark:bg-primary-900 dark:bg-opacity-10",
    title: "",
    text: "text-primary-700",
    close: "text-primary-500 hover:text-primary-700",
    primaryButton: "bg-primary-500 hover:bg-primary-600 text-white",
    secondaryButton:
      "bg-primary-700 bg-opacity-10 hover:bg-opacity-20 text-primary-700 hover:text-primary-800 border-primary-100 dark:border-primary-700",
  },
  secondary: {
    icon: "text-secondary-500 bg-secondary-100 dark:text-secondary-400 dark:bg-secondary-900 dark:bg-opacity-50",
    card: "bg-secondary-400 text-secondary-900 bg-opacity-10 dark:text-secondary-400 dark:bg-secondary-900 dark:bg-opacity-10",
    title: "",
    text: "text-secondary-700",
    close: "text-secondary-500 hover:text-secondary-700",
    primaryButton: "bg-secondary-500 hover:bg-secondary-600 text-white",
    secondaryButton:
      "bg-secondary-700 bg-opacity-10 hover:bg-opacity-20 text-secondary-700 hover:text-secondary-800 border-secondary-100 dark:border-secondary-700",
  },
  "ask-primary": {
    icon: "text-primary-500 bg-primary-100 dark:text-primary-400 dark:bg-primary-900 dark:bg-opacity-50",
    card: "bg-primary-400 text-primary-900 bg-opacity-10 dark:text-primary-400 dark:bg-primary-900 dark:bg-opacity-10",
    title: "",
    text: "text-primary-700",
    close: "text-primary-500 hover:text-primary-700",
    primaryButton: "bg-primary-500 hover:bg-primary-600 text-white",
    secondaryButton:
      "bg-primary-700 bg-opacity-10 hover:bg-opacity-20 text-primary-700 hover:text-primary-800 border-primary-500 dark:border-primary-700",
  },
  "ask-secondary": {
    icon: "text-secondary-500 bg-secondary-100 dark:text-secondary-400 dark:bg-secondary-900 dark:bg-opacity-50",
    card: "bg-second-400 text-secondary-900 bg-opacity-10 dark:text-secondary-400 dark:bg-secondary-900 dark:bg-opacity-10",
    title: "",
    text: "text-secondary-700",
    close: "text-secondary-500 hover:text-secondary-700",
    primaryButton: "bg-secondary-500 hover:bg-secondary-600 text-white",
    secondaryButton:
      "bg-secondary-700 bg-opacity-10 hover:bg-opacity-20 text-secondary-700 hover:text-secondary-800 border-secondary-700",
  },
};

type TextToastProps = {
  toast: Toast;
  onClose: () => void;
};

const TextToast: React.FC<TextToastProps> = ({ toast, onClose }) => {
  return (
    <div
      id={toast.id}
      className={`flex items-center w-full max-w-xs p-4 rounded-lg shadow ${
        ToastStyles[toast.type].card
      } ${
        toast.closing
          ? "animate-fade-out-to-right"
          : "animate-fade-in-from-right"
      }`}
      role="alert"
    >
      <div
        className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg ${
          ToastStyles[toast.type].icon
        }`}
      >
        {toast.icon || DefaultIcons[toast.type]}
        <span className="sr-only">Check icon</span>
      </div>
      <div className="ml-3 text-sm font-normal">{toast.message}</div>
      <button
        type="button"
        className={`ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex justify-center items-center h-8 w-8 ${
          ToastStyles[toast.type].close
        }`}
        data-dismiss-target={`#${toast.id}`}
        aria-label="Close"
        onClick={onClose}
      >
        <span className="sr-only">Close</span>
        <i className="bx bx-base bx-x"></i>
      </button>
    </div>
  );
};

type InteractiveToastProps = {
  toast: Toast;
  onClose: () => void;
};

const InteractiveToast: React.FC<InteractiveToastProps> = ({
  toast,
  onClose,
}) => {
  return (
    <div
      id={toast.id}
      className={`w-full max-w-xs p-4 rounded-lg shadow ${
        ToastStyles[toast.type].card
      } ${
        toast.closing
          ? "animate-fade-out-to-right"
          : "animate-fade-in-from-right"
      }`}
      role="alert"
    >
      <div className="flex">
        <div
          className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg ${
            ToastStyles[toast.type].icon
          }`}
        >
          {toast.icon || <i className="bx bx-base bx-question-mark"></i>}
          <span className="sr-only">Refresh icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">
          <span
            className={`mb-1 text-sm font-semibold ${
              ToastStyles[toast.type].title
            }`}
          >
            {toast.title}
          </span>
          <div
            className={`mb-2 text-sm font-normal ${
              ToastStyles[toast.type].text
            }`}
          >
            {toast.message}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <button
                onClick={() => {
                  onClose();
                  if (toast.onConfirm) toast.onConfirm();
                }}
                className={`inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center rounded-lg transition-colors ${
                  ToastStyles[toast.type].primaryButton
                }`}
              >
                {toast.confirmText}
              </button>
            </div>
            <div>
              <button
                onClick={() => {
                  onClose();
                  if (toast.onCancel) toast.onCancel();
                }}
                className={`inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center border rounded-lg transition-colors ${
                  ToastStyles[toast.type].secondaryButton
                }`}
              >
                {toast.cancelText}
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          className={`ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex justify-center items-center h-8 w-8 ${
            ToastStyles[toast.type].close
          }`}
          data-dismiss-target={`#${toast.id}`}
          aria-label="Close"
          onClick={onClose}
        >
          <span className="sr-only">Close</span>
          <i className="bx bx-base bx-x"></i>
        </button>
      </div>
    </div>
  );
};

export const ToastListProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [removes, setRemoves] = useState<{ id: string; duration: number }[]>(
    []
  );
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    if (removes.length > 0) {
      removes.forEach((rem) => {
        setTimeout(() => {
          removeToast(rem.id);
        }, rem.duration);
      });
      setRemoves([]);
    }
  }, [removes]);

  const onToast = (toast: Toast) => {
    setToasts((prev) => [...prev, toast]);
    if (toast.duration) {
      setRemoves((prev) => [
        ...prev,
        { id: toast.id, duration: toast.duration! },
      ]);
    }
  };

  const removeToast = (id: string) => {
    const toast = toasts.find((t) => t.id === id);
    if (toast) {
      toast.closing = true;
      setToasts((prev) => [...prev]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 290);
    }
  };

  return (
    <ToastListContext.Provider value={{ toasts, onToast, removeToast }}>
      {children}
    </ToastListContext.Provider>
  );
};

export const useToastList = () => {
  const context = React.useContext(ToastListContext);
  if (!context) {
    throw new Error("useToastList must be used within a ToastListProvider");
  }
  return context;
};

export const ToastProvider = ({ children }: Props) => {
  const { onToast, removeToast, toasts } = useToastList();

  const addToast = (type: ToastType, message: string, duration?: number) => {
    const id = Math.random().toString(36).substr(2, 9);
    const toast = {
      id,
      type,
      message,
      interactive: false,
      closing: false,
      duration,
    };
    onToast(toast);
  };

  const success = (message: string, duration?: number) =>
    addToast("success", message, duration);
  const error = (message: string, duration?: number) =>
    addToast("error", message, duration);
  const info = (message: string, duration?: number) =>
    addToast("info", message, duration);
  const warning = (message: string, duration?: number) =>
    addToast("warning", message, duration);
  const primary = (message: string, duration?: number) =>
    addToast("primary", message, duration);
  const secondary = (message: string, duration?: number) =>
    addToast("secondary", message, duration);

  const addAskToast = (props: AskProps, type: ToastType): Promise<boolean> => {
    return new Promise((resolve) => {
      const id = Math.random().toString(36).substr(2, 9);
      const toast: Toast = {
        id,
        type: type,
        title: props.title,
        message: props.description,
        interactive: true,
        closing: false,
        icon: props.icon,
        confirmText: props.confirmText,
        cancelText: props.cancelText,
        onConfirm: () => {
          if (props.onConfirm) props.onConfirm();
          resolve(true);
        },
        onCancel: () => {
          if (props.onCancel) props.onCancel();
          resolve(false);
        },
      };
      onToast(toast);
    });
  };

  const ask = (props: AskProps): Promise<boolean> => addAskToast(props, "ask");
  const askPrimary = (props: AskProps): Promise<boolean> =>
    addAskToast(props, "primary");
  const askSecondary = (props: AskProps): Promise<boolean> =>
    addAskToast(props, "secondary");

  return (
    <ToastContext.Provider
      value={{
        success,
        error,
        info,
        warning,
        ask,
        askPrimary,
        askSecondary,
        primary,
        secondary,
      }}
    >
      {children}
      <div className="fixed bottom-0 right-0 p-4 gap-3 flex flex-col items-end z-50">
        {toasts.map((toast) =>
          toast.interactive ? (
            <InteractiveToast
              toast={toast}
              key={toast.id}
              onClose={() => removeToast(toast.id)}
            />
          ) : (
            <TextToast
              key={toast.id}
              onClose={() => removeToast(toast.id)}
              toast={toast}
            />
          )
        )}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => React.useContext(ToastContext);
