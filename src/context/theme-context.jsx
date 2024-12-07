import { createContext, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const initialTheme = localStorage.getItem("theme") || "light";
const initialFontStyle = localStorage.getItem("fontStyle") || "sans";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(initialTheme);
    const [fontStyle, setFontStyle] = useState(initialFontStyle);

    useEffect(() => {
        localStorage.setItem("theme", theme);

        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    useEffect(() => {
        localStorage.setItem("fontStyle", fontStyle);
    }, [fontStyle]);

    const handleToggleTheme = useCallback(() => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }, []);

    return (
        <ThemeContext.Provider
            value={{ theme, fontStyle, setFontStyle, handleToggleTheme }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.object,
};
