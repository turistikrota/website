"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  avatar: string;
  onChange: (file: File) => void;
  minSize?: number;
  maxSize?: number;
  accept?: string;
};

export default function AvatarUpload({
  avatar,
  onChange,
  minSize = 0,
  maxSize = 1,
  accept = "image/png",
}: Props) {
  const [src, setSrc] = useState(avatar);
  const [error, setError] = useState<string | null>(null);

  const validate = (file: File) => {
    if (file.size < minSize * 1024) {
      setError(`Dosya boyutu en az ${minSize} KB olmalıdır.`);
      return false;
    }

    if (file.size > maxSize * 1024) {
      setError(`Dosya boyutu en fazla ${maxSize} KB olmalıdır.`);
      return false;
    }

    if (!file.type.startsWith(accept)) {
      setError(`Dosya türü ${accept} olmalıdır.`);
      return false;
    }

    setError(null);
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && validate(file)) {
      setSrc(URL.createObjectURL(file));
      onChange(file);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <Image
          src={src}
          alt="Avatar"
          width={150}
          height={150}
          className="object-cover w-52 h-52 rounded-full cursor-pointer bg-second border"
          onClick={() => document.getElementById("avatar")?.click()}
        />
        <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-10 h-10 bg-white rounded-full">
          <i className="bx bx-camera text-2xl text-gray-500"></i>
        </span>
      </div>
      <input
        id="avatar"
        type="file"
        className="hidden"
        accept={accept}
        onChange={handleChange}
      />
      {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
    </div>
  );
}
