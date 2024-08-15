import React from 'react'

export default function controls() {
  return (
    <div className="controlsContainer">
            
        <div className="emptyContainer">
            <img id="songPic" src="./playing.gif" alt="gif"/>
            <div className="songInfo">
                <span id="masterSongName">SongName</span>
                <span id="masterArtists">Artist</span>                    
            </div>
        </div>
        
        <div className="playBack">
            <div className="playBackButtons">
                <i className="fa-solid fa-2x fa-backward-step" id="next"></i>
                <i className="fa-regular fa-2x fa-circle-play" id="masterPlay"></i>
                {/* <i className="fa-solid fa-2x fa-forward-step" id="previous" height="10px"></i> */}
                <i className="fa-solid fa-2x fa-forward-step height=10px" id="previous" ></i>
            </div>
            
            <div className="progressBar">
                <span id="currentTime">0:00</span>
                <input type="range" id="Progressbar" value="0" min="0" max="100"/>
                <span id="duration">0:00</span>
            </div>
        </div>

        <div className="optionsContainer">
            {/* <div id="unkown">Unkown</div>
            <div id="queue">Queue</div>
            <div id="connectToADevice">Connect to a device</div>
            <div id="volume">Volume</div>  */}
        </div>
        
    </div>
  )
}
