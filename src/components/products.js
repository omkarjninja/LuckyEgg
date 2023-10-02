import "./products.css"
import pro from "../assets/images/items.png"
import ex from "../assets/images/example.jpg"
import ex2 from "../assets/images/exam2.png"

function Products(){
    return(
        <div>
            <div className="products-group">
            <h1 className="products-head">Discover our Products</h1>
            </div>
            <div>
                <img className="pro-img" src={pro} width="1000px"></img>
            </div>
            <div>
                <img className="pro-image" src={ex} width="100%"></img>
            </div>
            <div>
                <img className="pro-image" src={ex2} width="100%"></img>
            </div>
        </div>
    )
}
export default Products;