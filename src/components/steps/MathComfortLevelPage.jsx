import React, { useEffect } from 'react';
import {
    Mathlvl1,
    Mathlvl2,
    Mathlvl3,
    Mathlvl4
} from '../../utils/ImageUtils';
import Button from '../Button';

const MathComfortLevelPage = ({ isLoading, currentStep, handleNextStep, selectedOption, setSelectedOption }) => {

    const mathLevels = [
        { icon: `${Mathlvl1}`, level: 'Arithmetic', label: 'Introductory' },
        { icon: `${Mathlvl2}`, level: 'Basic Algebra', label: 'Foundational' },
        { icon: `${Mathlvl3}`, level: 'Intermediate Algebra', label: 'Intermediate' },
        { icon: `${Mathlvl4}`, level: 'Calculus', label: 'Advanced' }
    ];

    useEffect(() => {
        setSelectedOption(selectedOption);
    }, [selectedOption, setSelectedOption]);

    const handleOptionSelect = (level) => {
        setSelectedOption(level);
    };

    const isContinueButtonActive = selectedOption !== null;

    return (
        <div className="py-10 mx-4">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-[22px] md:text-3xl font-bold mb-4 text-center">What is your math comfort level?</h2>
                <p className="text-[#73726f] text-[13px] md:text-base mb-8 text-center">Choose the highest level you feel confident in — you can always adjust later.</p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {mathLevels.map(({ icon, level, label }, index) => (
                        <button
                            key={level}
                            className={`flex flex-col gap-[3px] w-52 h-40 border-2 hover:border-yellow-400 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] items-center justify-center px-5 py-8 rounded-lg ${selectedOption === index ? 'border-yellow-400 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]' : ''}`}
                            onClick={() => handleOptionSelect(index)}
                        >
                            <div className='w-24 h-12 flex items-center justify-center'>
                                <img src={icon} alt={icon} className='w-full' />
                            </div>
                            <span className='text-[14px]'>{level}</span>
                            <span className='text-[#9f9e9c] text-[16px]'>{label}</span>
                        </button>
                    ))}
                </div>
                {!isLoading && currentStep < 7 && (
                    <Button isContinueButtonActive={isContinueButtonActive} onClick={handleNextStep} />
                )}
            </div>
        </div>
    );
};

export default MathComfortLevelPage;