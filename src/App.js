import logo from './logo.svg';
import './App.css';
import SocialLink from './comp/SocialLink';
import Menu from './comp/Menu';
import Card from './comp/Card';
import Cover from './comp/Cover';
import CTAButton from './comp/CTAButton';

function App() {
  return (
    <div className="body">
    <>
      <header className="App-header">
      {/* Logoo followed by menu links then social links */}
      <h1 className='logo'>WEB_</h1>
      
        <Menu/>
        <SocialLink/>
      </header>
      <container>
      

        <div className='bgImage'>
        <h2 className='titleImg'>A WEB DEV_</h2>
          <Cover/>
        </div>

        <div className='textBlock'>
<h2 className='title'>WHY US</h2>
<p>
Get exclusive content. This is a great way to entice people to sign up for your email list. You can offer exclusive content such as blog posts, discounts, or early access to new products or services.
Stay up-to-date. Let people know that they'll be the first to know about new products, sales, and events if they sign up for your email list.
Get help and support. If you offer products or services that require support, let people know that they can sign up for your email list to receive help and support.
Join a community. If you have a strong community of users, let people know that they can sign up for your email list to connect with other users and stay up-to-date on the latest news and events.
</p>
<CTAButton/>

        </div>
<div className='cardList'>
{/* Card section */}
<div>
<h2 className='title'>Our Late_ Work</h2>
</div>
<div className='card'>

          
          
        </div>
        <div className='card'>
          
          
        </div>
        <div className='card'>
          
          
        </div>

</div>
        
      </container>

      </>
    </div>
  );
}

export default App;
