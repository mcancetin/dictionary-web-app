import AudioButton from "@/components/common/audio-button";
import PropTypes from "prop-types";
import { memo } from "react";

function SearchResult({ data }) {
    if (!data) {
        return null;
    }

    const word = data?.[0];

    return (
        <div className="pt-12 dark:text-white">
            <div className="flex items-center justify-between pb-10">
                <div className="flex flex-col gap-2">
                    <span className="text-heading-l font-bold">
                        {word.word}
                    </span>
                    <span className="text-heading-m text-vivid-purple">
                        {word.phonetic}
                    </span>
                </div>
                <AudioButton url={word.phonetics[0]?.audio} />
            </div>

            <div className="pb-10">
                <ul className="space-y-10">
                    {word.meanings.map((meaning, index) => (
                        <li key={index}>
                            <div className="flex items-center gap-6 pb-10">
                                <span className="text-heading-m">
                                    {meaning.partOfSpeech}
                                </span>

                                <div className="w-full">
                                    <hr className="mt-1" />
                                </div>
                            </div>

                            <span className="block pb-6 text-heading-s text-medium-gray">
                                Meaning
                            </span>

                            <ul className="list-inside list-disc">
                                {meaning.definitions.map(
                                    (definition, index) => (
                                        <li
                                            key={index}
                                            className="mark pb-4 pl-6 marker:text-vivid-purple"
                                        >
                                            {definition.definition}
                                        </li>
                                    ),
                                )}
                            </ul>

                            {meaning.synonyms.length > 0 && (
                                <div className="flex items-center gap-6 pt-16">
                                    <span className="block text-heading-s text-medium-gray">
                                        Synonyms
                                    </span>

                                    <p>
                                        {meaning.synonyms.map(
                                            (synonym, index) => (
                                                <span
                                                    key={index}
                                                    className="pr-2 text-body-m font-bold text-vivid-purple"
                                                >
                                                    {synonym}
                                                </span>
                                            ),
                                        )}
                                    </p>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {word.sourceUrls.length > 0 && (
                <>
                    <div className="flex items-center gap-4 border-t border-very-light-gray py-5">
                        <span className="block text-sm text-medium-gray">
                            Source
                        </span>

                        <p>
                            {word.sourceUrls.map((sourceUrl, index) => (
                                <a
                                    key={index}
                                    href={sourceUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="pr-2 text-sm text-vivid-purple underline"
                                >
                                    {sourceUrl}
                                </a>
                            ))}
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}

SearchResult.propTypes = {
    data: PropTypes.array,
};

export default memo(SearchResult);
