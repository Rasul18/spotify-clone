import { PlayerContext } from "./context/PlayerContext";
import { useContext, useRef } from "react";
import './index.css'
import Player from "./components/player";
import Sidebar from "./components/Sidebar";
import Display from "./components/Display";

const App = () => {

  const {audioRef} = useContext(PlayerContext);

  return (
    <div className="h-screen bg-black">
      <div className="h-[90%] flex">
          <Sidebar />
          <Display/>
        </div>
      <Player />
      <audio ref = {audioRef} preload="auto"></audio>
    </div>
  );
}

export default App;