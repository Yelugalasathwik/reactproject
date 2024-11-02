import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";

function Veg(){
  const vegProducts = useSelector(state => state.products.veg)
  const dispatch = useDispatch()
  const items = vegProducts.map((product,index) => 
    <li key={index}>{product.name} - ${product.price}----
    <button onClick={()=>dispatch(addToCart(product))}>Add to cart</button><br></br><br></br>
    </li>
    
  )

    return(
        <>
          <h1>Veg products</h1>
          <ol>
            {items}
          </ol>
        </>
    ) 
}
export default Veg;