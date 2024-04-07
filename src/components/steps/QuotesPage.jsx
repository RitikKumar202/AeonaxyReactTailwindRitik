import React from 'react';
import { VectorImage } from '../../utils/ImageUtils';

const QuotesPage = ({ isLoading, currentStep, handleNextStep }) => {
    return (
        <div className="py-10 mx-4">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-wrap gap-24 justify-center items-center mb-6">
                    <div className="w-60 h-auto">
                        <img src={VectorImage} alt="character" />
                    </div>
                    <div className='flex flex-col items-start justify-center md:w-[540px]'>
                        <h2 className="text-2xl font-semibold mb-8">You're on your way!</h2>
                        <div className="flex items-center text-yellow-500 mb-2">
                            <svg className="w-8 h-8 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                            <svg className="w-8 h-8 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                            <svg className="w-8 h-8 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                            <svg className="w-8 h-8 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                            <svg className="w-8 h-8 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                        </div>
                        <p className="text-[14px] italic">
                            "Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."
                        </p>
                        <p className="text-sm italic mt-5">— Jacob S.</p>
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
    );
};

export default QuotesPage;