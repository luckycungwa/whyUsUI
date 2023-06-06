import logo from "./logo.svg";
import "./App.css";
import SocialLink from "./comp/SocialLink";
import Menu from "./comp/Menu";
import Card from "./comp/Card";
import Cover from "./comp/Cover";
import CTAButton from "./comp/CTAButton";
import AboutSection from "./comp/AboutSection";

function App() {
  return (
    <div className="body">
      <>
        <header className="App-header">
          <h1 className="logo">WEB_</h1>
          <Menu />
          <SocialLink />
        </header>
        <container className="section">
          <>
            <div className="">
              <Cover />
            </div>
          </>
        </container>
        
        <container className="section">
          <>
            <div className="">
              <div className="">
                <AboutSection />
                <CTAButton />
              </div>
              <div className="cardSection">
                <Card />
                <CTAButton />
              </div>
            </div>
          </>
        </container>

       
      </>
    </div>
  );
}

export default App;
