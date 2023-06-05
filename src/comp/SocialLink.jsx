import React from "react";

// Social Links function/ component
function SocialLink (){
    const icons = [
        {
            'id': 1,
            'tag': 'facebook',
            'image': './icon/facebook.com.png'
        },
        {
            'id': 2,
            'tag': 'twitter.com',
            'image': './icon/twitter.png'
        },
        {
            'id': 3,
            'tag': 'whatsApp.com',
            'image': './icon/whatsapp.png'
        },
        {
            'id': 4,
            'tag': 'dribbble.com',
            'image': './icon/dribbble.png'
        }
        
        ];


    return (

        // Display social links in row  || Uncomment this section for default workig code!
        <>
        <div className="socialLink">
            <ul>
                <li>
                    <a href="#" className="menuLink">
                    <img src='./icon/facebook.png'/>
                    </a>

                    <a href="#" className="icon">
                    <img src='./icon/facebook.png'/>
                    </a>

                    <a href="#" className="icon">
                    <img src='./icon/facebook.png'/>
                    </a>

                    <a href="#" className="icon">
                    <img src='./icon/facebook.png'/>
                    </a>
                </li>


            </ul>
        </div>

        </>
    );
};

 export default SocialLink;