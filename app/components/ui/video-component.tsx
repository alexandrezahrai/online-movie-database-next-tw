export default function Video({
  width,
  height,
  trailerKey,
}: {
  width: number | string;
  height: number | string;
  trailerKey: string;
}) {
  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${trailerKey}`}
      title="YouTube trailer"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
    />
  );
}
