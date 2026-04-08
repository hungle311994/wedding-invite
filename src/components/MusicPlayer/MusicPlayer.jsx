import { useEffect, useRef, useState } from "react";
import musicFile from "../../assets/audios/le_duong.mp3";
import FloatingButton from "../Common/FloatingButton";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Attempt auto-play might fail due to browser policies
    const attemptAutoPlay = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.log(
          "Autoplay blocked by browser. User interaction required.",
          err,
        );
      }
    };

    // Minor delay to ensure component readiness
    const timer = setTimeout(attemptAutoPlay, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="music-player">
      <FloatingButton 
        onClick={togglePlay}
        isActive={isPlaying}
        className="music-btn"
        ariaLabel="Toggle Music"
      >
        {isPlaying ? (
          <div className="music-bars">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
             <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
          </svg>
        )}
      </FloatingButton>
      <audio 
        ref={audioRef} 
        src={musicFile} 
        loop 
      />
    </div>
  );
};

export default MusicPlayer;
