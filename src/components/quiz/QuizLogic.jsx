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
    const [totalTimeSpent, setTotalTimeSpent] = useState(0);

    useEffect(() => {
        setStartTime(Date.now());
        const interval = setInterval(() => {
            if (timer > 0 && !isQuizOver) {
                setTimer((prevTimer) => prevTimer - 1);
            } else {
                clearInterval(interval);
                setIsQuizOver(true);
                setTotalTimeSpent(Date.now() - startTime);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [timer, isQuizOver, startTime]);

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
        // Implement logic to share on Twitter

        // Add image URL, GitHub link, and mention
        // const imageUrl =
        //     "https://raw.githack.com/Deerah1234/testyrkno/master/src/assets/twittersharebanner_v1.png";
        const githubLink = "https://github.com/Deerah1234/testyrkno";
        const mention = "@0xDeerah";

        const tweetText = `I scored ${score} on the quiz and spent ${Math.floor(
            totalTimeSpent / 1000
        )} seconds after a wonderful blog by ${mention}! 🚀 #QuizMaster #ChallengeAccepted`;

        // Append image and GitHub link to the tweet
        const finalTweetText = `${tweetText}\n\nCheck out the quiz on GitHub: ${githubLink}`;

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

    const totalQuestions = quizData.length;
    const timeSpent = Math.floor(totalTimeSpent / 1000);

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
        timeSpent,
    };
};

export default useQuizLogic;
