import { Hero, ShortAboutHome, ArtifactTopTracks, ArtifactYouTube } from "../components/";
import { SEO } from "../components/SEO";

export const Home = () => {
    return (
        <div>
            <div>
                {/* <SEO title="Home | Artifact Band" description="Welcome to Artifact Band's official site" url="https://artifact-band-web-app.vercel.app/"/> */}
                <SEO 
                    title="Artifact - Official Website"
                    description="Discover Artifact, a powerful thrash metal band. Listen to our latest music, albums, and read band's history."
                    url="https://artifact-band-web-app.vercel.app/"
                />
                <Hero />
                <ShortAboutHome />
                <ArtifactTopTracks />
                <ArtifactYouTube />
            </div>
        </div>
    )
};