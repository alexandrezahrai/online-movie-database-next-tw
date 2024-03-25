"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/app/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

interface HomepageHeroProps {
  movies: any[];
}

interface Movie {
  title: string;
  poster_path: string;
  backdrop_path: string;
  id: string;
  vote_average: number;
  overview: string;
}

export default function HomepageHero({ movies }: HomepageHeroProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      console.log("current");
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <div className="absolute inset-0 -z-10 opacity-100 blur-2xl filter">
        <div className="w-full h-full overflow-clip">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movies[current].backdrop_path}`}
            alt="poster"
            fill
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <Carousel
        setApi={setApi}
        plugins={[Autoplay({ delay: 10000 })]}
        opts={{
          align: "start",
          slidesToScroll: 1,
        }}
        className="w-full rounded-[10px] overflow-clip"
      >
        <div className="absolute flex gap-2 z-20 right-[23px] bottom-[23px]">
          <CarouselPrevious variant={"default"} />
          <CarouselNext variant={"default"} />
        </div>
        <CarouselContent className="ml-0">
          {movies.map((movie: Movie, index) => {
            return (
              <CarouselItem
                key={index}
                className="relative rounded-[10px] overflow-clip h-full max-h-[675px] sm:basis-full pl-0"
              >
                <Link href={`/movie/${movie.id}`}>
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(11,11,11,1)]"></div>
                  <div className="w-full h-full overflow-clip">
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                      alt="poster"
                      width={1425}
                      height={775}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="absolute bottom-[23px] left-[23px] flex flex-col gap-4 max-w-[850px]">
                    <h3 className="text-4xl text-gray-100">{movie.title}</h3>
                    <p className="text-gray-400 text-balance">
                      {movie.overview}
                    </p>
                  </div>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </>
  );
}
