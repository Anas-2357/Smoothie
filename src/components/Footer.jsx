import React from "react";

function Footer() {
    return (
        <footer>
            <div className="footer_first">
                <h2>STAY IN THE LOOP</h2>
            </div>
            <div className="footer_second">
                <input type="mail" placeholder="Enter Your Mail"></input>
                <a>SUBMIT</a>
            </div>
            <div className="footer_third">
                <div>SHOP</div>
                <div>ABOUT</div>
                <div>SUPPORT</div>
            </div>
        </footer>
    );
}

export default Footer;
