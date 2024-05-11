import { URL } from "../app/constants";
import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    // throw new Error("something break");
    const response = await fetch(`${URL}/${id}/videos`);
    return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return (
        <div className={styles.container}>
            {videos.map((v) => (
                <iframe
                    key={v.id}
                    src={`https://youtube.com/embed/${v.key}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={v.name}
                />
            ))}
        </div>
    );
}
