import "./joinus.css"
import logo from "../assets/images/logo.png"
function Joinus(){
    const jone=()=>{
        window.open("https://luckyegg.co/pages/apply-here", '_blank');
        
    }
    return(
        <div className="joinus-main-body">
            <center>
            <div className="joinus-body">
                <div className="joinus-content">
                <h1 className="joinus-head">Work with Us</h1>
                <p className="joinus-para">We are always looking for exceptionally Talented people to join our team</p>
                <div className="joinus-link-grp" onClick={jone}>
                <a className="joinus-btn">Join Us</a>
                </div>
                
                </div>
               <div className="joinus-image-grp">
               <img  className="joinus-img" src={logo} ></img>
               </div>
                
            </div>
            </center>
        </div>
    )
}
export default Joinus;