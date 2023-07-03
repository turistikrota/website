import { PropsWithClassName } from "~/types/base";

type Props = {
  src: string;
  imgClassName?: string;
};

const PerfectImage: React.FC<
  React.PropsWithChildren<PropsWithClassName<Props>>
> = ({ className, src, imgClassName }) => {
  return (
    <picture
      className={`w-full h-full object-cover ${className ? className : ""}`}
    >
      <source srcSet={src} type="image/webp" />
      <img
        src={src}
        alt=""
        className={`w-full h-full object-cover ${
          imgClassName ? imgClassName : ""
        }`}
      />
    </picture>
  );
};

export default PerfectImage;
