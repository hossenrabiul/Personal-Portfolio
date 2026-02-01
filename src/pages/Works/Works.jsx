import React from "react";
import Headline from "../../components/Headline/Headline";
import "./Works.css";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineSecurity,
  MdRocketLaunch,
} from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";
import { FaCubes, FaLaptopCode, FaPalette, FaServer } from "react-icons/fa";
import { GrDocumentPerformance } from "react-icons/gr";
const Works = () => {
  return (
    <div className="works">
      <div>
        <Headline
          about="Services"
          title="Turns Your Ideas Into Revenue"
          primary={
            "I specialize in building applications that not only look great but drive real business results. Choose the perfect solution for your needs."
          }
        />
      </div>
      <div className="cards">
        <div className="card">
          <h6 className="tag poppins-500">Frontend</h6>
          <div className="icons">
            <FaPalette size={40} className="icon" />
          </div>
          <h4 className="poppins-300">Modern Frontend Development</h4>
          <p className="poppins-300">
            Interactive, responsive, and user-focused interfaces that work
            seamlessly across web, mobile, and tablet.
          </p>
          <ul className="services poppins-300">
            <li>
              <span className="poppins-600">•</span> React & Next.js powered
              interfaces
            </li>
            <li>
              <span className="poppins-600">•</span> Tailwind CSS & modern
              design systems
            </li>
            <li>
              <span className="poppins-600">•</span> Pixel-perfect responsive
              layouts
            </li>
            <li>
              <span className="poppins-600">•</span> Accessibility & SEO best
              practices
            </li>
          </ul>
          <div className="invesment">
            <p className="poppins-400">Investment</p>
            <h4 className="poppins-600">Starting at $1,500</h4>
          </div>
          <div className="timeline">
            <p className="poppins-400">Timeline</p>
            <h4 className="poppins-600">2 – 4 Weeks</h4>
          </div>
          <button className="poppins-400">Get Started</button>
        </div>

        <div className="card">
          <h6 className="tag poppins-500">Backend</h6>
          <div className="icons">
            <FaServer size={40} className="icon" />
          </div>
          <h4 className="poppins-300">Robust Backend Development</h4>
          <p className="poppins-300">
            Scalable and secure backend systems that power your applications
            with speed and reliability.
          </p>
          <ul className="services poppins-300">
            <li>
              <span className="poppins-600">•</span> Node.js & Express.js APIs
            </li>
            <li>
              <span className="poppins-600">•</span> Database design (SQL &
              MongoDB)
            </li>
            <li>
              <span className="poppins-600">•</span> Authentication &
              authorization
            </li>
            <li>
              <span className="poppins-600">•</span> Secure, optimized
              architecture
            </li>
          </ul>
          <div className="invesment">
            <p className="poppins-400">Investment</p>
            <h4 className="poppins-600">Starting at $2,000</h4>
          </div>
          <div className="timeline">
            <p className="poppins-400">Timeline</p>
            <h4 className="poppins-600">2 – 5 Weeks</h4>
          </div>
          <button className="poppins-400">Get Started</button>
        </div>

        <div className="card">
          <h6 className="tag poppins-500">Full Stack</h6>
          <div className="icons">
            <FaCubes size={40} className="icon" />
          </div>
          <h4 className="poppins-300">End-to-End Full-Stack Solutions</h4>
          <p className="poppins-300">
            Complete applications from frontend to backend — built to scale,
            perform, and grow with your business.
          </p>
          <ul className="services poppins-300">
            <li>
              <span className="poppins-600">•</span> React/Next.js +
              Node/Express
            </li>
            <li>
              <span className="poppins-600">•</span> SQL / MongoDB integration
            </li>
            <li>
              <span className="poppins-600">•</span> Deployment with Docker &
              AWS
            </li>
            <li>
              <span className="poppins-600">•</span> Ongoing support & feature
              updates
            </li>
          </ul>
          <div className="invesment">
            <p className="poppins-400">Investment</p>
            <h4 className="poppins-600">Starting at $3,000</h4>
          </div>
          <div className="timeline">
            <p className="poppins-400">Timeline</p>
            <h4 className="poppins-600">3 – 7 Weeks</h4>
          </div>
          <button className="poppins-400">Get Started</button>
        </div>
      </div>

      <div className="additional-services">
        <h3 className="poppins-300">Additional Services</h3>
        <div className="flex">
          <div className="additional-service">
            <div>
              <GrDocumentPerformance className="icon" />
            </div>
            <h4 className="poppins-400">Performance Optimization</h4>
            <p className="poppins-300">
              Make your existing apps lightning fast
            </p>
          </div>
          <div className="additional-service">
            <div>
              <MdOutlineSecurity className="icon" />
            </div>
            <h4 className="poppins-400">Security Audits</h4>
            <p className="poppins-300">
              Protect your applications from vulnerabilities
            </p>
          </div>
          <div className="additional-service">
            <div>
              <MdRocketLaunch className="icon" />
            </div>
            <h4 className="poppins-400">MVP Development</h4>
            <p className="poppins-300">
              Launch your idea quickly and cost-effectively
            </p>
          </div>
        </div>
        <div className="lets-discuss">
          <p className="discuss poppins-400">
            Not sure which service is right for you ? Let's discuss
          </p>
          <h5 className="shedule-button poppins-300">
            Schedule Free Consultation
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Works;
