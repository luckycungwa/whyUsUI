import React from "react";

// Social Links function/ component
function Menu (){
    // const images = [
    //     './icon/facebook.png',
    //     './icon/whatsapp.png',
    //     './icon/dribbble.png',
    //     './icon/github.png',
    //     './icon/twitter.png',

    //   ];
    

    return (
        // Display social links in row
        <>
        <div className="">
            <ul>
                <li>
                    <a href="#">
                    <p className="menuLink">Port_</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <p className="menuLink">About_</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <p className="menuLink">Blog_</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                    <p className="menuLink">Rev_</p>
                    </a>
                </li>


            </ul>
        </div>

        </>
    );
};

 export default Menu;