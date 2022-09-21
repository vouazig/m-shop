import {useRef} from "react";
import {HiMenu} from "react-icons/hi";
import {HiX} from "react-icons/hi";
import { FcApproval} from "react-icons/fc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {useCart} from "react-use-cart";


import { Link } from "react-router-dom";
import '../layout/App.css'
import SignIn from "../popup/SignIn";
import SignUp from "../popup/SignUp";
import { useState } from "react";


const Navbar = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopin, setButtonPopin] = useState(false);

  const navRef = useRef();
  const {totalUniqueItems} = useCart();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

    return (
      <>
        <header className="main-nav">
            <Link to="/" id="myshop">My_shop</Link>
            <div >
              <FcApproval/><Link  to={"/signup"} className="seller"  > Sell at m-shop</Link>
              </div>
            <nav ref={navRef}>
              <div className="buttons">
                <div> <button type="button" className="button-user" onClick={() => setButtonPopup(true)}>Sign up</button>
                <SignUp trigger={buttonPopup} setTrigger={setButtonPopin}></SignUp>
                </div>
                <div><button type="button" className="button-user" id="log" onClick={() => setButtonPopin(true)}>Login</button>
                <SignIn trigger={buttonPopin} setTrigger={setButtonPopin}></SignIn>
                </div>
              </div>
            </nav>   
        </header>
        <header className="category-nav">
             <nav ref={navRef}>
            <a href="/#">canapé</a>
            <a href="/#">Chair</a>
            <a href="/#">Table</a>
            <a href="/#">Bureau</a>
            <a href="/#">Rangement</a>
            <a href="/#">Luminaire</a>
            <a href="/#">Tapis</a>
            <a href="/#">Lit</a>
            
            <span href=""> <AiOutlineShoppingCart size={'25px'}/>({totalUniqueItems})</span>
              


            <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <HiX/>
            </button>
            </nav>
            
            <button onClick={showNavBar} className="nav-btn">
            <HiMenu/>
            </button>   
            
        </header>
        </>


    )
  };
  
  export default Navbar;
  
