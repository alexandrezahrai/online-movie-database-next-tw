import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { CardVertical } from "@/app/components/ui/cards";

interface Movie {
  title: string;
  poster_path: string;
  id: string;
  vote_average: number;
}

export default function MoviesSlider({
  title,
  kicker,
  movies,
}: {
  title: string;
  kicker?: string;
  movies: any[];
}) {
  return (
    <Carousel
      opts={{
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
          "(min-width: 640px)": { slidesToScroll: 2 },
          "(min-width: 768px)": { slidesToScroll: 3 },
          "(min-width: 1024px)": { slidesToScroll: 4 },
          "(min-width: 1280px)": { slidesToScroll: 5 },
        },
      }}
      className="w-full"
    >
      <div className="flex items-end justify-between w-full mb-8">
        <div className="flex flex-col gap-[5px]">
          <h2 className="text-[28px] text-[#C3C3C3]">{title}</h2>
          {kicker && <p className="text-[#797979]">{kicker}</p>}
        </div>
        <div className="flex gap-2">
          <CarouselPrevious variant={"default"} />
          <CarouselNext variant={"default"} />
        </div>
      </div>
      <CarouselContent className="-ml-4 md:ml-0">
        {movies.map((movie: Movie) => {
          return (
            <CarouselItem
              key={movie.title}
              className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 pl-4 md:pl-0"
            >
              <CardVertical
                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                href={`/movie/${movie.id}`}
                title={movie.title}
                rating={movie.vote_average}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
