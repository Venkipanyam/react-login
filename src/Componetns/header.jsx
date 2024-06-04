import React from "react";
// import '/.header.css'
import './header.css'
function Header(){

    return(
        <div>
        
 
      <div class="nav-item">
        <input class="searcing" type="search"  placeholder="Search an items"/>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Profile</a>
        <a href="#">Contact</a>
        <a href="#" src="">Location</a>
       <button ><a href="">Logout</a></button>
       </div>
        
       <div class="menu">
        <div class="cart-count">0</div>
        <ion-icon  name="cart"  id="cart-icon" ></ion-icon>
       </div>

        </div>
    )
}


export default Header;