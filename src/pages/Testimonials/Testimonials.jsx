import React from "react";
import "./Testimonials.css";
import Headline from "../../components/Headline/Headline";
import { IoIosStar } from "react-icons/io";
import { FaQuoteRight } from "react-icons/fa";
import Card from "../../components/Card/Card";
const Testimonials = () => {
  return (
    <div className="testimonials">
      <div>
        <Headline
          about={"Testimonials"}
          title={"What My Clients Say!"}
          primary={
            "Don't just take my word for it. Here's what business owners and entrepreneurs have to say about working with me."
          }
        />
      </div>
      <div className="persantage-rate">
        <div className="persantage">
          <h4 className="poppins-400">50+</h4>
          <h6 className="poppins-300">Happy Clients</h6>
        </div>
        <div className="persantage">
          <h4 className="poppins-400">100%</h4>
          <h6 className="poppins-300">Project Success Rate</h6>
        </div>
        <div className="persantage">
          <h4 className="poppins-400">5.0</h4>
          <h6 className="poppins-300">Average Rating</h6>
        </div>
        <div className="persantage">
          <h4 className="poppins-400">95%</h4>
          <h6 className="poppins-300"> Clients Retentiion</h6>
        </div>
      </div>
      <div className="testimonials-cards">
        <Card
          img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&face=top"
          description="Sujyot delivered our sustainability platform ahead of schedule and exceeded all expectations. The app has transformed how we track our environmental impact and saved us over $2M in the first year."
        />
        <Card
          img={
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&face=top"
          }
          description="The fitness app Sujyot built has been a game-changer for our business. We've seen 50K+ downloads and 85% user retention. His attention to detail and understanding of user experience is exceptional."
        />
        <Card
          img={
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&face=top"
          }
          description="Our desktop invoicing tool has streamlined our entire billing process. What used to take 40 hours a month now takes just 5. Sujyot's technical expertise and business acumen are unmatched."
        />
      </div>
      <div className="ready-to-join">
        <h5 className="ready-to-join-title poppins-300">Ready To Join These Success stories.?</h5>
        <p className="ready-to-join-primary-title poppins-300">Let's see how can i help you achive similar results for your business</p>
        <div className="ready-to-join-rating">
          <p className="poppins-400">5.0 Average Rating</p>
          <p className="dot">.</p>
          <p className="poppins-400">100% Project Success Rate</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
