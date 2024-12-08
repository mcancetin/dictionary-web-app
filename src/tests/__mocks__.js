export const mockedWord = [
    {
        word: "etc",
        phonetic: "/ˌɛt ˈsɛt(ə)ɹə/",
        phonetics: [
            {
                text: "/ˌɛt ˈsɛt(ə)ɹə/",
                audio: "https://api.dictionaryapi.dev/media/pronunciations/en/etc-us.mp3",
                sourceUrl:
                    "https://commons.wikimedia.org/w/index.php?curid=1239807",
                license: {
                    name: "BY-SA 3.0",
                    url: "https://creativecommons.org/licenses/by-sa/3.0",
                },
            },
        ],
        meanings: [
            {
                partOfSpeech: "adverb",
                definitions: [
                    {
                        definition: "Alternative form of etc.",
                        synonyms: [],
                        antonyms: [],
                    },
                ],
                synonyms: [],
                antonyms: [],
            },
        ],
        license: {
            name: "CC BY-SA 3.0",
            url: "https://creativecommons.org/licenses/by-sa/3.0",
        },
        sourceUrls: ["https://en.wiktionary.org/wiki/etc"],
    },
];

export const mockedWordError = {
    title: "No Definitions Found",
    message:
        "Sorry pal, we couldn't find definitions for the word you were looking for.",
    resolution:
        "You can try the search again at later time or head to the web instead.",
};
