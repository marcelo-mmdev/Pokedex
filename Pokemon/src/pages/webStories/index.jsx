import React from 'react'
import stilo from '../../styles/test.module.css'

const WebStories = () => {
  //  let playerhuw = msPlayer({root: "#ms-story-playerbd6dd43ddd61",widgetId: "563028d2-da0c-4ab8-97ff-bd6dd43ddd61"}) 
    
  return (
    <>
    <script async src="https://cdn.ampproject.org/amp-story-player-v0.js" ></script>
    <script src="https://js.makestories.io/player/StoryPlayer.js"></script>
    {/* <script>let playerhuw = msPlayer({root: "#ms-story-playerbd6dd43ddd61",widgetId: "563028d2-da0c-4ab8-97ff-bd6dd43ddd61"})</script> */}
    
        
        <div id="ms-story-playerbd6dd43ddd61">
          <div id={stilo.msfb}>
            <div  id={stilo.mss3} className={stilo.mpsa}>
              <div className={stilo.msmd}></div>
              <div className={stilo.msmd}></div>
              <div className={stilo.msmd}></div>
              <div className={stilo.msmd}></div>
              <div className={stilo.msmd}></div>
              <div className={stilo.msmd}></div>
              <div className={stilo.msmd}></div>
              <div className={stilo.msmd}></div>
              <div className={stilo.msmd}></div>
              <div className={stilo.msmd}></div>
            </div>
          </div>
        </div>
    </>
  )
}

export default WebStories
