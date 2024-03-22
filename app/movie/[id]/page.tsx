/**
 * Page component for displaying movie details.
 * The MoviePage component receives a movie ID as a prop, fetches the details for that movie, and then renders a section with the movie details.
 */
import { getMovieDetails, getMoviesByQuery } from "@/app/lib/data";
import {
  MovieDetailsHeader,
  MovieDetailsHero,
  MovieDetailsOverview,
} from "@/app/components/ui/movie-details";
import VideosSlider from "@/app/components/VideosSlider";

export async function generateStaticParams() {
  const response = await getMoviesByQuery("popular?language=en-US");
  return response.results.map(({ id }: { id: number }) => ({ id: String(id) }));
}

export default async function MoviePage({ params }: { params: any }) {
  const { id } = params;
  const details = await getMovieDetails(id);
  const { credits, videos } = details;
  const cast = credits.cast;
  const crew = credits.crew;
  const sortedCast = cast
    .sort((a: any, b: any) => b.popularity - a.popularity)
    .slice(0, 5);
  const directorObj = crew.find(
    (member: { job: string }) => member.job === "Director"
  );
  const videosArr = videos.results.slice(0, 9); // Only show first 9 videos
  const typeTeaser = videos.results.find(
    (item: { type: string }) => item.type === "Teaser"
  ); // Find the first video with type "Teaser"
  const watchProviders = details["watch/providers"].results.US;
  const releaseDate = new Date(details.release_date).getFullYear().toString();
  const runtimeInMinutes = details.runtime;
  const runtimeInHours = Math.floor(runtimeInMinutes / 60);
  const runtimeInMinutesModulo = runtimeInMinutes % 60;
  const runtime = `${runtimeInHours}h ${runtimeInMinutesModulo}m`;
  // console.log(typeTeaser);
  return (
    <>
      <section className="py-10 w-full">
        <div className="container px-[26px] mx-auto">
          <MovieDetailsHeader
            title={details.title}
            releaseDate={releaseDate}
            runtime={runtime}
          />

          <MovieDetailsHero
            poster_path={details.poster_path}
            trailerKey={typeTeaser?.key ? typeTeaser.key : videosArr[0].key}
          />

          <MovieDetailsOverview
            {...details}
            director={directorObj.name}
            stars={sortedCast}
          />
        </div>
      </section>

      <div className="container px-[26px] mx-auto">
        <hr className="border-[rgba(163,163,163,0.15)] w-full h-0" />
      </div>

      <section className="py-10 w-full">
        <div className="container px-[26px] mx-auto">
          <VideosSlider title="Videos" videos={videosArr} />
        </div>
      </section>
    </>
  );
}
