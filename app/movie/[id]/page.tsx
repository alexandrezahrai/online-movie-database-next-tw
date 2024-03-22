/**
 * Page component for displaying movie details.
 * The MoviePage component receives a movie ID as a prop, fetches the details for that movie, and then renders a section with the movie details.
 */
import { getMovieDetails, getMoviesByQuery } from "@/app/lib/data";
import Video from "@/app/components/ui/video-component";
import { Suspense } from "react";
import {
  MovieDetailsHeader,
  MovieDetailsHero,
  MovieDetailsOverview,
} from "@/app/components/ui/movie-details";

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
  const trailers = videos.results.slice(0, 6); // Only show first 6 trailers
  const trailerOne = videos.results.find(
    (item: { type: string }) => item.type === "Teaser"
  ); // Find the first trailer with type "Teaser"
  const watchProviders = details["watch/providers"].results.US;
  const releaseDate = new Date(details.release_date).getFullYear().toString();
  const runtimeInMinutes = details.runtime;
  const runtimeInHours = Math.floor(runtimeInMinutes / 60);
  const runtimeInMinutesModulo = runtimeInMinutes % 60;
  const runtime = `${runtimeInHours}h ${runtimeInMinutesModulo}m`;
  // console.log(trailerOne);
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
            trailerKey={trailerOne?.key ? trailerOne.key : trailers[0].key}
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
          <h3 className="text-[28px] text-[#C3C3C3]">Videos</h3>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {trailers.map((trailer: { key: string; name: string }) => {
              return (
                <div key={trailer.name} className="flex flex-col">
                  <Suspense fallback={<div>Video is loading...</div>}>
                    <div
                      key={trailer.key}
                      className="overflow-clip w-full rounded-[10px] h-[261px]"
                    >
                      <Video
                        width="100%"
                        height="100%"
                        trailerKey={trailer.key}
                      />
                    </div>
                  </Suspense>
                  <p className="text-[16px] leading-[175%] text-[#C3C3C3] mt-2.5 line-clamp-1">
                    {trailer.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

/**
 * Page component for displaying movie details.
 * The MoviePage component receives a movie ID as a prop, fetches the details for that movie, and then renders a section with the movie details.
 */
// import { getMovieDetails, getMoviesByQuery } from "@/app/lib/data";
// import Video from "@/app/components/ui/video-component";
// import { Suspense } from "react";
// import {
//   MovieDetailsHeader,
//   MovieDetailsHero,
//   MovieDetailsOverview,
// } from "@/app/components/ui/movie-details";
//
// export async function generateStaticParams() {
//   const response = await getMoviesByQuery("popular?language=en-US");
//   return response.results.map(({ id }: { id: number }) => ({ id: String(id) }));
// }
//
// export default async function MoviePage({ params }: { params: any }) {
//   const { id } = params;
//   const detailsResponse = await getMovieDetails(id);
//   const { release_date, runtime, videos, credits } = detailsResponse;
//   const { cast, crew } = credits;
//   const sortedCastMembers = sortCastMembers(cast).slice(0, 5);
//   const director = findDirector(crew);
//   const trailers = detailsResponse.videos.results.slice(0, 6);
//   const trailer = trailers.find((item: any) => item.type === "Teaser");
//   const watchProviders = detailsResponse["watch/providers"].results.US;
//   const releaseYear = new Date(release_date).getFullYear().toString();
//   const { runtimeInHours, runtimeInMinutesModulo } =
//     convertRuntimeToHoursAndMinutes(runtime);
//
//   function sortCastMembers(cast: any[]) {
//     return cast.sort((a, b) => b.popularity - a.popularity);
//   }
//
//   function findDirector(crew: any[]) {
//     return crew.find((member) => member.job === "Director");
//   }
//
//   function convertRuntimeToHoursAndMinutes(runtime: number) {
//     const runtimeInHours = Math.floor(runtime / 60);
//     const runtimeInMinutesModulo = runtime % 60;
//
//     return { runtimeInHours, runtimeInMinutesModulo };
//   }
//
//   return (
//     <>
//       <section className="py-10 w-full">
//         <div className="container px-[26px] mx-auto">
//           <MovieDetailsHeader
//             title={detailsResponse.title}
//             releaseDate={release_date}
//             runtime={runtime}
//           />
//
//           <MovieDetailsHero
//             poster_path={detailsResponse.poster_path}
//             trailerKey={trailer?.key ? trailer.key : trailers[0].key}
//           />
//
//           <MovieDetailsOverview
//             {...detailsResponse}
//             director={director.name}
//             stars={sortedCastMembers}
//           />
//         </div>
//       </section>
//
//       <div className="container px-[26px] mx-auto">
//         <hr className="border-[rgba(163,163,163,0.15)] w-full h-0" />
//       </div>
//
//       <section className="py-10 w-full">
//         <div className="container px-[26px] mx-auto">
//           <h3 className="text-[28px] text-[#C3C3C3]">Videos</h3>
//           <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
//             {trailers.map((trailer: { key: string; name: string }) => {
//               return (
//                 <div key={trailer.name} className="flex flex-col">
//                   <Suspense fallback={<div>Video is loading...</div>}>
//                     <div
//                       key={trailer.key}
//                       className="overflow-clip w-full rounded-[10px] h-[261px]"
//                     >
//                       <Video
//                         width="100%"
//                         height="100%"
//                         trailerKey={trailer.key}
//                       />
//                     </div>
//                   </Suspense>
//                   <p className="text-[16px] leading-[175%] text-[#C3C3C3] mt-2.5 line-clamp-1">
//                     {trailer.name}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
