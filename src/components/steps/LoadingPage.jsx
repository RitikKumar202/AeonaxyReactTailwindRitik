import React from 'react';

const LoadingPage = () => {
    return (
        <div className="h-screen flex items-center justify-center mx-4">
            <div className="flex flex-col items-center justify-center">
                <div className="loader ease-linear rounded-full border-[11px] border-t-[11px] border-gray-200 h-20 w-20"></div>
                <p className="md:w-[500px] font-semibold text-center text-[15px] md:text-base mt-5">
                    Finding learning path recommendations for you based on your responses
                </p>
            </div>
        </div>
    )
}

export default LoadingPage;