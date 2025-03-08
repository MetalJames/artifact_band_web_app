import { Helmet } from "react-helmet-async";

type SEOProps = {
    title: string;
    description?: string;
    url?: string;
    image?: string;
};

export const SEO = ({
        title,
        description = "Discover Artifact, a powerful thrash metal band. Listen to our latest music, albums, and read band's history.",
        url = "https://artifact-band.vercel.app/",
        // image = "https://artifact-band.vercel.app/assets/Artifact_Logo_2-DWYl0FHn.png",
    }: SEOProps) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="robots" content="index, follow" />
            
            {/* Open Graph (Social Media Preview) */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="https://artifact-band.vercel.app/assets/Artifact_Logo_2-DWYl0FHn.png" />
            {/* <meta property="og:image" content={image} /> */}
            <meta property="og:image:alt" content="Artifact Band Official Logo" />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Artifact Band" />

            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:type" content="image/png" />


            {/* Canonical URL (Prevents duplicate content issues) */}
            <link rel="canonical" href={url} />
        </Helmet>
    );
};