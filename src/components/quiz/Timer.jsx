import React from "react";
import PropTypes from "prop-types";

const Timer = ({ timer }) => {
    return (
        <div className="mb-3 text-lg text-center">
            Time remaining: {timer} seconds
        </div>
    );
};

Timer.propTypes = {
    timer: PropTypes.number.isRequired,
};

export default Timer;
