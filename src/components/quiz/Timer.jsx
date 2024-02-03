import React from "react";

const Timer = ({ timer }) => {
    return (
        <div className="mb-3 text-lg text-center">
            Time remaining: {timer} seconds
        </div>
    );
};

export default Timer;
