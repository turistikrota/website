"use client";

import { useTranslations } from "next-intl";
import { default as NextImage } from "next/image";
import { useState } from "react";

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
}: Props) {
  const [src, setSrc] = useState(avatar);
  const [error, setError] = useState<string | null>(null);
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

        return resolve(file);
      };
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
      onChange(validFile);
    }
  };

  const focus = () => {
    document.getElementById("avatar")?.click();
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <NextImage
          src={src}
          alt="Avatar"
          title={t("upload")}
          width={150}
          height={150}
          className="object-cover w-52 h-52 rounded-full cursor-pointer bg-second border"
          onClick={focus}
        />
        <span
          role="button"
          className="absolute bottom-2 text-white flex items-center justify-center gap-1 right-1/2 transform translate-x-1/2 translate-y-1/2 backdrop-blur-md border rounded-md px-3 py-1"
          onClick={focus}
          title={t("upload")}
          aria-label={t("upload")}
        >
          <i className="bx bx-xs bx-edit"></i>
          {t("edit")}
        </span>
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
