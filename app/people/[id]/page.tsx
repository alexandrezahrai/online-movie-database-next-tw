/**
 * Page component for displaying director details.
 */
import { getPersonDetails } from "@/app/lib/data";

// export async function generateStaticParams() {
//   const response = await getMoviesByQuery("popular?language=en-US");
//   return response.results.map(({ id }: { id: number }) => ({ id: String(id) }));
// }

export default async function DirectorPage({ params }: { params: any }) {
  const { id } = params;

  const details = await getPersonDetails(id);

  // console.log(details);

  return (
    <>
      <section className="py-10 w-full">
        <div className="container px-[26px] mx-auto">
          <h2 className="text-[36px] font-medium text-[#C3C3C3]">
            {details.name}
          </h2>
        </div>
      </section>
    </>
  );
}
