import React, { useEffect } from 'react';
import {
    Student,
    Professional,
    Parent,
    LifelongLearner,
    Teacher,
    Other
} from '../../utils/ImageUtils';
import Button from '../Button';

const PersonalizationPage = ({ isLoading, currentStep, handleNextStep, selectedOption, setSelectedOption }) => {

    const options = [
        {
            label: (
                <span>
                    <span>Student</span>
                    <span className="text-[#73726f]"> or soon to be enrolled</span>
                </span>
            ), icon: `${Student}`
        },
        {
            label: (
                <span>
                    <span>Professional</span>
                    <span className="text-[#73726f]"> pursuing a career</span>
                </span>
            ), icon: `${Professional}`
        },
        {
            label: (
                <span>
                    <span>Parent</span>
                    <span className="text-[#73726f]"> of a school-age child</span>
                </span>
            ), icon: `${Parent}`
        },
        {
            label: (
                <span>Lifelong learner</span>
            ), icon: `${LifelongLearner}`
        },
        {
            label: (
                <span>Teacher</span>
            ), icon: `${Teacher}`
        },
        {
            label: (
                <span>Other</span>
            ), icon: `${Other}`
        },
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
                <h2 className="text-[22px] md:text-3xl font-bold mb-4 text-center">Which describes you best?</h2>
                <p className="text-[#73726f] text-[13px] md:text-base mb-8 text-center">This will help us personalize your experience.</p>
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

export default PersonalizationPage;