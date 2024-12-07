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

        const handlePlay = () => setIsPlaying(true);
        const handleEnded = () => setIsPlaying(false);

        audio.addEventListener("play", handlePlay);
        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.removeEventListener("play", handlePlay);
            audio.removeEventListener("ended", handleEnded);
        };
    }, [url]);

    const handleClick = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    };

    if (!url) return null;

    return (
        <button
            onClick={handleClick}
            type="button"
            className="group rounded-full bg-vivid-purple/40 p-6 transition-colors duration-100 hover:bg-vivid-purple"
        >
            <Play
                size={28}
                className="fill-vivid-purple text-vivid-purple group-hover:fill-white group-hover:text-white"
            />
        </button>
    );
}

AudioButton.propTypes = {
    url: PropTypes.string.isRequired,
};

export default AudioButton;
