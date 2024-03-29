import Link from "next/link";
import { API_URL } from "./constants";

export const metadata = {
    title: 'Home',
}

async function getMovies() {
    await new Promise((resolve) => { setTimeout(resolve, 1000); });
    const res = await fetch(API_URL);
    const json = await res.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div>
            {movies.map((movie) => <li key={movie.id}>
                <Link href={`/movies/${movie.id}`}>
                    {movie.title}
                </Link>
            </li>)}
        </div>
    );
}