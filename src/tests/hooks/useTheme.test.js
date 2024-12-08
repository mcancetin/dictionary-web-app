import { renderHook } from "@testing-library/react";
import { useTheme } from "@/hooks/useTheme";
import { ThemeProvider } from "@/context/theme-context";

describe("useTheme", () => {
    it("should return the theme context", () => {
        const { result } = renderHook(() => useTheme(), {
            wrapper: ThemeProvider,
        });
        expect(result.current).toBeDefined();
    });

    it("should throw an error if used outside of a ThemeProvider", () => {
        expect(() => {
            renderHook(() => useTheme());
        }).toThrowError(
            new Error("useTheme must be used within a ThemeProvider"),
        );
    });
});
