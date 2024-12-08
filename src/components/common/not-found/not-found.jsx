import { memo } from "react";
import PropTypes from "prop-types";

function NotFound({ error }) {
    if (!error || Object.keys(error).length === 0) return null;

    return (
        <div className="pt-32 text-center">
            <span className="block pb-11 text-6xl">😕</span>

            <p className="pb-6 text-heading-s font-bold text-dark-gray dark:text-white">
                {error.title}
            </p>
            <p className="text-body-m text-medium-gray">
                {error.message} {error.resolution}
            </p>
        </div>
    );
}

NotFound.propTypes = {
    error: PropTypes.object,
};

export default memo(NotFound);
