import "./App.css";
import mobileWeb from "./assets/images/image-web-3-mobile.jpg";
import retroPcs from "./assets/images/image-retro-pcs.jpg";
import gamingGrowth from "./assets/images/image-gaming-growth.jpg";
import topLaptops from "./assets/images/image-top-laptops.jpg";

function App() {
  return (
    <>
      <div className="container">
        <div>
          <img className="mobile-web" src={mobileWeb} alt="" />
          <h1>The Bright Future of Web 3.0?</h1>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <a className="button" href="#">
            Read more
          </a>
        </div>
        <div className="new-card">
          <div className="new-card-section">
            <h2>New</h2>
            <h3>Hydrogen VS Electric Cars</h3>
            <p> Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div className="new-card-section">
            <h3>The Downside of AI Artistry</h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className="new-card-section">
            <h3>Is VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
        <div className="card">
          <img className="card-image" src={retroPcs} alt="" />
          <p>01</p>
          <h1>Reviving Retro PCs</h1>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
        <div className="card">
          <img className="card-image" src={topLaptops} alt="" />
          <p>02</p>
          <h1>Top 10 Laptops of 2022</h1>
          <p> Our best picks for various needs and budgets.</p>
        </div>
        <div className="card">
          <img className="card-image" src={gamingGrowth} alt="" />
          <p>03</p>
          <h1>The Growth of Gaming</h1>
          <p> How the pandemic has sparked fresh opportunities.</p>
        </div>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
    </>
  );
}

export default App;
