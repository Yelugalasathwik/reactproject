import { BrowserRouter,Link,Route,Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./assets/Cart";
import PurchaseHistory from "./PurchaseHistory";

import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import "./App.css";
import { useSelector } from "react-redux";

function App(){
    
    const cart = useSelector((state) => state.cart);
    const totalItems = cart.reduce((sum, item) => sum +item.quantity, 0);

    return(
        <>
            <h1>this is edited by someone</h1>
          <BrowserRouter>
                <Link to='/home'>Home</Link>
                <Link to='/veg'>Veg</Link>
                <Link to='/nonveg'>Non Veg</Link>
                <Link to='/cart'>Cart ({totalItems})</Link>
                <Link to='/purchasedhistory'>Purchase History</Link>
                <Link to='/aboutus'>AboutUs</Link>
                <Link to='/contactus'>ContactUs</Link>

                <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/veg" element={<Veg/>} />
                    <Route path="/nonveg" element={<NonVeg/>} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route path="/purchasedhistory" element={<PurchaseHistory/>} />
                    <Route path="/aboutus" element={<AboutUs/>} />
                    <Route path="/contactus" element={<ContactUs/>} />
                </Routes>
          </BrowserRouter>  
        </>
    )
}
export default App;
