import React from "react";
import { RiCircleLine, RiCheckboxCircleFill } from "react-icons/ri";

import PropTypes from "prop-types";

const QuizOption = ({ option, onClick, isSelected }) => (
    <div
        className={`my-2 cursor-pointer ${
            isSelected ? "text-[#00509e]" : "text-gray-500"
        } flex items-center ${window.innerWidth <= 600 ? "text-sm" : ""}`}
        onClick={onClick}
    >
        {isSelected ? (
            <RiCheckboxCircleFill className="mr-2 text-[#00509e]" />
        ) : (
            <RiCircleLine className="mr-2" />
        )}
        {option}
    </div>
);

QuizOption.propTypes = {
    option: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
};

export default QuizOption;
