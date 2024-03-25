export function processDetails(details: any) {
  const { credits, videos } = details;
  const { cast, crew } = credits;

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

  return {
    cast,
    sortedCast,
    directorObj,
    videosArr,
    typeTeaser,
    watchProviders,
    releaseDate,
    runtime,
  };
}
