import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import SearchBar from "@/components/common/search-bar";

describe("<SearchBar />", () => {
    it("should render the search bar without crashing", () => {
        render(<SearchBar />);
        expect(screen.getByPlaceholderText("Search for any word…"))
            .toBeInTheDocument;
    });

    it("should render the search bar with the given search value", () => {
        render(<SearchBar search="hello" />);
        expect(screen.getByDisplayValue("hello")).toBeInTheDocument;
    });

    it("should render the search bar with loading spinner", () => {
        render(<SearchBar loading />);
        expect(screen.getByRole("img")).toBeInTheDocument;
    });

    it("should not render the loading spinner when loading is false", async () => {
        render(<SearchBar loading={false} />);
        expect(screen.queryByRole("img")).not.toBeInTheDocument;
    });

    it("should call the handleSearch function on input change", async () => {
        const handleSearch = vi.fn();

        render(<SearchBar handleSearch={handleSearch} />);

        const input = screen.getByPlaceholderText("Search for any word…");
        const user = userEvent.setup();

        const inputWord = "hello";

        await user.type(input, inputWord);

        expect(handleSearch).toHaveBeenCalledTimes(inputWord.length);
    });

    it;
});
