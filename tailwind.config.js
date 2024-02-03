/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "baloo-2": ["Baloo 2", "sans-serif"],
            },
            backgroundImage: {
                button: "radial-gradient(ellipse 80% 70% at 50% 120%, #03a9f4, #00509e)",
            },
            colors: {
                lightBlue: "#03A9F4",
            },
        },
    },
    plugins: [],
};
