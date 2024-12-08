import axios from "axios";
import { getWord } from "@/api/word";

import { mockedWord } from "@/tests/__mocks__";

vi.mock("axios");

describe("Word API", () => {
    beforeEach(() => {
        axios.get.mockReset();
    });

    it("should fetch a word", async () => {
        axios.get.mockResolvedValue({ data: mockedWord });
        const word = await getWord("etc");

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(
            "https://api.dictionaryapi.dev/api/v2/entries/en/etc",
        );
        expect(word).toStrictEqual(mockedWord);
    });
});
