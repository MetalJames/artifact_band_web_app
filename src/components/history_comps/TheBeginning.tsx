import { bandInfo } from '../../utils';

export const TheBeginning = () => {
    return (
        <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">{bandInfo.theBeginning.title}</h2>
            <div className="py-6">
                <div className="flex flex-col sm:w-2/5 w-full sm:float-right border rounded-md bg-gray-600 bg-opacity-30 p-4 sm:ml-4 ml-0 sm:mb-0 mb-4">
                    <div className="flex justify-around items-center gap-4">
                        <img src={bandInfo.theBeginning.images.imageOne.small.src} alt={bandInfo.theBeginning.images.imageOne.small.alt} className="w-1/2 h-40 object-cover rounded-lg shadow-md"/>
                        <img src={bandInfo.theBeginning.images.imageTwo.full.src} alt={bandInfo.theBeginning.images.imageTwo.full.alt} className="w-1/3 h-40 object-cover rounded-lg shadow-md"/>
                    </div>
                    <p className="text-sm mt-2 border-t pt-2">
                        {bandInfo.theBeginning.captions.text}{" "}
                        <strong>{bandInfo.theBeginning.captions.boldNames}</strong>
                        {bandInfo.theBeginning.captions.readDirection}<br/>
                        {bandInfo.theBeginning.captions.breakLineText}
                    </p>
                </div>
                <p className="whitespace-pre-line">{bandInfo.theBeginning.earlyYearsAndLineup}</p>
            </div>
        </div>
    )
};