import React, { useState } from "react";
import PropTypes from "prop-types";

const CorrectAnswerShowcase = ({ correctAnswers }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    return (
        <div className="p-8 text-center text-white bg-gray-800 rounded-md shadow-md bg-opacity-90 backdrop-blur-md">
            <h2 className="mb-3 text-4xl font-bold text-green-500">
                Correct Answers Showcase
            </h2>
            <div className="mb-3 text-lg">
                Check your answers against the correct ones:
            </div>
            {correctAnswers.map((answer, index) => (
                <div
                    key={index}
                    className={`mb-6 text-lg text-left ${
                        index === currentQuestionIndex ? "" : "hidden"
                    }`}
                >
                    <div className="mb-2">
                        <strong>Question {index + 1}:</strong>{" "}
                        {answer.userAnswer === answer.correctAnswer ? (
                            <span className="text-green-500">Correct</span>
                        ) : (
                            <span className="text-red-500">Incorrect</span>
                        )}
                    </div>
                    <div>
                        <strong>Your Answer:</strong> {answer.userAnswer} <br />
                        <strong>Correct Answer:</strong> {answer.correctAnswer}
                    </div>
                </div>
            ))}
            {currentQuestionIndex < correctAnswers.length - 1 && (
                <button
                    className="mt-4 bg-[#00509e] px-6 py-3 text-white rounded-md"
                    onClick={handleNextQuestion}
                >
                    Next
                </button>
            )}
        </div>
    );
};

CorrectAnswerShowcase.propTypes = {
    correctAnswers: PropTypes.arrayOf(
        PropTypes.shape({
            correctAnswer: PropTypes.string.isRequired,
            userAnswer: PropTypes.string,
        })
    ).isRequired,
};

export default CorrectAnswerShowcase;
