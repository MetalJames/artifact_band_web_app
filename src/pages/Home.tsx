import { Hero, ShortAboutHome, ArtifactTopTracks, ArtifactYouTube } from "../components/";

export const Home = () => {
    return (
        <div>
            <div>
                <Hero />
                <ShortAboutHome />
                <ArtifactTopTracks />
                <ArtifactYouTube />
            </div>
        </div>
    )
};