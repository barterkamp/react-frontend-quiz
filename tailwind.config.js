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
                green: "#26D782",
                red: "#EE5454",
                navy: "#3B4D66",
                greyNavy: "#626C7F",
                darkNavy: "#313E51",
                lightBlue: "#ABC1E1",
                lightGrey: "#F4F6FA",
            },
        },
    },
    plugins: [],
}
