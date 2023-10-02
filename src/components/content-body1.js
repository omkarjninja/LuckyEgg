import "./content-body.css"
import "./navbar.css"

function SecondPage(){
    const gone=()=>{
        window.open("https://luckyegg.co/", '_blank');
        
    }
    return(
        <div className="main-body">
            <div className="content-body"> 
                <h1 className="content-body-text">We are always looking to create fun new Games</h1>
            </div>
            <center>
            <div className="content-body-link navy" onClick={gone}>
            <a className="lmao">Official Site</a>
            </div>
            </center>
           
            

        </div>
    )
}
export default SecondPage;