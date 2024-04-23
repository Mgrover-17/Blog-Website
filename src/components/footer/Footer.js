import React from "react";
import {
  AiFillLike,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer className="boxItems">
        <div className="container flex">
          <p>
            Welcome to our blogging community!<br/><br/> At
            WittyWrites, we believe in the power of words to inspire,
            inform, and connect people from all walks of life. Our passionate
            writers curate content on a wide range of topics, from technology
            and travel to health and lifestyle. Explore the latest trends,
            discover expert tips, and engage with our vibrant community of
            readers.<br/><br/>Join us on this literary journey,
            where every article is a doorway to a new perspective. Feel free to
            share your thoughts, comments, and experiences.Thank you for being a part of our
            story.<br/><br/>Happy reading!
          </p>

          <div className="social">
            <BsFacebook className="icon" />
            <RiInstagramFill className="icon" />
            <AiFillTwitterCircle className="icon" />
            <AiFillLinkedin className="icon" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
