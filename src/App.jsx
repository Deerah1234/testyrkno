import React, { useState } from "react";
import { Quiz, Welcome } from "./components";
import quizData from "./constants/quizData";

const App = () => {
    const storageKey = "quizProgress";

    // Retrieve quiz progress from localStorage
    const storedQuizProgress = localStorage.getItem(storageKey);
    const initialQuizProgress = storedQuizProgress
        ? JSON.parse(storedQuizProgress)
        : null;

    const [quizProgress, setQuizProgress] = useState(initialQuizProgress);

    const handleButtonClick = () => {
        // Set quiz progress to the next question or initial if not started
        const nextQuestionIndex =
            (quizProgress && quizProgress.currentQuestion + 1) || 0;
        const nextQuizProgress = {
            currentQuestion: nextQuestionIndex,
            selectedOptions: quizProgress
                ? [...quizProgress.selectedOptions]
                : Array(quizData.length).fill(null),
        };

        // Store the updated quiz progress in localStorage
        localStorage.setItem(storageKey, JSON.stringify(nextQuizProgress));

        // Update state to trigger re-render
        setQuizProgress(nextQuizProgress);
    };

    const handleQuizReset = () => {
        // Clear quiz progress in localStorage
        localStorage.removeItem(storageKey);
        // Update state to trigger re-render
        setQuizProgress(null);
    };

    return (
        <>
            {quizProgress ? (
                <Quiz
                    quizData={quizData}
                    quizProgress={quizProgress}
                    onReset={handleQuizReset}
                />
            ) : (
                <div className="flex items-center justify-center min-h-screen">
                    <Welcome handleButtonClick={handleButtonClick} />
                </div>
            )}
        </>
    );
};

export default App;
