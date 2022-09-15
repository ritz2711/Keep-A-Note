
import React from "react";

const currentYear=new Date().getFullYear();
function Footer(){
    return (
        <footer>
            <p>CopyRight c {currentYear}</p>
        </footer>
    );
}
export default Footer;