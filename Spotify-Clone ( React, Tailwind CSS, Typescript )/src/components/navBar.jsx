import React from 'react'

export default function navBar() {
  return (
        <div className="topContainer">
            <div className="GSButtonsContainer">
                <button id="smallerButton">"S"</button>
                <button id="greaterButton">"G"</button>
            </div>

            <div className="profileContainer">
                <button id="explorePremium">Explore Premium</button>
                <button id="installApp">Install App</button>
                <button id="bellIcon">B</button>
                <button id="profile">P</button>
            </div>
      </div>
  )
}
