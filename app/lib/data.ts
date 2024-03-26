type Movie = {
  title: string;
  order: number;
  details?: object;
  year?: number;
  age?: string;
  runtime?: string;
  rating: number;
  image: string;
};

export const movies: Movie[] = [
  {
    title: "Moonlight",
    order: 1,
    details: {
      year: 2024,
      age: "PG-13",
      runtime: "2h 46m",
    },
    rating: 8.9,
    image:
      "https://s.yimg.com/ny/api/res/1.2/0ZXuB.N3qPpSGyFcuEXdcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEwMzU7aD0xNTAw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
  },
  {
    title: "Inception",
    order: 2,
    rating: 9.5,
    image:
      "https://www.movieposters.com/cdn/shop/products/7dfddd911b8040729896c5be83f8e139_6e2f4149-8cb4-414c-a33b-9e0065c55af3_480x.progressive.jpg?v=1573585216",
  },
  {
    title: "Spiderman: Across the Spider-Verse",
    order: 3,
    rating: 6.7,
    image: "https://i.ebayimg.com/images/g/RPgAAOSwro9kX1lG/s-l1600.jpg",
  },
  {
    title: "The Last of Us",
    order: 4,
    rating: 8.2,
    image: "https://i.ebayimg.com/images/g/ujkAAOSwYEhjyt9a/s-l1200.webp",
  },
  {
    title: "Dune: Part Two",
    order: 5,
    rating: 9.9,
    image:
      "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  },
  {
    title: "Poor Things",
    order: 6,
    rating: 5.6,
    image:
      "https://m.media-amazon.com/images/I/71j0SXKUc-L._AC_UF894,1000_QL80_.jpg",
  },
  {
    title: "Interstellar",
    order: 7,
    rating: 9.4,
    image:
      "https://www.mauvais-genres.com/19056-thickbox_default/interstellar-french-movie-poster-15x21-2014-christopher-nolan-matthew-mcconaughey.jpg",
  },
  {
    title: "Disturbia",
    order: 8,
    rating: 7.1,
    image:
      "https://m.media-amazon.com/images/I/41hr93nbaAL._AC_UF894,1000_QL80_.jpg",
  },
];

const baseUrl = "https://api.themoviedb.org/3/";
const authToken =
  process.env.ACCESS_TOKEN ?? "".replace(/\\/g, "").replace(/"/g, "");

export async function fetchFromApi(endpoint: string) {
  const url = `${baseUrl}${endpoint}`;

  const res = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data...");
  }

  return res.json();
}

export async function getMoviesByQuery(query: string) {
  return fetchFromApi(`movie/${query}`);
}

export async function getMovieDetails(movieId: string) {
  return fetchFromApi(
    `movie/${movieId}?language=en-US&append_to_response=videos,credits,watch/providers`
  );
}

export async function getPersonDetails(personId: string) {
  return fetchFromApi(
    `person/${personId}?append_to_response=movie_credits&language=en-US`
  );
}

export async function getMoviesByGenre(genreId: string) {
  return fetchFromApi(
    `discover/movie?include_adult=false&language=en-US&page=3&sort_by=popularity.desc&with_genres=${genreId}`
  );
}

export async function getAllGenres() {
  return fetchFromApi("genre/movie/list?language=en");
}
