import Typewriter from "typewriter-effect";
import {
	EmailIcon,
	GithubIcon,
	LinkedinIcon,
	TwitterIcon,
	InstagramIcon,
} from "./icons";
import './App.scss';
import About from "./components/about";

function App() {
  return (
    <div className="App">
     

     {/* ====== =Hero Section =======  */}
    <section id="hero" className="d-flex flex-column justify-content-center headposition">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Andrey Scott</h1>
        <p className="type">
       <strong className="">
       I'm
       </strong>    <Typewriter
						options={{
							strings: [ "Web Developer🚀", "Seo Expert👨‍💻.", "  Mobile Dev 📱."],
							autoStart: true,
							loop: true,
							wrapperClassName: "landing-page__role",
							loop: true,
							cursorClassName: "landing-page__cursor",
						}}
					/>
        </p>
        <div className="social-links">
          
          <a
            href="https://www.linkedin.com/in/andrew-irorere/"
            target="_blank"
            className="linkedin"
            >
            <LinkedinIcon />

          </a>
          <a
            href="https://twitter.com/Andreyscott5"
            target="_blank"
            className="twitter"
            >
            <TwitterIcon />

          </a>
          <a
            href="https://github.com/andreyscott"
            target="_blank"
            className="github"
            >
            <GithubIcon />

          </a>
          <a
            href="https://www.instagram.com/_ai.dev/"
            target="_blank"
            className="instagram"
            >
            <InstagramIcon />

          </a>
        </div>
      </div>
    </section>
    
     {/* End Hero  */}
     <About />

      
    </div>
  );
}

export default App;
