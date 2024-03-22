import { CardHorizontal, CardVertical } from "./components/ui/cards";
import { movies } from "./lib/data";
import { getMoviesByQuery } from "./lib/data";
import { Fragment } from "react";

export default async function Home() {
  const popularQuery = "popular?language=en-US&page=1";
  const popularMoviesData = await getMoviesByQuery(popularQuery);
  const popularMoviesArr = popularMoviesData.results;
  // console.log(popularMoviesArr);
  return (
    <>
      {/* Horizontal Cards */}
      <section className="py-20 w-full">
        <div className="container px-[26px] mx-auto w-full">
          <h2 className="text-[28px] text-left text-[#C3C3C3] mb-8">
            Horizontal Card
          </h2>
          <CardHorizontal
            title={movies[0].title}
            rating={movies[0].rating}
            rank={movies[0].order}
            year={(movies[0].details as { year: number }).year}
            age={(movies[0].details as { age: string }).age}
            runtime={(movies[0].details as { runtime: string }).runtime}
            image={movies[0].image}
          />
        </div>
      </section>

      {/* Vertical Cards Grid */}
      <section className="py-20 w-full">
        <div className="container px-[26px] mx-auto">
          <div className="flex flex-col gap-[5px]">
            <h2 className="text-[28px] text-[#C3C3C3]">Popular</h2>
            <p className="text-[#797979] text-[16px]">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-start gap-4 mt-8">
            {popularMoviesArr.map(
              (movie: {
                title: string;
                poster_path: string;
                id: string;
                vote_average: number;
              }) => {
                return (
                  <Fragment key={movie.title}>
                    <CardVertical
                      image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      href={`/movie/${movie.id}`}
                      title={movie.title}
                      rating={movie.vote_average}
                    />
                  </Fragment>
                );
              }
            )}
          </div>
        </div>
      </section>
    </>
  );
}
