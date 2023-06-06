import React from "react";

// Social Links function/ component
function Menu (){

    return (
        // Display social links in row
        <>
        <div className="">
            <ul>
                <li className="menuLink">
                    <a href="#"  className="menuLink">
                    <p>Port_</p>
                    </a>
                </li>
                <li className="menuLink">
                    <a href="#" className="menuLink">
                    <p>About_</p>
                    </a>
                </li>
                <li>
                    <a href="#" className="menuLink">
                    <p>Blog_</p>
                    </a>
                </li>
                <li>
                    <a href="#"  className="menuLink">
                    <p>Rev_</p>
                    </a>
                </li>


            </ul>
        </div>

        </>
    );
};

 export default Menu;