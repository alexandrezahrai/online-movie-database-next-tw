import Image from "next/image";
import Video from "./video-component";
import { Suspense } from "react";
import { Button } from "./button";

export function MovieDetailsHeader({
  title,
  releaseDate,
  runtime,
}: {
  title: string;
  releaseDate: string;
  runtime: string;
}) {
  return (
    <div className="flex flex-col gap-[5px]">
      <h2 className="text-[36px] font-medium text-[#C3C3C3]">{title}</h2>
      <div className="text-[#797979] text-[16px] flex items-center justify-start gap-2">
        <span>{releaseDate}</span>|<span>{runtime}</span>
      </div>
    </div>
  );
}

export function MovieDetailsHero({
  poster_path,
  videoKey,
}: {
  poster_path: string;
  videoKey: string;
}) {
  return (
    <div className="mt-8 h-full w-full flex flex-col gap-6 overflow-clip md:flex-row md:max-h-[491px] ">
      <div className="w-full md:max-w-[336px]">
        <div className="overflow-clip w-full h-full rounded-[10px]">
          <Image
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt="poster"
            width={336}
            height={491}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <div className="w-full">
        <Suspense fallback={<div>Video is loading...</div>}>
          <div className="overflow-clip w-full h-full rounded-[10px]">
            <Video width="100%" height="100%" videoKey={videoKey} />
          </div>
        </Suspense>
      </div>
    </div>
  );
}

function Template({
  alignContent,
  label,
  children,
}: {
  alignContent?: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col md:flex-row justify-start w-full ${
        alignContent ? alignContent : "items-start md:items-center"
      }`}
    >
      <h3 className="text-[18px] font-semibold text-[#797979] max-w-[150px] w-full">
        {label}
      </h3>
      {children}
    </div>
  );
}

export function MovieDetailsOverview({
  genres: movieGenres,
  overview: summary,
  production_countries: countries,
  director,
  stars,
}: {
  genres: Array<{ name: string }>;
  overview: string;
  production_countries: Array<{ name: string }>;
  director: string;
  stars: Array<{ name: string }>;
}) {
  return (
    <div className="flex flex-col items-start gap-6 md:gap-4 mt-8">
      <Template label={`${movieGenres.length > 1 ? "Genres" : "Genre"}`}>
        <ul className="flex flex-col md:flex-row gap-3">
          {movieGenres.map(({ name }) => (
            <li key={name}>
              <Button variant={"glass"} className="">
                {name}
              </Button>
            </li>
          ))}
        </ul>
      </Template>
      <Template label="Summary" alignContent="items-start">
        <p className="text-[#C3C3C3] text-[16px] leading-[175%]">{summary}</p>
      </Template>
      <Template label="Countries of origin" alignContent="items-start">
        <ul className="flex flex-wrap">
          {countries.map(({ name }, index) => (
            <li
              key={name}
              className="text-[#C3C3C3] text-[16px] leading-[175%] inline-flex"
            >
              <p className="text-[#C3C3C3] text-[16px] leading-[175%]">
                {name}
              </p>
              {index !== countries.length - 1 && (
                <span className="mx-2.5">&#183;</span>
              )}
            </li>
          ))}
        </ul>
      </Template>
      <Template label="Director">
        <Button
          variant={"link"}
          className="text-[#C3C3C3] text-[16px] leading-[175%]"
        >
          {director}
        </Button>
      </Template>
      <Template label="Stars">
        <ul>
          {stars.map((star, index) => (
            <p
              key={star.name}
              className="text-[#C3C3C3] text-[16px] leading-[175%] inline-flex"
            >
              {star.name}
              {index !== stars.length - 1 && (
                <span className="mx-2.5">&#183;</span>
              )}
            </p>
          ))}
        </ul>
      </Template>
    </div>
  );
}
