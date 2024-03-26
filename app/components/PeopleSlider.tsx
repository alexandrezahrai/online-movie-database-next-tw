import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

interface PeopleSliderProps {
  title: string;
  kicker?: string;
  people: any[];
}

interface Person {
  key: string;
  name: string;
  profile_path: string;
  character: string;
}

export default function PeopleSlider({
  title,
  kicker,
  people,
}: PeopleSliderProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        slidesToScroll: 6,
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
        {people.map((person: Person) => {
          const placeholderImage = "https://placehold.co/200x200";
          return (
            <CarouselItem key={person.name} className="md:basis-[200px]">
              <Suspense fallback={<div>Image is loading...</div>}>
                <Link href="#">
                  <div className="overflow-clip w-full rounded-[10px] h-[200px]">
                    <Image
                      src={
                        person.profile_path
                          ? `https://image.tmdb.org/t/p/original/${person.profile_path}`
                          : placeholderImage
                      }
                      alt={person.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <p className="text-[16px] leading-[175%] text-[#C3C3C3] mt-2.5 line-clamp-1">
                    {person.name}
                  </p>
                  <span className="text-[14px] text-[#797979]">
                    {person.character}
                  </span>
                </Link>
              </Suspense>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
