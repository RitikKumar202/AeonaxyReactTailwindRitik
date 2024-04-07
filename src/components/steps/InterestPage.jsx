import React, { useEffect } from 'react';
import {
    Analytics,
    Eye,
    Foundation,
    Globe,
    Target
} from '../../utils/ImageUtils';
import Button from '../Button';

const InterestPage = ({ isLoading, currentStep, handleNextStep, selectedOption, setSelectedOption }) => {

    const options = [
        {
            label: "Learning specific skills to advance my carrer",
            icon: `${Analytics}`
        },
        {
            label: "Exploring new topics I'm interested in",
            icon: `${Globe}`
        },
        {
            label: "Refreshing my math foundations",
            icon: `${Foundation}`
        },
        {
            label: "Exercising my brain to stay sharp",
            icon: `${Target}`
        },
        {
            label: "Something else",
            icon: `${Eye}`
        }
    ];

    useEffect(() => {
        setSelectedOption(selectedOption);
    }, [selectedOption, setSelectedOption]);

    const handleOptionSelect = (index) => {
        setSelectedOption(index);
    };

    const isContinueButtonActive = selectedOption !== null;

    return (
        <div className="py-10 mx-4">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-[22px] md:text-3xl font-bold mb-4 text-center">Which are you most interested in?</h2>
                <p className="text-[#73726f] text-[13px] md:text-base mb-8 text-center">Choose just one. This will help us get you started (but won't limit your experience).</p>
                <div className="flex flex-col gap-3">
                    {options.map(({ label, icon }, index) => (
                        <button
                            key={label}
                            className={`flex md:w-[560px] gap-4 border-2 hover:border-yellow-200 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] items-center justify-start px-5 py-3 rounded-lg ${selectedOption === index ? 'border-yellow-200 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]' : ''}`}
                            onClick={() => handleOptionSelect(index)}
                        >
                            <img src={icon} alt={icon} className='w-7 md:w-9' />
                            <span className='text-[14px] md:text-[15px] text-start'>{label}</span>
                        </button>
                    ))}
                </div>
                {!isLoading && currentStep < 7 && (
                    <Button isContinueButtonActive={isContinueButtonActive} onClick={handleNextStep} />
                )}
            </div>
        </div>
    )
}

export default InterestPage;