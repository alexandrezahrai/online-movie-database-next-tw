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

  console.log(popularMoviesArr);

  return (
    <>
      {/* Homepage Hero */}
      <section className="py-10 w-full">
        <div className="container px-[26px] mx-auto">
          <h1 className="max-w-5xl mx-auto text-balance text-5xl font-medium md:text-7xl text-gray-100 text-center animate-fade-in-up [animation-fill-mode:both]">
            Welcome to Cinemate: Your Gateway to Movie Magic!
          </h1>
          <p className="mx-auto mt-8 max-w-md text-balance text-slate-300 text-center animate-fade-in-up [animation-fill-mode:both] [animation-delay:500ms]">
            Discover films, explore directors' masterpieces, and watch trailers
            with ease. Welcome to your cinematic journey!
          </p>
          <div className="mt-16 relative animate-fade-in-up [animation-fill-mode:both] [animation-delay:800ms]">
            <div className="absolute inset-0 -z-10 bg-blue-500/30 opacity-100 blur-2xl filter"></div>

            <HomepageHero movies={popularMoviesArr} />
          </div>
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
