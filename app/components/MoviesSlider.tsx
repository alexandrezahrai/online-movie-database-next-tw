import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { CardVertical } from "@/app/components/ui/cards";

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
        slidesToScroll: 5,
      }}
      className="w-full"
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col gap-[5px] mb-8">
          <h2 className="text-[28px] text-[#C3C3C3]">{title}</h2>
          {kicker && <p className="text-[#C3C3C3]">{kicker}</p>}
        </div>
        <div className="flex gap-2">
          <CarouselPrevious variant={"default"} />
          <CarouselNext variant={"default"} />
        </div>
      </div>
      <CarouselContent>
        {movies.map(
          (movie: {
            title: string;
            poster_path: string;
            id: string;
            vote_average: number;
          }) => {
            return (
              <CarouselItem key={movie.title} className="md:basis-[228px]">
                <CardVertical
                  image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  href={`/movie/${movie.id}`}
                  title={movie.title}
                  rating={movie.vote_average}
                />
              </CarouselItem>
            );
          }
        )}
      </CarouselContent>
    </Carousel>
  );
}
