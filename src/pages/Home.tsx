import { Hero, ShortAboutHome, ArtifactTopTracks, ArtifactYouTube } from "../components/";
import { SEO } from "../components/SEO";

const Home = () => {
    return (
        <div>
            <div>
                <SEO 
                    title="Artifact - Official Website"
                    description="Discover Artifact, a powerful thrash metal band. Listen to our latest music, albums, and read band's history."
                    url="https://artifact-band.vercel.app/"
                />
                <Hero />
                <ShortAboutHome />
                <ArtifactTopTracks />
                <ArtifactYouTube />
            </div>
        </div>
    )
};

export default Home;