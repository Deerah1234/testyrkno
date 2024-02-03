const quizData = [
    {
        id: 1,
        question:
            "What is one common way to deploy a React app to GitHub Pages?",
        options: [
            "Using `npm run build`",
            "Using `git push origin master`",
            "Using `gh-pages -d build`",
            "Using `npm deploy`",
        ],
        correctAnswer: "Using `gh-pages -d build`",
    },
    {
        id: 2,
        question:
            "In the context of deploying a React app to GitHub Pages, what does the `gh-pages` package do?",
        options: [
            "Creates a GitHub repository",
            "Handles routing in a React app",
            "Helps with the deployment process",
            "Installs additional dependencies",
        ],
        correctAnswer: "Helps with the deployment process",
    },
    {
        id: 3,
        question:
            "What is the purpose of the `predeploy` script in the `package.json` file?",
        options: [
            "To run tests before deployment",
            "To build the React app",
            "To deploy the app automatically",
            "To create a new Git branch",
        ],
        correctAnswer: "To run tests before deployment",
    },
    {
        id: 4,
        question:
            "Which branch is commonly used for deploying a React app to GitHub Pages?",
        options: ["master", "gh-pages", "deploy", "main"],
        correctAnswer: "gh-pages",
    },
    {
        id: 5,
        question: "How do you access a React app deployed on GitHub Pages?",
        options: [
            "`https://github.com/<username>/<repo-name>`",
            "`https://<username>.github.io/<repo-name>`",
            "`https://<username>/<repo-name>`",
            "`https://pages.github.com/<username>/<repo-name>`",
        ],
        correctAnswer: "`https://<username>.github.io/<repo-name>`",
    },
    {
        id: 6,
        question:
            "What command is used to initialize a new React app using Create React App?",
        options: [
            "`create-react-app`",
            "`npm init react-app`",
            "`react-create-app`",
            "`npm create-react-app`",
        ],
        correctAnswer: "`npx create-react-app <app-name>`",
    },
    {
        id: 7,
        question:
            "What folder contains the build output of a React app created with Create React App?",
        options: ["`src`", "`public`", "`build`", "`dist`"],
        correctAnswer: "`build`",
    },
    {
        id: 8,
        question:
            "In manual deployment, which branch is commonly used for deploying the app to GitHub Pages?",
        options: ["master", "gh-pages", "deploy", "main"],
        correctAnswer: "gh-pages",
    },
    {
        id: 9,
        question:
            "Which npm script is executed automatically before deploying to GitHub Pages using the `gh-pages` package?",
        options: ["`predeploy`", "`deploy`", "`build`", "`postdeploy`"],
        correctAnswer: "`predeploy`",
    },
    {
        id: 10,
        question:
            "What command is used to push changes to the `gh-pages` branch in manual deployment?",
        options: [
            "`git push origin master`",
            "`git push origin gh-pages`",
            "`git push gh-pages`",
            "`git push origin deploy`",
        ],
        correctAnswer: "`git push origin gh-pages`",
    },
];

export default quizData;
