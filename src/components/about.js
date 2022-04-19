import React from 'react'
import './about.scss';

export default function About() {
  return (
    <div>
         <section id="resume" className="resume">
         {/* src="https://avatars.githubusercontent.com/u/62455784?v=4" */}
         
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
          <p>Below are some of the major projects i have worked on as of june 2021.</p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Andrew Irorere</h4>
              <p><em>Innovative and Practical with 3+ years of experience in web development</em></p>
              <ul>
                <li>Benin-city, Edo State, Nigeria</li>
                <li>+2348164078594</li>
                <li>andreyscott301@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>The complete React Developer course</h4>
              <h5>2021</h5>
              <p><em>ZTM Academy</em></p>
              <p></p>
            </div>
            <div className="resume-item">
              <h4>completed The JavaScript Algorithms and Data Structures</h4>
              <h5>2021</h5>
              <p><em>FreeCodeCamp</em></p>
              <p></p>
            </div>
            <div className="resume-item">
              <h4>BSc. Metallurgical Material Engineering </h4>
              <h5>2019 till present</h5>
              <p><em>University of Benin(UNIBEN) Nigeria</em></p>
              <p></p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>currently Freelancing at Upwork</h4>
              <h5>2021 - Present</h5>
              <p><em>Remote</em></p>
              <ul>
                <li>Front-end JavaScript developer</li>
                <li>React.js FrameWork</li>
                <li><a href="https://www.upwork.com/freelancers/~013356e330bd3d9daa">Upwork profile</a></li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Create working on  a React Native version of the Uber driving app. An uber Clone to be exact </h4>
              <h5>2021</h5>
              <ul>
                <em>Uber</em>
                <li><a href="https://github.com/andreyscott/uber">Click Here</a></li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Created a beauty salon webSite</h4>
              <h5>2020</h5>
              <p><em>Benin city</em></p>
              <ul>
                <em>Ej-touch</em>
                <li><a href="https://beauty-salon-e2958.web.app/">Check it out</a></li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>my Resume</h4>
              <h5>2021</h5>
              <ul>
                <em>Andrew Irorere</em>
                <li><a
                    href="https://drive.google.com/file/d/1BLyV5BTTfsaaQuBM0wU7kauM9iAOkuvU/view?usp=sharing">Here</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    </div>
  )
}
