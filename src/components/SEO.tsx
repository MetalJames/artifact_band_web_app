import { Helmet } from "react-helmet-async";

type SEOProps = {
    title: string;
    description?: string;
    url?: string;
    image?: string;
};

export const SEO = ({
        title = "ARTIFACT | Thrash Metal Band - Official Website",
        description = "Discover Artifact, a powerful thrash metal band. Listen to our latest music, albums, and read band's history.",
        url = "https://artifact-band.vercel.app/",
        image= "https://artifact-band.vercel.app/dead_silence_full_hd_remastered.jpg",
    }: SEOProps) => {
    return (
        <Helmet>
            <title>{title}</title>
            
            <meta name="description" content={description} />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:alt" content="Artifact Band Dead Silence Remastered" />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Artifact Band" />
            <meta name="keywords" content="Artifact, Artifact Band, Artifact Metal Band, Artifact Metal Music, Thrash Metal" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:type" content="image/png" />

            <link rel="canonical" href="https://artifact-band.vercel.app/" />
        </Helmet>
    );
};