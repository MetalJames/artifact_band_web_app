interface ParagraphWithImageProps {
    title: string;
    description: string;
    images: { src: string; alt: string }[];
    captions?: {
        text: string;
        boldNames: string;
        readDirection: string;
        breakLineText: string;
    };
    align?: "left" | "right"; // Default to "left"
}

export const ParagraphWithImage: React.FC<ParagraphWithImageProps> = ({ 
    title, 
    description, 
    images, 
    captions, 
    align = "left" 
}) => {
    const isRightAligned = align === "right";

    return (
        <section className="py-6 flex items-center">
            {!isRightAligned && (
                <div className="w-2/5 flex flex-col border rounded-md bg-gray-600 bg-opacity-30 p-4 mr-4">
                    <div className="flex justify-around items-center gap-4">
                        {images.map((img, index) => (
                            <img key={index} src={img.src} alt={img.alt} className="w-1/2 h-40 object-cover rounded-lg shadow-md"/>
                        ))}
                    </div>
                    {captions && (
                        <p className="text-sm mt-2 border-t pt-2">
                            {captions.text}{" "}
                            <strong>{captions.boldNames}</strong>
                            {captions.readDirection}<br/>
                            {captions.breakLineText}
                        </p>
                    )}
                </div>
            )}
            <div className="w-3/5">
                <h2>{title}</h2>
                <p className="whitespace-pre-line">{description}</p>
            </div>
            {isRightAligned && (
                <div className="w-2/5 flex flex-col border rounded-md bg-gray-600 bg-opacity-30 p-4 ml-4">
                    <div className="flex justify-around items-center gap-4">
                        {images.map((img, index) => (
                            <img key={index} src={img.src} alt={img.alt} className="w-1/2 h-40 object-cover rounded-lg shadow-md"/>
                        ))}
                    </div>
                    {captions && (
                        <p className="text-sm mt-2 border-t pt-2">
                            {captions.text}{" "}
                            <strong>{captions.boldNames}</strong>
                            {captions.readDirection}<br/>
                            {captions.breakLineText}
                        </p>
                    )}
                </div>
            )}
        </section>
    );
};
