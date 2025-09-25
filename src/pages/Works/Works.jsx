import React from "react";
import Headline from "../../components/Headline/Headline";
import "./Works.css";
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdRocketLaunch,
} from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";
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
          <h6 className="tag poppins-500">Most Popular</h6>
          <div className="icons">
            <CiMobile2
              style={{ fill: "#fff", stroke: "#fff" }}
              size={40}
              className="icon poppins-600"
            />
          </div>
          <h4 className="poppins-300">Web Application Development</h4>
          <p className="poppins-300">
            Custom web applications that scale with your business
          </p>
          <ul className="services poppins-300">
            <li>
              <span className="poppins-600">•</span> React, Next.js, and modern
              frameworks
            </li>
            <li>
              <span className="poppins-600">•</span> Responsive design for all
              devices
            </li>
            <li>
              <span className="poppins-600">•</span> SEO optimization for better
              visibility
            </li>
            <li>
              <span className="poppins-500">•</span> High-performance and secure
              architecture
            </li>
          </ul>
          <div className="invesment">
            <p className="poppins-400">Invesment </p>
            <h4 className="poppins-600">Starting at $2,500</h4>
          </div>
          <div className="timeline">
            <p className="poppins-400">Timeline </p>
            <h4 className="poppins-600">2 - 6 Weeks</h4>
          </div>
          <button className="poppins-400">Get Started</button>
        </div>
        <div className="card">
          <h6 className="tag poppins-500">Premium</h6>
          <div className="icons">
            <CiMobile2
              style={{ fill: "#fff", stroke: "#fff" }}
              size={40}
              className="icon poppins-600"
            />
          </div>
          <h4 className="poppins-300">Web Application Development</h4>
          <p className="poppins-300">
            Custom web applications that scale with your business
          </p>
          <ul className="services poppins-300">
            <li>
              <span className="poppins-600">•</span> React, Next.js, and modern
              frameworks
            </li>
            <li>
              <span className="poppins-600">•</span> Responsive design for all
              devices
            </li>
            <li>
              <span className="poppins-600">•</span> SEO optimization for better
              visibility
            </li>
            <li>
              <span className="poppins-600">•</span> High-performance and secure
              architecture
            </li>
          </ul>
          <div className="invesment">
            <p className="poppins-400">Invesment </p>
            <h4 className="poppins-600">Starting at $2,500</h4>
          </div>
          <div className="timeline">
            <p className="poppins-400">Timeline </p>
            <h4 className="poppins-600">2 - 6 Weeks</h4>
          </div>
          <button className="poppins-400">Get Started</button>
        </div>
        <div className="card">
          <h6 className="tag poppins-500">Specialized</h6>
          <div className="icons">
            <CiMobile2
              style={{ fill: "#fff", stroke: "#fff" }}
              size={40}
              className="icon poppins-600"
            />
          </div>
          <h4 className="poppins-300">Web Application Development</h4>
          <p className="poppins-300">
            Custom web applications that scale with your business
          </p>
          <ul className="services poppins-300">
            <li>
              <span className="poppins-600">•</span> React, Next.js, and modern
              frameworks
            </li>
            <li>
              <span className="poppins-600">•</span> Responsive design for all
              devices
            </li>
            <li>
              <span className="poppins-600">•</span> SEO optimization for better
              visibility
            </li>
            <li>
              <span className="poppins-600">•</span> High-performance and secure
              architecture
            </li>
          </ul>
          <div className="invesment">
            <p className="poppins-400">Invesment </p>
            <h4 className="poppins-600">Starting at $2,500</h4>
          </div>
          <div className="timeline">
            <p className="poppins-400">Timeline </p>
            <h4 className="poppins-600">2 - 6 Weeks</h4>
          </div>
          <button className="poppins-400">Get Started</button>
        </div>
      </div>

      <div className="additional-services">
        <h3 className="poppins-300">Additional Services</h3>
        <div className="flex">
          <div className="additional-service">
            <div>
              <MdRocketLaunch className="icon" />
            </div>
            <h4 className="poppins-400">Performance Optimization</h4>
            <p className="poppins-300">
              Make your existing apps lightning fast
            </p>
          </div>
          <div className="additional-service">
            <div>
              <MdRocketLaunch className="icon" />
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
