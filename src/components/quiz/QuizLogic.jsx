import { useState, useEffect } from "react";

const useQuizLogic = (quizData) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(60);
    const [isQuizOver, setIsQuizOver] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState(
        Array(quizData.length).fill(null)
    );
    const [startTime, setStartTime] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState([]);
    const totalQuestions = quizData.length;

    useEffect(() => {
        if (timer > 0 && !isQuizOver) {
            const timeout = setTimeout(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);

            return () => clearTimeout(timeout);
        } else if (!isQuizOver) {
            setIsQuizOver(true);
        }
    }, [timer, isQuizOver, startTime]);

    useEffect(() => {
        // Calculate correct answers after quiz completion
        if (isQuizOver) {
            const updatedCorrectAnswers = quizData.map((question, index) => ({
                correctAnswer: question.correctAnswer,
                userAnswer: selectedOptions[index],
            }));
            setCorrectAnswers(updatedCorrectAnswers);
        }
    }, [isQuizOver, quizData, selectedOptions]);

    const handleAnswerClick = (selectedAnswer) => {
        if (!isQuizOver) {
            const correctAnswer = quizData[currentQuestion].correctAnswer;

            const updatedSelectedOptions = [...selectedOptions];
            updatedSelectedOptions[currentQuestion] = selectedAnswer;
            setSelectedOptions(updatedSelectedOptions);

            if (selectedAnswer === correctAnswer) {
                setScore((prevScore) => prevScore + 1);
            }
        }
    };

    const handlePrevClick = () => {
        if (!isQuizOver && currentQuestion > 0) {
            setCurrentQuestion((prevQuestion) => prevQuestion - 1);
        }
    };

    const handleNextClick = () => {
        if (!isQuizOver && currentQuestion < quizData.length - 1) {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        } else if (currentQuestion === quizData.length - 1) {
            setIsQuizOver(true);
        }
    };

    const handleResetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setTimer(60);
        setIsQuizOver(false);
        setSelectedOptions(Array(quizData.length).fill(null));
        setStartTime(Date.now());
    };

    const handleShareTwitter = () => {
        const githubLink = "https://github.com/Deerah1234/testyrkno";
        const mention = "@0xDeerah";

        const tweetText = `Just aced the quiz after reading an amazing blog by ${mention}! 🚀 
        
        Scored ${score} out of ${totalQuestions}. Can you beat my score? Try it now! #QuizMaster #ChallengeAccepted`;

        // Append GitHub link to the tweet
        const finalTweetText = `${tweetText}\n\nCheck out the quiz app on GitHub: ${githubLink}`;

        // Create a Twitter share URL
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            finalTweetText
        )}&url=${encodeURIComponent(githubLink)}`;

        // Open the Twitter share page in a new window
        window.open(twitterUrl, "_blank");
    };

    const handleSendMessage = () => {
        const subject = encodeURIComponent("Quiz Feedback");
        const feedbackMessage =
            "Quick feedback from Testyrkno: I enjoyed the quiz and learned a lot!";
        const body = encodeURIComponent(
            `${feedbackMessage}\n\nAdditional comments: ...`
        );

        const mailtoLink = `mailto:chiderajaems55@mail.com?subject=${subject}&body=${body}`;

        window.location.href = mailtoLink;
    };

    return {
        currentQuestion,
        score,
        timer,
        isQuizOver,
        selectedOptions,
        startTime,
        handleAnswerClick,
        handlePrevClick,
        handleNextClick,
        handleResetQuiz,
        handleShareTwitter,
        handleSendMessage,
        totalQuestions,
        correctAnswers,
    };
};

export default useQuizLogic;
