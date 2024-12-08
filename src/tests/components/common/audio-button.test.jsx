import { render, screen } from "@testing-library/react";

import AudioButton from "@/components/common/audio-button";

const mockUrl = "https://example.com/audio.mp3";

const Audio = window.HTMLAudioElement.prototype;

describe("<AudioButton/>", () => {
    beforeEach(() => {
        vi.spyOn(Audio, "play").mockImplementation(() => {});
        vi.spyOn(Audio, "pause").mockImplementation(() => {});
    });

    it("should render a button with play icon", () => {
        render(<AudioButton url={mockUrl} />);
        screen.debug();
        const button = screen.getByRole("button");
        const icon = screen.getByRole("img");
        expect(button).toBeInTheDocument();
        expect(icon).toBeInTheDocument();
    });

    it("should render nothing when empty url prop", () => {
        render(<AudioButton />);
        const button = screen.queryByRole("button");
        expect(button).not.toBeInTheDocument();
    });

    it("should play audio when button is clicked", () => {
        render(<AudioButton url={mockUrl} />);
        const button = screen.getByRole("button");
        button.click();
        expect(Audio.play).toHaveBeenCalled();
    });

    it("should not play again while playing", () => {
        render(<AudioButton url={mockUrl} />);
        const button = screen.getByRole("button");
        button.click();
        button.click();
        expect(Audio.play).toHaveBeenCalled(1);
    });
});
