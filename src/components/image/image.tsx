"use client";

import NextImage from "next/image";
import React, { type ComponentProps } from "react";
import { Config } from "~/config";

type Props = ComponentProps<typeof NextImage>;

export default function Image({ ...props }: Props) {
  const [src, setSrc] = React.useState(props.src);
  return (
    <NextImage
      {...props}
      src={src}
      onError={() => setSrc(Config.cdn.notFound)}
    />
  );
}
