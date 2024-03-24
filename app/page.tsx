import MoviesSlider from "./components/MoviesSlider";
import HomepageHero from "./components/ui/HomepageHero";
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
      {/* Homepage Hero */}
      <section className="py-10 w-full">
        <div className="container px-[26px] mx-auto">
          <HomepageHero movies={popularMoviesArr} />
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
