import { Hero, ShortAboutHome, ArtifactTopTracks, ArtifactYouTube } from "../components/";
import { SEO } from "../components/SEO";

const Home = () => {
    return (
        <div>
            <div>
                <SEO 
                    title="ARTIFACT | Thrash Metal Band - Official Website"
                    description="Official website of Artifact Thrash Metal Band. Listen to our latest thrash metal albums, singles, and read the band's history."
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