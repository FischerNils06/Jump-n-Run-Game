import { enterFullscreen } from "../fullscreen";
import { useState, useEffect } from "react";
import { GameLoop } from "./gameloop";

const Startgame = () => {
  const [gameloop, setGameloop] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        enterFullscreen();
        setGameloop(true); // Zustand aktualisieren, um die Komponente neu zu rendern
      }

      if (gameloop && e.key === "w") {
        // Hier kannst du weitere Logik für den Gameloop einfügen
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [gameloop]); // 'gameloop' in den Abhängigkeiten aufnehmen

  return <>{gameloop && <GameLoop />}</>; // GameLoop nur rendern, wenn gameloop true ist
};

export { Startgame };
