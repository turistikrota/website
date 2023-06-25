import { useTranslations } from "next-intl";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "~/styles/animation.css";

type ModalType = {
  Head: HeadType;
  Body: typeof Body;
  Footer: typeof Footer;
};

type CloseableProps = {
  onClose: () => void;
};

type ModalProps = CloseableProps & {
  transitionClass?: string;
  unmount?: boolean;
  delay?: number;
  open?: boolean;
};

type HeadType = typeof Head & {
  Title: typeof Title;
  Subtitle: typeof Subtitle;
};

function Head({ children }: React.PropsWithChildren) {
  return <div className="flex flex-col p-4 border-b">{children}</div>;
}

function Title({ children }: React.PropsWithChildren) {
  return <div className="text-xl font-bold">{children}</div>;
}

function Subtitle({ children }: React.PropsWithChildren) {
  return <div className="text-gray-500 dark:text-gray-400">{children}</div>;
}

function CloseButton({ onClose }: CloseableProps) {
  const t = useTranslations("ux.button");
  return (
    <button
      className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
      onClick={onClose}
      aria-label={t("close")}
      title={t("close")}
      type="button"
    >
      <i className="bx bx-md bx-x"></i>
    </button>
  );
}

function Body({ children }: React.PropsWithChildren) {
  return <div className="p-4 grow">{children}</div>;
}

function Footer({ children }: React.PropsWithChildren) {
  return (
    <div className="flex p-4 justify-between items-center border-t">
      {children}
    </div>
  );
}

function Modal({
  children,
  onClose,
  delay = 150,
  open = false,
  transitionClass = "modal-scaler",
  unmount = true,
}: React.PropsWithChildren<ModalProps>) {
  const nodeRef = useRef(null);
  return (
    <div
      className={`items-center justify-center flex-col ${
        open ? "fixed inset-0 z-50 flex" : "hidden"
      }`}
    >
      <div
        className={`bg-white dark:bg-black opacity-50 ${
          open ? "fixed inset-0 opacity-50 block" : " hidden opacity-0"
        }`}
        onClick={onClose}
      ></div>
      <CSSTransition
        in={open}
        timeout={delay}
        classNames={transitionClass}
        unmountOnExit={unmount}
        onExited={onClose}
        nodeRef={nodeRef}
      >
        <div
          className="w-full max-w-md flex flex-col bg-second rounded-lg shadow-lg relative z-10 min-h-[50vh] min-w-[50vw]"
          ref={nodeRef}
        >
          {children}
        </div>
      </CSSTransition>
    </div>
  );
}

Head.Title = Title;
Head.Subtitle = Subtitle;
Head.CloseButton = CloseButton;

Modal.Head = Head;
Modal.Body = Body;
Modal.Footer = Footer;

export default Modal;
