import { shortAbout } from "../../utils";
import { Link } from "react-router-dom";
import { ArtifactHeading } from "../ArtifactHeading";

export const ShortAboutHome = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48 py-12 text-white">
            <ArtifactHeading />
            <div className="mt-6 max-w-4xl text-lg md:text-xl leading-relaxed text-center text-gray-200">
                <h1>
                    {shortAbout.seoTextOne}
                    <strong>{shortAbout.seoTextTwo}</strong>
                    {shortAbout.seoTextThree}
                </h1>
                <p className="whitespace-pre-line mt-8">{shortAbout.description}</p>
                <p className="mt-8 font-bold text-white">{shortAbout.announcement}</p>
                <p className="mt-8 italic text-gray-200 text-lg md:text-xl">{shortAbout.statement}</p>
            </div>
            <div className="mt-8 w-full max-w-3xl text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Members</h2>
                <ul className="grid gap-2 md:gap-4 text-lg md:text-xl text-gray-200">
                    <li><span className="text-white font-semibold">{shortAbout.members.current.name}</span> - {shortAbout.members.current.role}</li>
                    <li><span className="text-white font-semibold">{shortAbout.members.past.vidoq.name}</span> - {shortAbout.members.past.vidoq.role}</li>
                    <li><span className="text-white font-semibold">{shortAbout.members.past.zet.name}</span> - {shortAbout.members.past.zet.role}</li>
                </ul>
            </div>
            <Link to={'/band'} className="mt-8">
                <button className="px-6 py-3 text-lg md:text-xl font-semibold bg-gray-900 hover:bg-gray-700 transition duration-300 rounded-lg" aria-label="Learn more about the band">
                    {shortAbout.callToAction}
                </button>
            </Link>
        </div>
    );
};