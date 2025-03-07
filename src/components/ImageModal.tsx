import { useEffect, useState } from "react";

type ImageModalProps = {
    imageSrc: string;
    caption?: string;
    isOpen: boolean;
    onClose: () => void;
};

export const ImageModal = ({ imageSrc, caption, isOpen, onClose }: ImageModalProps) => {

    const [isFullScreen, setIsFullScreen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            setIsFullScreen(false);
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[100]">
            <div className="relative flex flex-col w-full h-full justify-center items-center">
                <img 
                    src={imageSrc}
                    loading="lazy"
                    alt="Full size" 
                    className={`absolute ${isFullScreen ? "w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain" : "w-auto h-auto max-w-[60vw] max-h-[60vh] object-contain"} rounded-lg`}
                />
                <button
                    className="absolute top-6 right-8 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full transition z-50 hover:bg-opacity-100 hover:scale-110 hover:shadow-lg"
                    onClick={onClose}
                >
                    &times;
                </button>
                <button 
                    className="absolute bottom-6 right-8 bg-black bg-opacity-60 text-white px-3 py-1 text-sm rounded transition z-50 hover:bg-opacity-100 hover:scale-110 hover:shadow-lg"
                    onClick={() => setIsFullScreen(!isFullScreen)}
                >
                    {isFullScreen ? "Exit Fullscreen" : "View Fullscreen"}
                </button>
                {caption && <p className="text-gray-300 italic text-sm text-center mt-4">{caption}</p>}
            </div>
        </div>
    );
};