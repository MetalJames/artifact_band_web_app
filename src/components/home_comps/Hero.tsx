import { deadSilence_full_hd, deadSilence_new, deadSilence_square, deadSilence_wide } from "../../assets";

export const Hero = () => {
    return (
        <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
            <picture>
                <source srcSet={deadSilence_new} media="(min-width: 1536px)" />
                <source srcSet={deadSilence_wide} media="(min-width: 1280px)" />
                <source srcSet={deadSilence_full_hd} media="(min-width: 840px)" />
                <img 
                    src={deadSilence_square} 
                    alt="Artifact Dead Silence Remastered"
                    className="absolute top-0 left-0 w-full h-full object-contain"
                />
            </picture>
        </div>
    );
};