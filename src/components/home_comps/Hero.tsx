import { deadSilence_full_hd, deadSilence_new, deadSilence_square, deadSilence_wide } from "../../assets";

export const Hero = () => {
    return (
        <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">



            <picture>
                {/* 2xl screens (1536px and above) */}
                <source srcSet={deadSilence_new} media="(min-width: 1536px)" />
                
                {/* xl screens (1280px and above) */}
                <source srcSet={deadSilence_wide} media="(min-width: 1280px)" />

                {/* md screens (768px and above) */}
                <source srcSet={deadSilence_full_hd} media="(min-width: 840px)" />

                {/* Default fallback for smaller screens */}
                <img 
                    src={deadSilence_square} 
                    alt="Artifact Dead Silence Remastered"
                    className="absolute top-0 left-0 w-full h-full object-contain"
                />
            </picture>





            {/* <img 
                src={deadSilence_new} 
                alt="Artifact Dead Silence Remastered"
                className="absolute top-0 left-0 w-full h-full object-contain scale-150 sm:scale-100"
            /> */}
            {/* <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className="text-4xl md:text-6xl font-bold tracking-wider text-white">Dead Silence Remastered</h2>
                <p className="text-lg md:text-2xl text-gray-200 mt-2">Celebrating 20 Years of Artifact</p>
            </div> */}
        </div>
    );
};