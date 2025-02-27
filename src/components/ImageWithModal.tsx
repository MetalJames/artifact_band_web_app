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
                onClick={() => setIsOpen(true)}
            />

            {/* Image Modal */}
            <ImageModal 
                imageSrc={largeSrc} 
                caption={caption} 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)} 
            />
        </>
    );
};
