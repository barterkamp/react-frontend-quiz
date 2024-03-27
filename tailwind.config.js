/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                rubik: ["Rubik", "sans-serif"],
            },
            colors: {
                purple: "#A729F5",
                squidInk: "#313E51",
                midnightHaze: "#3B4D66",
                payneGray: "#626C7F",
                steelBlue: "#ABC1E1",
                antiFlashWhite: "#F4F6FA",
                ufoGreen: "#26D782",
                grapefruitRed: "#EE5454",
            },
        },
    },
    plugins: [],
}
