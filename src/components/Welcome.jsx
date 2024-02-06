import React from "react";
import PropTypes from "prop-types";
import { RiArrowRightLine } from "react-icons/ri";

const Welcome = ({ handleButtonClick }) => {
    return (
        <div className="flex flex-col items-center justify-center p-8 text-center">
            <h1 className="mb-4 text-4xl font-bold lg:text-5xl animate__animated animate__fadeInUp animate__delay-200">
                Welcome to TestYrKno (Test Your Knowledge)
            </h1>

            <p className="mb-6 text-base lg:text-lg animate__animated animate__fadeInUp animate__delay-400">
                Are you ready to test your knowledge on what you just learned?
            </p>

            <button
                onClick={handleButtonClick}
                className="flex items-center px-4 py-2 text-white rounded bg-button lg:text-lg animate__animated animate__fadeInUp animate__delay-600"
            >
                <span className="hidden lg:inline">
                    Yes, challenge me with questions
                </span>
                <span className="lg:hidden">Challenge me</span>
                <RiArrowRightLine />
            </button>
        </div>
    );
};

Welcome.propTypes = {
    handleButtonClick: PropTypes.func.isRequired,
};

export default Welcome;
