import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import './Card.css'
const Card = ({img, description}) => {
  return (
    <div>
      <div className="testimonials-card">
        <div className="stars">
          <IoIosStar className="star" />
          <IoIosStar className="star" />
          <IoIosStar className="star" />
          <IoIosStar className="star" />
        </div>
        <p>
          <FaQuoteRight className="quote" />
        </p>
        <p className="description poppins-200">
          {description}
        </p>
        <div className="professor">
          <div className="professor-img">
            <img
              src={img}
              alt=""
            />
          </div>
          <div className="professor-identity">
            <h4 className="name poppins-400">Sarah Chen</h4>
            <p className="poppins-300">CEO, GreenTech Solutions</p>
            <p className="poppins-200">GreenTech Solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
