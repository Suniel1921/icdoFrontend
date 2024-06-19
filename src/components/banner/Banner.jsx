import React from 'react';
import './../banner/banner.css'
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";


const Banner = () => {
  return (
    <>
      <div className='banner_container '>
        <div className='banner_content global_flex container'>

          <div className='banner_left global_flex'>
            <p>+977 015573382</p>
            <p>info@icdolalitpur.com</p>
          </div>

          <div className='bannerMid'>
            <img className='flag' src="/image/nepalFlag.gif" alt="" />
          </div>

          <div className='banner_right'>
            <div className='social_icons global_flex'>
              <p><FaFacebookF /></p>
              <p><FaSquareInstagram /></p>
              <p><FaTwitter /></p>
            </div>
          </div>

          

        </div>
      </div>

    </>
  )
}

export default Banner
