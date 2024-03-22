import MoviesSlider from "./components/MoviesSlider";
import { CardHorizontal } from "./components/ui/cards";
import { movies } from "./lib/data";
import { getMoviesByQuery } from "./lib/data";

export default async function Home() {
  const popularQuery = "popular?language=en-US&page=1";
  const popularMoviesData = await getMoviesByQuery(popularQuery);
  const popularMoviesArr = popularMoviesData.results;

  const topRatedQuery = "top_rated?language=en-US&page=1";
  const topRatedMoviesData = await getMoviesByQuery(topRatedQuery);
  const topRatedMoviesArr = topRatedMoviesData.results;
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

      {/* Vertical Cards */}
      <section className="py-10 w-full">
        <div className="container px-[26px] mx-auto">
          <MoviesSlider
            title="Popular"
            kicker="Lorem ipsum dolor sit amet"
            movies={popularMoviesArr}
          />
        </div>
      </section>

      <section className="py-10 w-full">
        <div className="container px-[26px] mx-auto">
          <MoviesSlider
            title="Top Rated"
            kicker="Lorem ipsum dolor sit amet"
            movies={topRatedMoviesArr}
          />
        </div>
      </section>
    </>
  );
}
