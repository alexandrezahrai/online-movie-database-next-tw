import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";

export default function HomepageHero({
  title,
  kicker,
  movies,
}: {
  title?: string;
  kicker?: string;
  movies: any[];
}) {
  return (
    <Carousel
      opts={{
        align: "start",
        slidesToScroll: 1,
      }}
      className="w-full"
    >
      <div className="flex items-end justify-between w-full mb-8">
        <div className="flex flex-col gap-[5px]">
          <h1 className="text-gray-200 text-[36px]">{title}</h1>
        </div>
        <div className="flex gap-2">
          <CarouselPrevious variant={"default"} />
          <CarouselNext variant={"default"} />
        </div>
      </div>
      <CarouselContent className="-ml-2">
        {movies.map(
          (movie: {
            title: string;
            poster_path: string;
            id: string;
            vote_average: number;
          }) => {
            return (
              <CarouselItem key={movie.title} className="sm:basis-full pl-2">
                <div className="flex flex-col gap-[5px]">
                  <h1 className="text-gray-200 text-[36px]">{movie.title}</h1>
                  <h2 className="text-[rgba(163,163,163,0.6)] text-[28px] mt-[13px]">
                    Lorem ipsum dolor sit amet
                  </h2>
                </div>
              </CarouselItem>
            );
          }
        )}
      </CarouselContent>
    </Carousel>
  );
}
