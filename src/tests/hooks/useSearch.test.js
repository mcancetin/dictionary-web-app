import { act, renderHook } from "@testing-library/react";

import { useSearch } from "@/hooks/useSearch";

describe("useSearch", () => {
    it("should return the search state and handleSearch function", () => {
        const { result } = renderHook(() => useSearch());
        expect(result.current.search).toBe("");
        expect(result.current.handleSearch).toBeDefined();
    });

    it("should update the search state when handleSearch is called", () => {
        const { result } = renderHook(() => useSearch());
        act(() => {
            result.current.handleSearch({ target: { value: "test" } });
        });
        expect(result.current.search).toBe("test");
    });
});
