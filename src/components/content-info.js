import "./content-info.css"
import tt from "../assets/images/tt.png"
import aws from "../assets/images/aws.png"

function Info(){
    return(
        <div className="info-body">
            <div className="info-container">
            <h2 className="info-text">We create Fast-paced and frantic games unlike anything you've played before</h2>
            </div>
            <div>
                <p className="info-small-text">It has enabled the company to keep Supercharing Entertainment for audience</p>
            </div>
            <div className="tiktok">
            <img className="tik-tok" src={tt} ></img>
            </div>
            <div className="amazon">
            <img className="aws" src={aws} ></img>
            </div>
        </div>
    )
}
export default Info;