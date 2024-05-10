import Link from "next/link";

export const metadata = {
    title: "Home",
};

export const URL = "http://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = fetch(URL);
    const json = (await response).json();
    return json;
}

export default async function Page() {
    const movies = await getMovies();
    return (
        <div>
            {movies.map((movie) => (
                <li>
                    <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </div>
    );
}
