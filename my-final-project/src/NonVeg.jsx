import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";

function NonVeg(){
  const nonVegProducts = useSelector(state => state.products.nonveg)
  const dispatch = useDispatch()
  const items = nonVegProducts.map((product,index) => 
          <li key={index}>{product.name} - ${product.price}----
          <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button><br></br><br></br>
          </li>
          
  )
    return(
        <>
          <h1> Non Veg Products</h1>
          <ol>{items}</ol>
        </>
    )
}
export default NonVeg;