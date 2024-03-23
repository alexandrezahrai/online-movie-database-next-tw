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
import TabsComponent from "@/app/components/TabsComponent";
import Image from "next/image";

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
  const watchProviders =
    details["watch/providers"].results.US ||
    details["watch/providers"].results.CA;
  const releaseDate = new Date(details.release_date).getFullYear().toString();
  const runtimeInMinutes = details.runtime;
  const runtimeInHours = Math.floor(runtimeInMinutes / 60);
  const runtimeInMinutesModulo = runtimeInMinutes % 60;
  const runtime = `${runtimeInHours}h ${runtimeInMinutesModulo}m`;
  console.log(watchProviders);
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
            videoKey={typeTeaser?.key ? typeTeaser.key : videosArr[0].key}
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

      <section className="py-10 w-full">
        <div className="container px-[26px] mx-auto">
          <div className="flex flex-col gap-[5px] mb-8">
            <h2 className="text-[28px] text-[#C3C3C3]">Where to watch</h2>
          </div>
          <TabsComponent />
          {/* <div className="grid grid-cols-3 gap-4">
              {watchProviders.flatrate
                ? watchProviders.flatrate.map((item: any) => (
                    <div
                      key={item.provider_id}
                      className="flex items-center gap-2"
                    >
                      <Image
                        src={`https://image.tmdb.org/t/p/w500/${item.logo_path}`}
                        alt={item.display_name}
                        className="w-10 h-10 rounded-full"
                        width={66}
                        height={66}
                      />
                      <p className="text-[14px] text-[#C3C3C3]">
                        {item.display_name}
                      </p>
                    </div>
                  ))
                : null}
            </div>
          </TabsComponent> */}
        </div>
      </section>
    </>
  );
}
