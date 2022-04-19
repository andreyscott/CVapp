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
import  data  from "./data.json";

function App() {
  return (
    <div className="App">
     

     {/* ====== =Hero Section =======  */}
    <section id="hero" className="headposition">
      <div className="container" >
        <h1>Andrey Scott</h1>
        <p className="type">
       <strong className="">
       I'm
       </strong>    <Typewriter
						options={{
							strings: [ "Web Developer🚀", "Seo Expert👨‍💻.", "Life time learner📱."],
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
							href={data.social.linkedIn}
							className="social__link"
							target="_blank"
							aria-label="LinkedIn"
						>
							<LinkedinIcon className="social__icon" width={27} />
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
