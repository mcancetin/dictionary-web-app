import { useTheme } from "@/hooks/useTheme";
import PropTypes from "prop-types";
import classNames from "classnames";
import { memo } from "react";

function Container({ children }) {
    const { fontStyle } = useTheme();

    const className = classNames({
        "min-h-screen bg-white dark:bg-blackish": true,
        "font-sans": fontStyle === "sans",
        "font-serif": fontStyle === "serif",
        "font-mono": fontStyle === "mono",
    });

    return (
        <div className={className}>
            <div className="wrapper">
                <main>{children}</main>
            </div>
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.array,
};

export default memo(Container);
