import { useState, useEffect } from "react";
import { ImageModal } from "./ImageModal";

type ImageWithModalProps = {
    smallSrc?: string;  // Optional
    largeSrc: string;
    alt: string;
    caption?: string;
    className?: string; // Allows passing different width classes
};

export const ImageWithModal = ({ smallSrc, largeSrc, alt, caption, className }: ImageWithModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [loadedLargeSrc, setLoadedLargeSrc] = useState<string | null>(null);

    // Load large image only when modal is opened
    useEffect(() => {
        if (isOpen) {
            setLoadedLargeSrc(largeSrc);
        }
    }, [isOpen, largeSrc]);
    
    // Handle Escape key to close modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        <>
            {/* Small image (if exists), otherwise use large image */}
            <img 
                src={smallSrc || largeSrc} 
                alt={alt}
                className={`${className} cursor-pointer hover:opacity-80 transition`} 
                loading="lazy" 
                onClick={() => setIsOpen(true)}
            />

            {/* Image Modal */}
            <ImageModal 
                imageSrc={loadedLargeSrc || largeSrc} 
                caption={caption} 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)} 
            />
        </>
    );
};
