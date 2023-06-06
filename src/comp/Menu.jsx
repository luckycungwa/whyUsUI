import React from "react";

// Social Links function/ component
function Menu (){

    return (
        // Display social links in row
        <>
        <div className="navLink">
            <ul>
                <li className="menuLink">
                    <a href="#"  className="menuLink">
                    <p>SERVICES</p>
                    </a>
                </li>
                <li className="menuLink">
                    <a href="#" className="menuLink">
                    <p>PORTFOLIO</p>
                    </a>
                </li>
                <li>
                    <a href="#" className="menuLink">
                    <p>ABOUT</p>
                    </a>
                </li>
                <li>
                    <a href="#"  className="menuLink">
                    <p>CONTACT</p>
                    </a>
                </li>


            </ul>
        </div>

        </>
    );
};

 export default Menu;