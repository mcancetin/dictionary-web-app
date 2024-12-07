import { useCallback, useState } from "react";

export const useSearch = () => {
    const [search, setSearch] = useState("");
    const handleSearch = useCallback((e) => {
        setSearch(e.target.value);
    }, []);
    return { search, handleSearch };
};
