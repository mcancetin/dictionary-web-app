import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import ThemeSwitcher from "@/components/common/theme-switcher";
import { ThemeProvider } from "@/context/theme-context";

const mockedHandleToggleTheme = vi.fn();

vi.mock("@/hooks/useTheme.js", () => {
    {
        return {
            useTheme: () => {
                return {
                    theme: "light",
                    handleToggleTheme: mockedHandleToggleTheme,
                };
            },
        };
    }
});
describe("<ThemeSwitcher />", () => {
    it("renders the component", () => {
        render(<ThemeSwitcher />, { wrapper: ThemeProvider });
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("run handleToggleTheme function when clicked", async () => {
        render(<ThemeSwitcher />, { wrapper: ThemeProvider });

        const button = screen.getByRole("button");

        const user = userEvent.setup();
        await user.click(button);

        expect(mockedHandleToggleTheme).toHaveBeenCalled();
    });
});
