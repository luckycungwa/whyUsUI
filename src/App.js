import logo from './logo.svg';
import './App.css';
import SocialLink from './comp/SocialLink';
import Menu from './comp/Menu';

function App() {
  return (
    <div className="">
    
      <header className="App-header">
      {/* Logoo followed by menu links then social links */}
      <h1 className='logo'>WEB_</h1>
      <>
        <Menu/>
        <SocialLink/>

        </>
      </header>
    </div>
  );
}

export default App;
