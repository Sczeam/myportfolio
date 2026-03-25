import Image from "next/image";

import { Container } from "@/components/ui/container";

type VisualStoryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type MoethuzarVisualStoryProps = {
  label: string;
  title: string;
  images: VisualStoryImage[];
};

function MountedImage({
  image,
  className,
  sizes,
  priority = false,
}: {
  image: VisualStoryImage;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <figure className={className} data-moethuzar-visual-story-image>
      <div className="relative overflow-hidden rounded-[10px] border border-[#20242B] bg-[#14161A] shadow-[0_24px_60px_rgba(0,0,0,0.14)]">
        <Image
          src={image.src}
          alt={image.alt}
          width={1600}
          height={1200}
          sizes={sizes}
          priority={priority}
          className="h-auto w-full scale-[1.015] object-cover object-center [filter:brightness(0.95)_saturate(0.94)]"
        />
      </div>
      {image.caption ? (
        <figcaption className="mt-4 text-[0.75rem] leading-[1.35] tracking-[0.02em] text-[#74706A]">
          {image.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function MoethuzarVisualStory({
  label,
  title,
  images,
}: MoethuzarVisualStoryProps) {
  const [primary, secondaryLeft, secondaryRight] = images;

  return (
    <section
      data-moethuzar-visual-story
      aria-labelledby="moethuzar-visual-story-title"
      className="relative bg-[#0E0F11] pb-28 pt-24 sm:pb-32 sm:pt-28 lg:pb-[14rem] lg:pt-[12rem]"
    >
      <Container width="wide" className="relative lg:px-[8.5rem]">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-8">
          <div
            className="lg:col-start-1 lg:col-end-6"
            data-moethuzar-visual-story-phase="phase1"
          >
            <p className="text-[0.75rem] uppercase leading-[1.2] tracking-[0.1em] text-[#74706A]">
              {label}
            </p>
            <h2
              id="moethuzar-visual-story-title"
              className="mt-5 font-display text-[clamp(2.5rem,4.2vw,3rem)] italic leading-[0.95] tracking-[-0.045em] text-[#F3F0EA]"
            >
              {title}
            </h2>
          </div>

          <div className="lg:col-span-12 lg:mt-6">
            <MountedImage
              image={primary}
              priority
              sizes="(max-width: 1024px) 100vw, 78rem"
              className="mx-auto max-w-[72rem]"
            />
          </div>

          <div className="grid grid-cols-1 gap-y-12 pt-6 sm:gap-y-14 lg:col-span-12 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0 lg:pt-[6.5rem]">
            <MountedImage
              image={secondaryLeft}
              sizes="(max-width: 1024px) 100vw, 34rem"
              className="lg:col-start-2 lg:col-end-6 lg:self-start"
            />
            <MountedImage
              image={secondaryRight}
              sizes="(max-width: 1024px) 100vw, 34rem"
              className="lg:col-start-7 lg:col-end-11 lg:mt-[2rem]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
