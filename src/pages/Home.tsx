import { Hero, ShortAboutHome, ArtifactTopTracks, ArtifactYouTube } from "../components/";
import { SEO } from "../components/SEO";

const Home = () => {
    return (
        <div>
            <div>
                {/* <SEO title="Home | Artifact Band" description="Welcome to Artifact Band's official site" url="https://artifact-band-web-app.vercel.app/"/> */}
                <SEO 
                    title="Artifact - Official Website"
                    description="Discover Artifact, a powerful thrash metal band. Listen to our latest music, albums, and read band's history."
                    url="https://artifact-band.vercel.app/"
                />
                <Hero />

                {/* <div className="text-center text-white py-12 px-6">
                    <h1 className="text-4xl font-bold">Artifact Metal Band</h1>
                    <p className="text-lg mt-4 max-w-2xl mx-auto">
                        Welcome to <strong>Artifact Metal Band</strong>, a legendary thrash metal act. 
                        Listen to our albums "<strong>No One</strong>" and "<strong>Dead Silence</strong>," and explore our history.
                    </p>
                </div> */}
                
                <ShortAboutHome />
                <ArtifactTopTracks />
                <ArtifactYouTube />
            </div>
        </div>
    )
};

export default Home;