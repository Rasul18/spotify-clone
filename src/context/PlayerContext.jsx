import { createContext, use, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext(); 

const PlayerContextProvider = (props) => {

    const audioRef = useRef();
    const seekBg = useRef();
    const seekBar = useRef();

    const [track,setatrack] = useState(songsData[0]);
    const [playStatus,setplayStatus] = useState(false);
    const [time, settime] = useState({
        currentTime:{
            seconds:0,
            minutes:0
        },
        totalTime:{
            seconds:0,
            minutes:0
        }
    });

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,
        setatrack,
        playStatus,
        setplayStatus,
        time,
        settime
    }

    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}    
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;