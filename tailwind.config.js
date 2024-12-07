/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                blackish: "#050505",
                charcoal: "#1F1F1F",
                "dark-gray": "#2D2D2D",
                "medium-dark-gray": "#3A3A3A",
                "medium-gray": "#757575",
                "light-gray": "#E9E9E9",
                "very-light-gray": "#F4F4F4",
                white: "#FFFFFF",
                "vivid-purple": "#A445ED",
                "bright-red": "#FF5522",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"], // Sans Serif
                serif: ["Lora", "serif"], // Serif
                mono: ["Inconsolata", "monospace"], // Mono
            },
            fontSize: {
                "heading-l": ["4rem", "4.8125rem"], // 64px ve 77px
                "heading-m": ["1.5rem", "1.8125rem"], // 24px ve 29px
                "heading-s": ["1.25rem", "1.5rem"], // 20px ve 24px
                "body-m": ["1.125rem", "1.5rem"], // 18px ve 24px
                "body-s": ["0.875rem", "1.0625rem"], // 14px ve 17px
            },
        },
    },
    darkMode: "class",
    plugins: [],
};
