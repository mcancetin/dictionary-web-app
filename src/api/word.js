import axios from "axios";

export const getWord = async (search) => {
    const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`,
    );

    return response.data;
};
