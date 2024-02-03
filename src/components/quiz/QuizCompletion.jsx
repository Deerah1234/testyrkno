import React from "react";
import Confetti from "react-confetti";
import { FaRedo, FaTwitter, FaEnvelope } from "react-icons/fa";

import PropTypes from "prop-types";

const QuizCompletion = ({
    score,
    timeSpent,
    onReset,
    onShareTwitter,
    onSendMessage,
}) => {
    return (
        <div className="flex flex-col items-center p-5">
            <Confetti />
            <div className="p-8 text-center text-white bg-white rounded-md shadow-md bg-opacity-20 backdrop-blur-md">
                <h2 className="mb-3 text-4xl font-bold text-green-500">
                    Congratulations, Quiz Master!
                </h2>
                <p className="mb-3 text-lg">
                    You&apos;ve conquered the quiz with flying colors!
                </p>
                <p className="mb-3 text-xl font-bold">
                    Your impressive score: {score}
                </p>
                <p className="mb-5 text-lg">
                    You spent an amazing {timeSpent} seconds on this journey!
                </p>
                <p className="mb-3 text-lg">
                    Share your achievement with friends and family or reach out
                    to us:
                </p>
                <div className="flex justify-center space-x-4">
                    <button
                        className="glass-button"
                        onClick={onShareTwitter}
                        aria-label="Share on Twitter"
                    >
                        <FaTwitter size={24} />
                    </button>
                    <button
                        className="glass-button"
                        onClick={onSendMessage}
                        aria-label="Send a Message"
                    >
                        <FaEnvelope size={24} />
                    </button>
                </div>
            </div>
            <button
                className="flex items-center px-6 py-3 mt-5 text-white transition duration-300 bg-blue-700 rounded-md hover:bg-blue-800"
                onClick={onReset}
            >
                Take the Challenge Again <FaRedo className="ml-2" />
            </button>
        </div>
    );
};

QuizCompletion.propTypes = {
    score: PropTypes.number.isRequired,
    timeSpent: PropTypes.number.isRequired,
    onReset: PropTypes.func.isRequired,
    onShareFacebook: PropTypes.func.isRequired,
    onShareTwitter: PropTypes.func.isRequired,
    onSendMessage: PropTypes.func.isRequired,
};

export default QuizCompletion;
