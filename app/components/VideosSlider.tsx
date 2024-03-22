import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { Suspense } from "react";
import Video from "./ui/video-component";

export default function MoviesSlider({
  title,
  kicker,
  videos,
}: {
  title: string;
  kicker?: string;
  videos: any[];
}) {
  return (
    <Carousel
      opts={{
        align: "start",
        slidesToScroll: 2,
      }}
      className="w-full"
    >
      <div className="flex items-end justify-between w-full mb-8">
        <div className="flex flex-col gap-[5px]">
          <h2 className="text-[28px] text-[#C3C3C3]">{title}</h2>
          {kicker && <p className="text-[#C3C3C3]">{kicker}</p>}
        </div>
        <div className="flex gap-2">
          <CarouselPrevious variant={"default"} />
          <CarouselNext variant={"default"} />
        </div>
      </div>
      <CarouselContent>
        {videos.map((video: { key: string; name: string }) => {
          return (
            <CarouselItem key={video.name} className="md:basis-[500px]">
              <Suspense fallback={<div>Video is loading...</div>}>
                <div
                  key={video.key}
                  className="overflow-clip w-full rounded-[10px] h-[301px]"
                >
                  <Video width="100%" height="100%" trailerKey={video.key} />
                </div>
              </Suspense>
              <p className="text-[16px] leading-[175%] text-[#C3C3C3] mt-2.5 line-clamp-1">
                {video.name}
              </p>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
