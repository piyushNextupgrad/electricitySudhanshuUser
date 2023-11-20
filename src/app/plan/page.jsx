"use client"

import { FaSearch, FaUser, FaBars, FaRegWindowClose, FaFacebookF, FaGooglePlusG, FaSkype, FaShoppingCart, FaTwitter, FaChevronRight } from "react-icons/fa"
import { AiOutlineSearch, AiOutlineDribbble } from "react-icons/ai"
import { MdLocationPin } from "react-icons/md";
import Image from "next/image";
import Subescribe from "@/components/subscribe";
import CommonFooter from "@/components/commomfooter";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { useState } from "react";
import style from "@/styles/plan.module.css"
import { FiCheck } from 'react-icons/fi';

const Plan = () => {
  return (<>
    <section className={style.section1}>
      
     <div className="container">
       <div className="row align-items-center">       
        <Navbar />               
          <h1 className="innerheading">Plan</h1>        
        </div>
          </div>
    </section>
    <section className={style.section2}>
    <div className="container plancolumbox">
    <div className="row align-items-center">
        <div className="col-xxl-4 col-xl-4 col-lg-4">
        <div className="planbox">
          <h1>Basic Plan</h1>
          <p className={style.basic_para1}>$99<span>/month</span></p>
          <span className={style.basic_para2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
          <ul>
            <li><FiCheck />Lorem ipsum is Simply</li>
            <li><FiCheck />Lorem ipsum is Simply</li>
            <li><FiCheck />Lorem ipsum is Simply</li>
            <li><FiCheck />Lorem ipsum is Simply</li>
            <li><FiCheck />Lorem ipsum is Simply</li>
            <li><FiCheck />Lorem ipsum is Simply</li>

          </ul>        
            <Link href="#">Start Now <FaChevronRight /></Link>          
        </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4">
        <div className="planbox premiumplan">
          <h1>Standard Plan</h1>
          <p className={style.standard_para1}>$199<span>/month</span></p>
          <span className={style.standard_para2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
          <ul>
            <li><FiCheck />Lorem ipsum is Simply</li>
            <li><FiCheck />Lorem ipsum is Simply</li>
            <li><FiCheck />Lorem ipsum is Simply</li>
            <li><FiCheck />Lorem ipsum is Simply</li>
            <li><FiCheck />Lorem ipsum is Simply</li>
            <li><FiCheck />Lorem ipsum is Simply</li>

          </ul>
            <Link href="#">Start Now <FaChevronRight /></Link>
        </div>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4">
        <div className="planbox">
          <h1>Premium Plan</h1>
          <p className={style.premium_para1}>$149<span>/month</span></p>
          <span className={style.premium_para2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
          <ul>
            <li><FiCheck />Lorem ipsum is Simply</li>
            <li><FiCheck />Lorem ipsum is Simply</li>
            <li><FiCheck />Lorem ipsum is Simply</li>
            <li><FiCheck />Lorem ipsum is Simply</li>
            <li><FiCheck />Lorem ipsum is Simply</li>
            <li><FiCheck />Lorem ipsum is Simply</li>

          </ul>
            <Link href="#">Start Now <FaChevronRight /></Link>
        </div>
        </div>
      </div>
      </div>

    </section>



    <Subescribe />

    <CommonFooter />

  </>
  );
}

export default Plan;
