import { URL } from "../app/(home)/page";

async function getVideos(id: string) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    throw new Error("something break");
    // const response = await fetch(`${URL}/${id}/videos`);
    // return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>;
}