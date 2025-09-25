import React from "react";
import './Headline.css'
const Headline = ({about, title, primary}) => {
  return (
    <div className="headline">
      <p className="about-me poppins-700">{about}</p>
      <h2 className="title poppins-400">{title}</h2>
      <p className="primary-title poppins-300">
       {primary}
      </p>
    </div>
  );
};

export default Headline;
