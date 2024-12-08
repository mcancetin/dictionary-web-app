import classNames from "classnames";
import { LoaderCircle } from "lucide-react";

import PropTypes from "prop-types";

function SearchBar({ search, handleSearch, loading }) {
    const loadingClass = classNames({
        "absolute right-6 top-1/3 animate-spin  text-vivid-purple": true,
        hidden: !loading,
    });

    return (
        <>
            <div className="relative w-full">
                <input
                    className="w-full appearance-none rounded-2xl bg-very-light-gray px-6 py-5 text-heading-s font-bold text-dark-gray focus:border-transparent focus:outline-none focus:ring-2 focus:ring-vivid-purple dark:bg-charcoal dark:text-white"
                    type="text"
                    value={search}
                    onChange={handleSearch}
                    placeholder="Search for any word…"
                />
                <LoaderCircle role="img" className={loadingClass} />
            </div>
        </>
    );
}

SearchBar.propTypes = {
    search: PropTypes.string,
    handleSearch: PropTypes.func,
    loading: PropTypes.bool,
};

export default SearchBar;
