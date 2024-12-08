import { render, screen } from "@testing-library/react";
import App from "@/App";

describe("App", () => {
    it("should render without crashing", () => {
        render(<App />);
        const header = screen.getByRole("banner");
        const main = screen.getByRole("main");

        expect(header).toBeInTheDocument();
        expect(main).toBeInTheDocument();
    });
});
