import "./navbar.css";
import { useState } from "react";
import NavElements from "./navbar-elements";
import nimg from "../assets/images/nav.png";

function Navbar(){
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive); 
   };
  const navigation=[
    {
      first:"About",
      link:"https://www.amazon.com/stores/page/4EC94B4B-C421-48DF-8455-1A0CDF8CED53"
    },
    {
      first:"Games",
      link:"https://luckyegg.co/"
    },
    {
      first:"Amazon UK",
      link:"https://www.amazon.co.uk/stores/LuckyEgg/page/8B42D7A8-E9E6-4CF9-9344-8AA8A747F991?ref_=ast_bln"
    },
    {
      first:"Amazon USA",
      link:"https://www.amazon.com/stores/LuckyEgg/page/4EC94B4B-C421-48DF-8455-1A0CDF8CED53?ref_=ast_bln"
    },
    {
      first:"Socials",
      link:"https://www.pinterest.com/pin/create/button/?description=Lucky+Egg%3A+Home+page&media=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FS%2Fal-na-9d5791cf-3faf%2F648ca8bf-a3e8-4e72-a308-4c5b188f5048.png&url=https%3A%2F%2Fwww.amazon.com%2Fstores%2FLuckyEgg%2FHomepage%2Fpage%2F4EC94B4B-C421-48DF-8455-1A0CDF8CED53%3Fchannel%3DStore%2520share%2520-%2520Pinterest"
    },
  ]
  return(
    <div>
        <div className="nav-first-group">
            <h1 className="navbar-title">Lucky<span>Egg</span></h1>
            <p className="navbar-para">Games are more<br></br> than Fun</p>
            <div className="respo" onClick={ToggleClass}><img className="response" src={nimg}></img></div>
            <div className="nav-ele-group" id={isActive ? "dead" : "alive"}>
            <NavElements nav={navigation[0].first} link={navigation[0].link}></NavElements>
            <NavElements nav={navigation[1].first} link={navigation[1].link}></NavElements>
            <NavElements nav={navigation[2].first} link={navigation[2].link}></NavElements>
            <NavElements nav={navigation[3].first} link={navigation[3].link}></NavElements>
            <NavElements nav={navigation[4].first} link={navigation[4].link}></NavElements>
            </div>
            
        </div>
    </div>
  )
}
export default Navbar