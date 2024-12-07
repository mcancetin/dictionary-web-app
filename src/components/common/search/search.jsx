import { useQuery } from "react-query";
import { useDebounce } from "use-debounce";

import { getWord } from "@/api/word";
import { useSearch } from "@/hooks/useSearch";
import NotFound from "@/components/common/not-found";
import SearchBar from "@/components/common/search-bar";
import SearchResult from "@/components/common/search-result";

function Search() {
    const { search, handleSearch } = useSearch();
    const [debouncedSearch] = useDebounce(search, 1000);

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["word", debouncedSearch],
        queryFn: () => getWord(debouncedSearch),
        enabled: !!debouncedSearch,
        retry: false,
    });

    return (
        <>
            <SearchBar
                search={search}
                handleSearch={handleSearch}
                loading={isLoading}
            />

            {!isError ? (
                <SearchResult data={data} loading={isLoading} />
            ) : (
                <NotFound error={error.response.data} />
            )}
        </>
    );
}

Search.propTypes = {};

export default Search;
