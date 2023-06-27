import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import {
  CircleStencil,
  Cropper,
  type CropperRef,
} from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import "react-advanced-cropper/dist/themes/corners.css";
import Button from "../button/Button";
import Condition from "../condition/Condition";
import Modal from "../modal/Modal";

type ImageCropperProps = {
  src: string;
  visible: boolean;
  circle?: boolean;
  onClose: () => void;
  onCrop: (file: File) => void;
};

export default function ImageCropper({
  src,
  visible,
  circle = true,
  onClose,
  onCrop,
}: ImageCropperProps) {
  const cropperRef = useRef<CropperRef>(null);
  const t = useTranslations("ux.button");

  const handleOnCrop = () => {
    if (!cropperRef.current) return;
    const canvas = cropperRef.current.getCanvas();
    if (!canvas) return;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const file = new File([blob], "avatar.png", {
        type: "image/png",
        lastModified: Date.now(),
      });
      onCrop(file);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      if (!cropperRef.current) return;
      cropperRef.current.reset();
    }, 300);
  }, [visible]);

  const rotateLeft = () => {
    if (!cropperRef.current) return;
    cropperRef.current.rotateImage(-90);
  };

  const rotateRight = () => {
    if (!cropperRef.current) return;
    cropperRef.current.rotateImage(90);
  };

  const flipHorizontal = () => {
    if (!cropperRef.current) return;
    cropperRef.current.flipImage(false, true);
  };

  const flipVertical = () => {
    if (!cropperRef.current) return;
    cropperRef.current.flipImage(true, false);
  };

  const handleOnCancel = () => {
    onClose();
  };

  return (
    <Modal open={visible} onClose={handleOnCancel} shadow={false}>
      <div className="w-full h-full flex items-center justify-center">
        <span className="w-full h-full max-h-[90vh] md:max-h-[70vh]">
          <Condition value={visible}>
            <Cropper
              src={src}
              ref={cropperRef}
              stencilProps={{
                aspectRatio: 1 / 1,
                grid: true,
                previewClassName: "preview",
              }}
              onReady={(cropper) => {
                cropper.reset();
              }}
              checkOrientation={true}
              stencilComponent={circle ? CircleStencil : undefined}
            />
          </Condition>
          <div className="absolute -top-14 right-1/2 transform translate-x-1/2 flex gap-2">
            <Button
              block={false}
              className="flex items-center justify-center"
              htmlType="button"
              title={t("rotate-left")}
              aria-label={t("rotate-left")}
              onClick={rotateLeft}
              variant="opacity"
            >
              <i className="bx bx-sm bx-rotate-left"></i>
            </Button>
            <Button
              block={false}
              className="flex items-center justify-center"
              htmlType="button"
              title={t("rotate-right")}
              aria-label={t("rotate-right")}
              onClick={rotateRight}
              variant="opacity"
            >
              <i className="bx bx-sm bx-rotate-right"></i>
            </Button>
            <Button
              block={false}
              className="flex items-center justify-center"
              htmlType="button"
              title={t("flip-horizontal")}
              aria-label={t("flip-horizontal")}
              onClick={flipHorizontal}
              variant="opacity"
            >
              <i className="bx bx-sm bx-reflect-horizontal"></i>
            </Button>
            <Button
              block={false}
              className="flex items-center justify-center"
              htmlType="button"
              title={t("flip-vertical")}
              aria-label={t("flip-vertical")}
              onClick={flipVertical}
              variant="opacity"
            >
              <i className="bx bx-sm bx-reflect-vertical"></i>
            </Button>
          </div>
          <div className="absolute -bottom-14 right-1/2 transform translate-x-1/2 mt-4 mx-auto flex justify-center gap-2">
            <Button
              block={false}
              className="flex items-center justify-center"
              htmlType="button"
              title={t("save")}
              aria-label={t("save")}
              onClick={handleOnCrop}
            >
              <i className="bx bx-sm bx-check"></i>
            </Button>
            <Button
              block={false}
              variant="error"
              className="flex items-center justify-center"
              htmlType="button"
              title={t("cancel")}
              aria-label={t("cancel")}
              onClick={handleOnCancel}
            >
              <i className="bx bx-sm bx-trash"></i>
            </Button>
          </div>
        </span>
      </div>
    </Modal>
  );
}
