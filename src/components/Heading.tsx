import React from "react";
import "./Heading.scss";

export const Heading = () => {
  return <h1 className="HeadingText">STFUANDCLICK.COM</h1>;
};

export const Quote = () => {
  return (
    <div className="Quote">
      <blockquote>
        <p className="QuoteText">
          "It's really simple, you just need to click as fast as you can"
        </p>
        <footer className="QuoteAuthor">-anonymous</footer>
      </blockquote>
    </div>
  );
};
