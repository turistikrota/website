"use client";
import { useListQuery } from "./account.api";

// avatar files like avatar_1.png, avatar_2.png, avatar_3.png
const avatarFiles = Array.from({ length: 24 }, (_, i) => `avatar_${i + 1}.png`);

export default function AccountSelection() {
  const { isLoading, data, error } = useListQuery({});
  return (
    <div className="grid grid-cols-4 gap-4">
      {avatarFiles.map((avatar, index) => (
        <div key={index} className="">
          <img
            src={`/avatars/${avatar}`}
            alt="avatar"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      ))}
    </div>
  );
}
