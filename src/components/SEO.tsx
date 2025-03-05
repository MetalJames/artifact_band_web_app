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
        url = "https://artifact-band-web-app.vercel.app/",
        image = "https://artifact-band-web-app.vercel.app/assets/Artifact_Logo_2-DWYl0FHn.png",
    }: SEOProps) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            
            {/* Open Graph (Social Media Preview) */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />

            {/* Canonical URL (Prevents duplicate content issues) */}
            <link rel="canonical" href={url} />
        </Helmet>
    );
};