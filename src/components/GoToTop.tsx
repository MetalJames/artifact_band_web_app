import { useState, useEffect } from "react";

export const GoToTop = ({ isHidden }: { isHidden: boolean }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`fixed bottom-0 left-2 sm:left-6 bg-gray-700 text-white px-5 sm:px-3 py-2 sm:py-1 rounded-t mt-1 mb-0 sm:mb-2 text-sm transition-opacity duration-300 z-[60] ${
                isVisible && !isHidden ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Go to Top"
        >
            Go Top
        </button>
    );
};
