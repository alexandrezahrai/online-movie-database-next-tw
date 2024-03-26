import MoviesSlider from "./components/MoviesSlider";
import HomepageHero from "./components/HomepageHero";
import { getMoviesByQuery, getMoviesByGenre, getAllGenres } from "./lib/data";

interface MovieRowSectionProps {
  title: string;
  kicker?: string;
  moviesArr: any[];
}

function MovieRowSection({ title, kicker, moviesArr }: MovieRowSectionProps) {
  return (
    <section className="py-10 w-full">
      <div className="container px-[26px] mx-auto">
        <MoviesSlider title={title} kicker={kicker} movies={moviesArr} />
      </div>
    </section>
  );
}

export default async function Home() {
  const genresData = await getAllGenres();
  const genresArr = genresData.genres;

  async function getMovies(queryType: string, page: number) {
    const query = `${queryType}?language=en-US&page=${page}`;
    const moviesData = await getMoviesByQuery(query);
    return moviesData.results;
  }

  const homepageHeroMoviesArr = await getMovies("now_playing", 2);
  const popularMoviesArr = await getMovies("popular", 1);
  const topRatedMoviesArr = await getMovies("top_rated", 1);
  const nowPlayingMoviesArr = await getMovies("now_playing", 3);

  async function getMoviesByGenreId(genreId: string) {
    const findGenre = (name: string) => {
      return genresArr.find((genre: any) => genre.name === name)?.id;
    };
    const comedyId = findGenre(genreId);
    const moviesData = await getMoviesByGenre(comedyId);
    return moviesData.results;
  }

  const comedyMoviesArr = await getMoviesByGenreId("Comedy");
  const actionMoviesArr = await getMoviesByGenreId("Action");

  const movieRowSections = [
    {
      title: "Popular",
      moviesArr: popularMoviesArr,
    },
    {
      title: "Top Rated",
      moviesArr: topRatedMoviesArr,
    },
    {
      title: "Now Playing",
      moviesArr: nowPlayingMoviesArr,
    },
    {
      title: "Comedy",
      kicker: "Laugh out loud!",
      moviesArr: comedyMoviesArr,
    },
    {
      title: "Action",
      kicker: "Full of adventure!",
      moviesArr: actionMoviesArr,
    },
  ];

  return (
    <>
      {/* Hero Section */}
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
            <HomepageHero movies={homepageHeroMoviesArr} />
          </div>
        </div>
      </section>

      {/* Movie Sliders */}
      {movieRowSections.map((section) => (
        <MovieRowSection
          key={section.title}
          title={section.title}
          kicker={section.kicker}
          moviesArr={section.moviesArr}
        />
      ))}
    </>
  );
}
