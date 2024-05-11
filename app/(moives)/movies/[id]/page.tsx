import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IParams {
    params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
    const movie = await getMovie(id);
    return {
        title: movie.title,
    };
}

/* suspense 데이터 fetch 하기 위해 component await하고 h1 render
 * 페이지 별 로딩 상태 분리
 * page component에서 fetch하면 전체 페이지를 loading component로
 */
export default async function MovieDetailPage({ params: { id } }: IParams) {
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}
