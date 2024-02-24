import { useState } from "react";
import { useDarkMmode } from "./ContextApi";
import Header from "./Header";
import { PlayScreen, StartScreen } from "./Screens";

function App() {
  const [gameState, setGameState] = useState("start");
  const { isDarkMode } = useDarkMmode();

  const toggleGameState = () => {
    switch (gameState) {
      case "start":
        return <StartScreen start={() => setGameState("play")} />;
      case "play":
        return <PlayScreen end={() => setGameState("start")} />;
      default:
        throw new Error("Invalid game state " + gameState);
    }
  };

  return (
    <div
      data-theme={isDarkMode ? "dark" : "light"}
      className="bg-[var(--primary-color)]"
    >
      <Header />
      {toggleGameState()}
    </div>
  );
}

export default App;
