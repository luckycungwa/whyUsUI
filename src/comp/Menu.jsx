import React from "react";

// Social Links function/ component
function Menu (){
    const images = [
        './icon/facebook.png',
        './icon/whatsapp.png',
        './icon/dribbble.png',
        './icon/github.png',
        './icon/twitter.png',

      ];
    

    return (
        // Display social links in row
        <>
        <div className="menuList">
            <ul>
                <li>
                    <a href="#"  className="menuLink">
                    <p>Port_</p>
                    </a>
                </li>
                <li>
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