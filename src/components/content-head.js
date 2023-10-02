import "./content.css"
import logo from "../assets/images/logo.png"
import vifeo from "../assets/videos/vdo.mp4"
import { useState } from "react";

function ContentHead(){
    // const [mouse, setMouse] = useState("false");
    // const ChangeClass = () => {
    //     setMouse(!mouse); 
    //  };
    const legg=()=>{
        window.open("https://www.instagram.com/p/Cxqka3To2t4/", '_blank');
        
    }
    return(
        <div>
            <div>
                <h1 className="content-title">We're Lucky Egg and we make Ridiculusly fun party games!</h1>
            </div>
            <div className="para-group">
            <p>Hover Me!</p>
            <p>For Surprise</p>
            </div>
            {/* <img className="logo" src={logo} onMouseEnter={ChangeClass}></img>
            <video className="vvd" src={vifeo} autoPlay muted controls id={mouse ? "alive-video" :"dead-video" }></video> */}
            <video className="logo" onClick={legg}
                poster={logo}
            onMouseOver={event => event.target.play()}
            onMouseOut={event => event.target.pause()}
                src={vifeo} muted>
</video>
           <p className="scroll-text">Scroll to continue</p>
        </div>
    )
}
export default ContentHead;