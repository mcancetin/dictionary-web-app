import { render, screen } from "@testing-library/react";

import Container from "@/components/layout/container";
import { ThemeProvider } from "@/context/theme-context";

describe("<Container />", () => {
    it("should render the component without crashing", () => {
        render(<Container />, { wrapper: ThemeProvider });

        const container = screen.getByRole("main");
        expect(container).toBeInTheDocument();
    });

    it("should render the children", () => {
        render(
            <Container>
                <h1>Test</h1>
            </Container>,
            { wrapper: ThemeProvider },
        );

        const heading = screen.getByRole("heading", { name: /test/i });
        expect(heading).toBeInTheDocument();
    });
});
