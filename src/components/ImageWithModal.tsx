import { useState, useEffect, useRef } from "react";
import { ImageModal } from "./ImageModal";
import { ImageWithModalProps } from "../utils/types";

export const ImageWithModal = ({ smallSrc, largeSrc, alt, caption, className }: ImageWithModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [loadedLargeSrc, setLoadedLargeSrc] = useState<string | null>(null);
    const hasLoadedLarge = useRef(false);

    useEffect(() => {
        if (isOpen && !hasLoadedLarge.current) {
            setLoadedLargeSrc(largeSrc);
            hasLoadedLarge.current = true;
        }
    }, [isOpen, largeSrc]);
    
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
            <img 
                src={smallSrc || largeSrc} 
                alt={alt}
                className={`${className} cursor-pointer hover:opacity-80 transition`} 
                loading="lazy" 
                onClick={() => setIsOpen(true)}
            />
            <ImageModal 
                imageSrc={loadedLargeSrc || largeSrc} 
                caption={caption} 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)} 
            />
        </>
    );
};
