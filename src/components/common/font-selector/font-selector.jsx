import { useTheme } from "@/hooks/useTheme";
import PropTypes from "prop-types";

function FontSelector({ className }) {
    const { fontStyle, setFontStyle } = useTheme();
    return (
        <>
            <label htmlFor="fontStyle"></label>
            <select
                id="fontStyle"
                name="fontStyle"
                value={fontStyle}
                onChange={(e) => setFontStyle(e.target.value)}
                className={`bg-white px-2 text-dark-gray dark:bg-blackish dark:text-white ${className}`}
            >
                <option value="sans">Sans Serif</option>
                <option value="serif">Serif</option>
                <option value="mono">Mono</option>
            </select>
        </>
    );
}

FontSelector.propTypes = {
    className: PropTypes.string,
};

export default FontSelector;
