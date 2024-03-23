export default function Video({
  width,
  height,
  videoKey,
}: {
  width: number | string;
  height: number | string;
  videoKey: string;
}) {
  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${videoKey}`}
      title="YouTube trailer"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
      className="object-cover w-full h-full"
    />
  );
}
