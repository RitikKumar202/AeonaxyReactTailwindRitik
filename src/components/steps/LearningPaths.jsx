import React from 'react';
import { DataVizualization } from '../../utils/ImageUtils';

const LearningPaths = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center my-10 md:m-0">
            <h1 className="text-[22px] md:text-3xl font-bold mb-4 text-center">Learning paths based on your answers</h1>
            <p className="text-[#73726f] text-[13px] md:text-base mb-10 text-center">Choose one to get started. You can switch anytime.</p>
            <div className="flex items-center justify-center flex-col flex-wrap md:flex-row gap-3">
                <div className="w-[320px] md:w-[450px] bg-white border rounded-lg hover:border-yellow-400 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-6 relative flex items-center justify-center">
                    <div className="absolute top-[-15px] left-[30%] md:left-[36%] text-[14px] bg-yellow-500 text-black font-semibold rounded-full px-2 py-1">MOST POPULAR</div>
                    <div className='flex flex-col-reverse md:flex-row items-center gap-4 md:gap-0'>
                        <p className="text-base font-medium"><span className='font-bold'>Foundational Math</span> Build your foundational skills in algebra, geometry, and probability.</p>
                        <img src={DataVizualization} alt="" className='w-36 h-auto' />
                    </div>
                </div>
                <div className='w-[320px] md:w-[450px] bg-white border rounded-lg hover:border-yellow-400 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-6 relative flex flex-col-reverse md:flex-row items-center justify-center gap-4 md:gap-0'>
                    <p className="text-base font-medium"><span className='font-bold'>Mathematical Thinking</span> Build your foundational skills in algebra, geometry, and probability.</p>
                    <img src={DataVizualization} alt="" className='w-36 h-auto' />
                </div>
            </div>
        </div>
    );
};

export default LearningPaths;