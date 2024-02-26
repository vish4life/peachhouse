// Importing Style Sheets
import './App.css';

// Importing Components
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Homepage';
import Menu from './Components/Menupage';
import Order from './Components/Orderpage';
import Reserve from './Components/Reservepage';
import Peach from './Components/Peach';

//Importing Images
import Cart from './Images/logos/cart.png'

// Importing React functions, userhooks etc.
import { Routes, Route, Link } from 'react-router-dom';
// import { useState } from 'react';
import CartDetails from './Components/CartDetails';
import { useDispatch, useSelector } from 'react-redux';
import {showCartOrNotFunc} from './Components/Data/Store';

function App() {
    const cartEmptyOrNot = useSelector(state => state.cart.totalCartItems);
    // const [showCart,setShowCart] = useState(false);
    const showCart = useSelector(state =>state.cart.showCart);
    console.log(showCart);
    const dispatch = useDispatch();
    return (
        <div className='app'>
            <header id="header">
                <Header />
                <nav id="nav">
                    <ul>
                        <li className='navList'>
                            <Link to="/" className='navLink'>Home</Link>
                        </li>
                        <li className='navList'>
                            <Link to="/menu" className='navLink'>Menu</Link>
                        </li>
                        <li className='navList'>
                            <Link to="/order" className='navLink'>Order</Link>
                        </li>
                        <li className='navList'>
                            <Link to="/reserve" className='navLink'>Reserve</Link>
                        </li>
                        <li className='navList'>
                            <Link to="/aboutpeach" className='navLink'>Peach</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <div id="cartIcon">
                <button id="cartBtn" onClick={()=>
                {
                    if(cartEmptyOrNot === 0 ){alert("Cart is Empty");console.log(showCart);}
                    else{
                        // setShowCart(true);
                        dispatch(showCartOrNotFunc(true));
                        // console.log("inside N block after set to true "+ showCart);
                    }
                }
                }>
                    <img id="cartImage" src={Cart} alt="Cart" />
                </button>
                {/* {showCart ? <CartDetails /> : null} */}
            </div>
            <main id="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/reserve" element={<Reserve />} />
                    <Route path="/aboutpeach" element={<Peach />} />
                </Routes>
                {showCart ? <CartDetails /> : null}
            </main>
            <footer id="footer">
                <Footer />
            </footer>
        </div>
    );
}
export default App;