import { render, screen } from "@testing-library/react";

import SearchResult from "@/components/common/search-result";

import { mockedWord } from "../../__mocks__";

describe("<SearchResult />", () => {
    it("should not render when data prop is falsy", () => {
        const { container } = render(<SearchResult data={null} />);
        expect(container.firstChild).toBeNull();
    });

    it("should render the search result", () => {
        const container = render(<SearchResult data={mockedWord} />);

        expect(container).toMatchSnapshot();
    });
});
