import React from "react";
import "./Contact.css";
import Headline from "../../components/Headline/Headline";
import { LuCalendar } from "react-icons/lu";
import { CgMail } from "react-icons/cg";
import { FiPhone } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
export const Contact = () => {
  return (
    <div className="contact">
      <div>
        <Headline
          about={"Let's Work Together"}
          title={"Ready To Build Something Amazing.?"}
          primary={
            "I'm currently accepting new projects. Let's discuss your ideas and see how I can help bring them to life."
          }
        />
      </div>
      <div className="input-box">
        <div className="project-details">
          <h4 className="project-details-title poppins-300">
            <LuCalendar />
            Start Your Project
          </h4>
          <p className="project-details-subtitle poppins-300">
            Fill out this form and I'll get back to you within 24 hours with a
            project proposal.
          </p>

          <div className="grid">
            <div>
              <div className="input">
                <label className="poppins-300" htmlFor="name">
                  Name*
                </label>
                <input
                  className="poppins-400"
                  type="text"
                  name=""
                  placeholder="Your Full Name"
                  id=""
                />
              </div>
              <div className="input">
                <label lassName="poppins-300" htmlFor="name">
                  Company*
                </label>
                <input
                  className="poppins-400"
                  name=""
                  placeholder="Your Company Name"
                  id=""
                />
              </div>
              <div className="input">
                <label lassName="poppins-300" htmlFor="name">
                  Budget Range*
                </label>
                <select name="" id="">
                  <option value="2000-3000">Select Budget Range</option>
                  <option value="2000-3000">$2000-3000</option>
                  <option value="3000-4000">$3000-4000</option>
                  <option value="4000-5000">$4000-5000</option>
                </select>
              </div>
            </div>
            <div>
              <div className="input">
                <label lassName="poppins-300" htmlFor="email">
                  Email*
                </label>
                <input
                  type="email"
                  name=""
                  placeholder="Your Full Name"
                  id=""
                />
              </div>
              <div className="input">
                <label lassName="poppins-300" htmlFor="name">
                  Project Type*
                </label>
                <select name="" id="">
                  <option value="2000-3000">Select Project Type</option>
                  <option value="2000-3000">Mobile App</option>
                  <option value="3000-4000">Website</option>
                  <option value="4000-5000">Desktop App</option>
                </select>
              </div>
              <div className="input">
                <label lassName="poppins-300" htmlFor="name">
                  Shedule*
                </label>
                <select name="" id="">
                  <option value="2000-3000">When Do You Need This</option>
                  <option value="2000-3000">Within 1 Month</option>
                  <option value="3000-4000">Within 2 Month</option>
                  <option value="4000-5000">Or Within 3 Month</option>
                </select>
              </div>
            </div>
          </div>
          <div className="input">
            <label htmlFor="projectdescription">Project Description *</label>
            <textarea
              className="poppins-400"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Tell me about your projects, goals, and any specific requirements.. "
            ></textarea>
          </div>
        </div>
        <div className="get-in-touch">
          <div>
            <div>
              <CgMail className="icon" />
            </div>
            <div>
              <h4 className="poppins-300">Email</h4>
              <p className="poppins-300">robiulhossen0081@gmail.com</p>
            </div>
          </div>
          <div>
            <div>
              <FiPhone className="icon" />
            </div>
            <div>
              <h4 className="poppins-300">Phone</h4>
              <p className="poppins-300">01823780816</p>
            </div>
          </div>
          <div>
            <div>
              <MdLocationPin className="icon" />
            </div>
            <div>
              <h4 className="poppins-300">Location</h4>
              <p className="poppins-300">Chittagong</p>
            </div>
          </div>
          <div>
            <div>
              <CiClock2 className="icon" />
            </div>
            <div>
              <h4 className="poppins-300">Response TIme</h4>
              <p className="poppins-300">Within 24 Ours</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
