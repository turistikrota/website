"use client";
import { useLocale, useTranslations } from "next-intl";
import { default as NextImage } from "next/image";
import { useState } from "react";
import "react-advanced-cropper/dist/style.css";
import Spin from "sspin/dist/esm/Spin";
import Condition from "../condition/Condition";
import ImageCropper from "../cropper/ImageCropper";

type Props = {
  avatar: string;
  onChange: (file: File) => void;
  minSize?: number;
  maxSize?: number;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
  accept?: string;
  loading?: boolean;
  error: string | null;
};

export default function AvatarUpload({
  avatar,
  onChange,
  minSize = 0,
  maxSize = 1,
  minWidth = 500,
  maxWidth = 500,
  minHeight = 500,
  maxHeight = 500,
  accept = "image/png",
  error: initialError = null,
  loading = false,
}: Props) {
  const [src, setSrc] = useState(avatar);
  const [cropVisible, setCropVisible] = useState(false);
  const [error, setError] = useState<string | null>(initialError);
  const t = useTranslations("avatar-form");
  const locale = useLocale();

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

      /*
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        if (img.width < minWidth || img.height < minHeight)
          return reject(
            t("errors.minSize", { minWidth, minHeight: minHeight }).toString()
          );
        if (img.width > maxWidth || img.height > maxHeight)
          return reject(
            t("errors.maxSize", { maxWidth, maxHeight: maxHeight }).toString()
          );
      };
        */
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
      //onChange(dest);
    }
  };

  const focus = () => {
    document.getElementById("avatar")?.click();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <ImageCropper
          visible={cropVisible}
          onClose={() => setCropVisible(false)}
          onCrop={(file) => {
            console.log("file:", file);
          }}
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
        id="avatar"
        type="file"
        className="hidden"
        accept={accept}
        onChange={handleChange}
      />
      {error && <p className="mt-5 text-sm text-red-500">{error}</p>}
    </div>
  );
}
