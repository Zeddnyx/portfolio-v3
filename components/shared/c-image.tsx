import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";

declare interface ICImage {
  src: string | StaticImport;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: {
    [key: string]: string;
  };
  fill?: boolean;
  rounded?: string;
  additional?: string;
}

const CImage = ({
  src,
  alt,
  width,
  height,
  className,
  style,
  fill,
  rounded,
}: ICImage) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const props = fill ? { fill, sizes: "100%" } : { sizes: "100vw" };

  // Don't set `source` to `null`, instead check if `src` is valid
  const source = !isError && src != null ? src : undefined;

  return (
    <div
      className={`${rounded ? rounded : "rounded-none"} ${isLoading ? "wave bg-[#cbd5e0]" : "bg-transparent"
        } duration-700 ease-in-out relative size-full overflow-hidden`}
    >
      {/* Only render the Image component if `source` is valid */}
      {source && (
        <Image
          className={`object-cover object-center c_transitions ${className} ${isLoading ? "blur-xl" : "blur-0"
            }`}
          src={source}
          alt={alt}
          width={width}
          height={height}
          style={style}
          placeholder="empty"
          onError={() => setIsError(true)}
          onLoad={() => setIsLoading(false)}
          priority
          {...props}
        />
      )}
    </div>
  );
};

export default CImage;
