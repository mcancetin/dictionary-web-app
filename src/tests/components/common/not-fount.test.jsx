import { render, screen } from "@testing-library/react";

import NotFound from "@/components/common/not-found";

import { mockedWordError } from "@/tests/__mocks__";

describe("<NotFound/>", () => {
    it("should render without crashing", () => {
        render(<NotFound error={mockedWordError} />);
    });

    it("should render with correct fields", () => {
        render(<NotFound error={mockedWordError} />);

        const emoji = screen.getByText("😕");
        const title = screen.getByText(mockedWordError.title);
        const message = screen.getByText(mockedWordError.message, {
            exact: false,
        });
        const resolution = screen.getByText(mockedWordError.resolution, {
            exact: false,
        });

        expect(emoji).toBeInTheDocument();
        expect(title).toBeInTheDocument();
        expect(message).toBeInTheDocument();
        expect(resolution).toBeInTheDocument();
    });

    it("should render nothing with falsy error prop", () => {
        render(<NotFound error={null} />);
        screen.debug();

        const title = screen.queryByText(mockedWordError.title);
        const message = screen.queryByText(mockedWordError.message);
        const resolution = screen.queryByText(mockedWordError.resolution);

        expect(title).not.toBeInTheDocument();
        expect(message).not.toBeInTheDocument();
        expect(resolution).not.toBeInTheDocument();
    });

    it("should render nothing with empty error prop", () => {
        render(<NotFound error={{}} />);

        const title = screen.queryByText(mockedWordError.title);
        const message = screen.queryByText(mockedWordError.message);
        const resolution = screen.queryByText(mockedWordError.resolution);

        expect(title).not.toBeInTheDocument();
        expect(message).not.toBeInTheDocument();
        expect(resolution).not.toBeInTheDocument();
    });

    it("should render partial fields when some error properties are missing", () => {
        render(<NotFound error={{ title: "Partial Title" }} />);
        expect(screen.getByText("Partial Title")).toBeInTheDocument();
        expect(
            screen.queryByText(mockedWordError.message),
        ).not.toBeInTheDocument();
    });
});
