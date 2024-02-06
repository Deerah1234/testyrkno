import React from "react";
import PropTypes from "prop-types";

const NavigationButtons = ({
    onPrevClick,
    onNextClick,
    currentQuestion,
    totalQuestions,
    isQuizOver,
    selectedOption,
}) => (
    <div className="flex items-center justify-between mt-5">
        <button
            className={`px-6 py-3 text-white rounded-md ${
                currentQuestion === 0 || isQuizOver || selectedOption === null
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-[#00509e] cursor-pointer"
            }`}
            onClick={onPrevClick}
            disabled={
                currentQuestion === 0 || isQuizOver || selectedOption === null
            }
        >
            Previous
        </button>
        <div className="text-sm text-gray-500">
            {currentQuestion + 1}/{totalQuestions}
        </div>
        <button
            className={`px-6 py-3 text-white rounded-md ${
                isQuizOver || selectedOption === null
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-[#00509e] cursor-pointer"
            }`}
            onClick={onNextClick}
            disabled={isQuizOver || selectedOption === null}
        >
            Next
        </button>
    </div>
);

NavigationButtons.propTypes = {
    onPrevClick: PropTypes.func.isRequired,
    onNextClick: PropTypes.func.isRequired,
    currentQuestion: PropTypes.number.isRequired,
    totalQuestions: PropTypes.number.isRequired,
    isQuizOver: PropTypes.bool.isRequired,
    selectedOption: PropTypes.string,
};

export default NavigationButtons;
