import { useTheme } from "@/hooks/useTheme";
import PropTypes from "prop-types";

function FontSelector({ className }) {
    const { fontStyle, setFontStyle } = useTheme();
    return (
        <>
            <label htmlFor="fontStyle" className="">
                <span className="sr-only"> Choose Font Style</span>
                <select
                    title="Font Style"
                    id="fontStyle"
                    name="fontStyle"
                    value={fontStyle}
                    onChange={(e) => setFontStyle(e.target.value)}
                    className={`mr-3 bg-white px-2 text-dark-gray dark:bg-blackish dark:text-white ${className}`}
                >
                    <option value="sans">Sans Serif</option>
                    <option value="serif">Serif</option>
                    <option value="mono">Mono</option>
                </select>
            </label>
        </>
    );
}

FontSelector.propTypes = {
    className: PropTypes.string,
};

export default FontSelector;
