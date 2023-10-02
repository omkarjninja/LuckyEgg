import "./navbar.css";

function NavElements(props){
    const go=()=>{
        window.open(props.link, '_blank');
        
    }
    return(
        <div className="navy">
            <div className="nav-ele navy" onClick={go}>
                <a className="linkin" target="_blank">{props.nav}</a>
                {/* <p>{props.nav}</p> */}
            </div>
        </div>
    )
}
export default NavElements