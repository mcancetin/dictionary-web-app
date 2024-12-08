import { render, screen } from "@testing-library/react";

import Header from "@/components/layout/header";
import { ThemeProvider } from "@/context/theme-context";

describe("<Header />", () => {
    it("should render the component without crashing", () => {
        render(<Header />, { wrapper: ThemeProvider });

        const header = screen.getByRole("banner");
        expect(header).toBeInTheDocument();
    });

    it("should render the logo", () => {
        render(<Header />, { wrapper: ThemeProvider });

        const logo = screen.getByAltText(/logo/i);
        expect(logo).toBeInTheDocument();
    });

    it("should render the font selector", () => {
        render(<Header />, { wrapper: ThemeProvider });

        const fontSelector = screen.getByRole("combobox");
        expect(fontSelector).toBeInTheDocument();
    });

    it("should render the theme switcher", () => {
        render(<Header />, { wrapper: ThemeProvider });

        const themeSwitcher = screen.getByRole("button");
        expect(themeSwitcher).toBeInTheDocument();
    });
});
