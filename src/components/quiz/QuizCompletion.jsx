import React from "react";
import PropTypes from "prop-types";
import { FaRedo, FaTwitter, FaComments } from "react-icons/fa";
import CorrectAnswerShowcase from "./CorrectAnswerShowcase";

const QuizCompletion = ({
    score,
    onReset,
    onShareTwitter,
    onSendMessage,
    correctAnswers,
}) => {
    return (
        <div className="flex flex-col items-center p-5" id="quiz-container">
            <div className="w-full max-w-lg">
                <div className="mb-10 text-3xl font-bold text-center text-green-500">
                    Quiz Completed!
                </div>
                <div className="p-6 mb-6 text-center text-gray-800 bg-white rounded-md shadow-xl md:p-10 md:mb-10">
                    <div className="text-lg font-bold">
                        Your Score: {score} / {correctAnswers.length}
                    </div>
                </div>
                <CorrectAnswerShowcase correctAnswers={correctAnswers} />
                <div className="flex flex-col justify-between mt-5 md:flex-row">
                    <button
                        className="flex items-center mb-3 btn-primary md:mb-0"
                        onClick={onReset}
                    >
                        <FaRedo className="mr-2" />
                        Retry Quiz
                    </button>
                    <button
                        className="flex items-center mb-3 btn-primary md:mb-0"
                        onClick={onShareTwitter}
                    >
                        <FaTwitter className="mr-2" />
                        Share on Twitter
                    </button>
                    <button
                        className="flex items-center btn-primary"
                        onClick={onSendMessage}
                    >
                        <FaComments className="mr-2" />
                        Send Feedback
                    </button>
                </div>
            </div>
        </div>
    );
};

QuizCompletion.propTypes = {
    score: PropTypes.number.isRequired,
    timeSpent: PropTypes.number.isRequired,
    onReset: PropTypes.func.isRequired,
    onShareTwitter: PropTypes.func.isRequired,
    onSendMessage: PropTypes.func.isRequired,
    correctAnswers: PropTypes.arrayOf(
        PropTypes.shape({
            correctAnswer: PropTypes.string.isRequired,
            userAnswer: PropTypes.string,
        })
    ).isRequired,
};

export default QuizCompletion;
