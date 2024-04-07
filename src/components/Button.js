import React from 'react';

const Button = ({ isContinueButtonActive, onClick }) => {

    return (
        <button
            className={`mt-5 w-40 py-2 ${isContinueButtonActive ? 'bg-black cursor-pointer' : 'bg-gray-400 cursor-not-allowed'} text-white rounded-md`}
            disabled={!isContinueButtonActive}
            onClick={onClick}
        >
            Continue
        </button>
    )
}

export default Button;