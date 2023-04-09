const { colors } = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "1.5 rem",
            screens: {
                "2xl": "1360px",
            },
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-inter)", ...fontFamily.sans],
            },

            color: {
                ...colors,
                "light-primary": "#f5bc51",
                "dark-primary": "#533519",
            },
        },
    },
    plugins: [
        require("tailwindcss-animate"),
        require("@tailwindcss/typography"),
    ],
};
