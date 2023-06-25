"use client";
import { useTranslations } from "next-intl";
import { default as NextImage } from "next/image";
import { useRef, useState } from "react";
import "react-advanced-cropper/dist/style.css";
import Spin from "sspin/dist/esm/Spin";
import Condition from "../condition/Condition";
import ImageCropper from "../cropper/ImageCropper";

type Props = {
  avatar: string;
  onChange: (file: File) => void;
  minSize?: number;
  maxSize?: number;
  accept?: string;
  loading?: boolean;
  error: string | null;
};

export default function AvatarUpload({
  avatar,
  onChange,
  minSize = 0,
  maxSize = 1,
  accept = "image/png",
  error: initialError = null,
  loading = false,
}: Props) {
  const [src, setSrc] = useState(avatar);
  const [cropVisible, setCropVisible] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(initialError);
  const t = useTranslations("avatar-form");

  const validate = (file: File | undefined): Promise<File> => {
    return new Promise((resolve, reject) => {
      if (!file) return reject(t("errors.required").toString());
      if (file.size < minSize * 1024 * 1024)
        return reject(
          t("errors.min", {
            min: minSize,
          }).toString()
        );

      if (file.size > maxSize * 1024 * 1024)
        return reject(
          t("errors.max", {
            max: maxSize,
          }).toString()
        );

      if (!file.type.startsWith(accept))
        return reject(t("errors.type", { accept }).toString());
      return resolve(file);
    });
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const validFile = await validate(file).catch((err) => {
      setError(err);
      return null;
    });

    if (validFile) {
      setError(null);
      setSrc(URL.createObjectURL(validFile));
      setCropVisible(true);
    }
  };

  const focus = () => {
    if (!fileInputRef.current) return;
    fileInputRef.current.click();
  };

  const onClose = () => {
    setCropVisible(false);
    if (!fileInputRef.current) return;
    fileInputRef.current.value = "";
  };

  const onCrop = (file: File) => {
    setCropVisible(false);
    onChange(file);
    if (!fileInputRef.current) return;
    fileInputRef.current.value = "";
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <ImageCropper
          visible={cropVisible}
          onClose={onClose}
          onCrop={onCrop}
          src={src}
          circle={true}
        ></ImageCropper>
        <Spin loading={loading}>
          <NextImage
            src={src}
            alt="Avatar"
            title={t("upload")}
            width={150}
            height={150}
            className="object-cover w-40 h-40 md:w-48 md:h-48 rounded-md cursor-pointer bg-second border hover:shadow-md transition-shadow"
            onClick={focus}
            priority={true}
          />
          <Condition value={!loading}>
            <span
              role="button"
              className="absolute bottom-1 text-gray-800 dark:text-gray-200 flex items-center justify-center gap-1 right-1/2 transform translate-x-1/2 translate-y-1/2 bg-second border rounded-md px-3 py-1 hover:scale-105 transition-transform"
              onClick={focus}
              title={t("upload")}
              aria-label={t("upload")}
            >
              <i className="bx bx-xs bx-edit"></i>
              {t("edit")}
            </span>
          </Condition>
        </Spin>
      </div>
      <input
        type="file"
        className="hidden"
        accept={accept}
        onChange={handleChange}
        ref={fileInputRef}
      />
      {error && <p className="mt-5 text-sm text-red-500">{error}</p>}
    </div>
  );
}
