import { Play } from "lucide-react";
import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";

function AudioButton({ url }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (!url) return;

        const audio = new Audio(url);
        audioRef.current = audio;

        const handleStart = () => setIsPlaying(true);
        const handleEnd = () => setIsPlaying(false);

        audio.addEventListener("play", handleStart);
        audio.addEventListener("pause", handleEnd);

        return () => {
            audio.removeEventListener("play", handleStart);
            audio.removeEventListener("pause", handleEnd);
        };
    }, [url]);

    if (!url) return null;

    const handleClick = () => {
        if (!audioRef.current) return;

        if (!isPlaying) {
            audioRef.current.play();
        }
    };

    return (
        <button
            onClick={handleClick}
            type="button"
            className="group rounded-full bg-vivid-purple/40 p-6 transition-colors duration-100 hover:bg-vivid-purple"
        >
            <Play
                role="img"
                size={28}
                className="fill-vivid-purple text-vivid-purple group-hover:fill-white group-hover:text-white"
            />
        </button>
    );
}

AudioButton.propTypes = {
    url: PropTypes.string,
};

export default AudioButton;
