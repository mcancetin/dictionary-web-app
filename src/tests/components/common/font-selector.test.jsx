import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { ThemeProvider } from "@/context/theme-context";
import FontSelector from "@/components/common/font-selector";

const mockedSetFontStyle = vi.fn();

vi.mock("@/hooks/useTheme.js", () => {
    {
        return {
            useTheme: () => {
                return {
                    theme: "light",
                    setFontStyle: mockedSetFontStyle,
                };
            },
        };
    }
});
describe("<FontSelector />", () => {
    it("renders the component", () => {
        render(<FontSelector />, { wrapper: ThemeProvider });
        screen.debug();
        const select = screen.getByRole("combobox");
        expect(select).toBeInTheDocument();
    });

    it("should render option elements", () => {
        render(<FontSelector />, { wrapper: ThemeProvider });
        const options = screen.getAllByRole("option");
        expect(options).toHaveLength(3);
    });

    it("should call setFontStyle", async () => {
        render(<FontSelector />, { wrapper: ThemeProvider });
        const select = screen.getByRole("combobox");

        const user = userEvent.setup();

        await user.selectOptions(select, "Mono");

        expect(select).toHaveValue("mono");
        expect(mockedSetFontStyle).toHaveBeenCalled(1);
    });
});
