import React from "react";
import useQuizLogic from "./QuizLogic";
import Timer from "./Timer";
import QuizCompletion from "./QuizCompletion";
import QuizOption from "./QuizOption";
import NavigationButtons from "../ui/NavigationButtons";
import PropTypes from "prop-types";

const Quiz = ({ quizData }) => {
    const {
        currentQuestion,
        score,
        timer,
        isQuizOver,
        selectedOptions,
        handleAnswerClick,
        handlePrevClick,
        handleNextClick,
        handleResetQuiz,
        handleShareTwitter,
        handleSendMessage,
        totalQuestions,
        correctAnswers,
    } = useQuizLogic(quizData);

    return (
        <div className="flex flex-col items-center p-5">
            {isQuizOver ? (
                <QuizCompletion
                    score={score}
                    onReset={handleResetQuiz}
                    onShareTwitter={handleShareTwitter}
                    onSendMessage={handleSendMessage}
                    correctAnswers={correctAnswers}
                />
            ) : (
                <div className="w-full max-w-lg">
                    <Timer timer={timer} />
                    <div className="p-10 mb-10 text-center text-gray-800 bg-white rounded-md shadow-xl">
                        {quizData[currentQuestion].question}
                    </div>
                    {/* Options */}
                    <div className="flex flex-col justify-between w-full text-black">
                        {quizData[currentQuestion].options.map(
                            (option, index) => (
                                <QuizOption
                                    key={index}
                                    option={option}
                                    onClick={() => handleAnswerClick(option)}
                                    isSelected={
                                        selectedOptions[currentQuestion] ===
                                        option
                                    }
                                />
                            )
                        )}
                    </div>
                    {/* Navigation Buttons */}
                    <NavigationButtons
                        onPrevClick={handlePrevClick}
                        onNextClick={handleNextClick}
                        currentQuestion={currentQuestion}
                        totalQuestions={totalQuestions}
                        isQuizOver={isQuizOver}
                        selectedOption={selectedOptions[currentQuestion]}
                    />
                </div>
            )}
        </div>
    );
};

Quiz.propTypes = {
    quizData: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string.isRequired,
            options: PropTypes.arrayOf(PropTypes.string).isRequired,
            answer: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Quiz;
