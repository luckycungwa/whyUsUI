import React from "react";

// Social Links function/ component
function SocialLink (){
  

    return (

        // Display social links in row  || Uncomment this section for default workig code!
        <>
        <div className="socialLink">
            <ul>
                <li>
                    <a href="#" className="icon">
                    <img src='./icon/facebook.png' className="icon"/>
                    </a>

                    <a href="#" className="icon">
                    <img src='./icon/twitter.png' className="icon"/>
                    </a>

                    <a href="#" className="icon">
                    <img src='./icon/dribbble.png' className="icon"/>
                    </a>

                    <a href="#" className="icon">
                    <img src='./icon/github.png' className="icon"/>
                    </a>
                </li>


            </ul>
        </div>

        </>
    );
};

 export default SocialLink;