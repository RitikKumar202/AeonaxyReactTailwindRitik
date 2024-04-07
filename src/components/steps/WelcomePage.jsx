import React from 'react';
import {
    PulleyImage
} from '../../utils/ImageUtils';

const WelcomePage = ({ isLoading, currentStep, handleNextStep }) => {

    return (
        <div className="py-10">
            <div className="flex gap-10 flex-col items-center justify-center">
                <div className='flex flex-col md:flex-row gap-24 items-center'>
                    <img src={PulleyImage} alt={PulleyImage} className='w-56 h-auto' />
                    <div className='w-[320px] md:w-[460px] flex flex-col justify-center items-start gap-5'>
                        <p className='text-lg md:text-2xl font-bold'>You're in the right place</p>
                        <span className='font-medium text-xs md:text-[14px] text-[#3d3c3b]'>
                            Brilliant gets you hands-on to help improve your professional skills and knowledge.
                            You'll interact with concepts and solve fun problems in math, science and computer science.
                        </span>
                    </div>
                </div>
                {!isLoading && currentStep < 7 && (
                    <button
                        className="w-40 py-2 bg-black cursor-pointer text-white rounded-md"
                        onClick={handleNextStep}
                    >
                        Continue
                    </button>
                )}
            </div>
        </div>
    )
}

export default WelcomePage;