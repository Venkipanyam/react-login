import React from "react";
import './Footer.css'
function Footer(){

    return(
        <div className="Footerbar">
        <footer className="foot">
            <a href="#">Home</a>
            <a href="#">Social Media
            <img src="Components/images/wats.jpg" alt="" />
            </a>
           <dvi>
           <a href="#">Contact</a>
          <a href="https://mail.google.com/mail/u/0/#inbox"><br/>
            venki.panyam995@gmail.com
          </a><br/> 
          <a>9391435445</a> 
           </dvi>
           <div className="Address">
           <a href="#">Address</a>
           
           <address>
            <ul>
                <li>Name:VenkiPanyam</li>
                <li>Village:Kowlur</li>
                <li>Mandal:Panyam(M)</li>
                <li>Distic:Kurnool(Dt)</li>
            </ul>
           </address>
           </div>
        </footer>
        </div>
    )
}

export default Footer;