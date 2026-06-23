import Image from "next/image";
import { existingPublicImage } from "@/components/case-study/publicImages";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";

type ImageFrameProps = {
  src?: string;
  alt: string;
  caption?: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  parallax?: boolean;
  quality?: number;
  unoptimized?: boolean;
};

export function ImageFrame({
  src,
  alt,
  caption,
  className = "relative aspect-[16/10] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm",
  imageClassName = "object-cover",
  sizes = "100vw",
  parallax = false,
  quality = 95,
  unoptimized = true,
}: ImageFrameProps) {
  const image = existingPublicImage(src);

  if (!image) {
    return null;
  }

  return (
    <figure>
      <div className={className}>
        {parallax ? (
          <ParallaxLayer
            className="absolute -inset-y-4 inset-x-0"
            speed={0.025}
            maxOffset={14}
          >
            <Image
              src={image}
              alt={alt}
              fill
              sizes={sizes}
              quality={quality}
              unoptimized={unoptimized}
              className={imageClassName}
            />
          </ParallaxLayer>
        ) : (
          <Image
            src={image}
            alt={alt}
            fill
            sizes={sizes}
            quality={quality}
            unoptimized={unoptimized}
            className={imageClassName}
          />
        )}
      </div>
      {caption ? (
        <figcaption className="mt-3 text-sm leading-6 text-slate-500">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
