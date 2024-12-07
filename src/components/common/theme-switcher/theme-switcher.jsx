import classNames from "classnames";

import { useTheme } from "@/hooks/useTheme";

function ThemeSwitcher() {
    const { theme, handleToggleTheme } = useTheme();

    const switchClasses = classNames({
        "absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full transition ease-in-out": true,
        "translate-x-1": theme === "light",
        "translate-x-7": theme === "dark",
    });

    return (
        <div className="flex items-center gap-4 pl-3">
            <div
                className="relative h-7 w-12 cursor-pointer rounded-full bg-medium-gray dark:bg-vivid-purple"
                onClick={handleToggleTheme}
            >
                <span className={switchClasses}></span>
            </div>
            <div>
                <img src={`/images/icon-moon-${theme}.svg`} alt="" />
            </div>
        </div>
    );
}

export default ThemeSwitcher;
