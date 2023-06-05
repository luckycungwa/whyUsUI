import logo from './logo.svg';
import './App.css';
import SocialLink from './comp/SocialLink';
import Menu from './comp/Menu';
import Card from './comp/Card';
import Cover from './comp/Cover';

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
