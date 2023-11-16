"use client"

import { FaSearch, FaUser, FaBars, FaRegWindowClose, FaFacebookF, FaGooglePlusG, FaSkype, FaTwitter, FaChevronRight } from "react-icons/fa"
import { AiOutlineSearch, AiOutlineDribbble } from "react-icons/ai"
import Image from "next/image";
import Subescribe from "@/components/subscribe";
import CommonFooter from "@/components/commomfooter";
import Link from "next/link";
import { useState } from "react";
import { MdLocationPin } from "react-icons/md";
import style from "@/styles/plan.module.css"
import { FiCheck } from 'react-icons/fi';

const Plan = () => {
    return (<>
        <section className={style.section1}>           
               <nav className={style.nav}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-4">
                {" "}
                <Link href="#">
                  <Image
                    src="/homepage/logo.png"
                    height={50}
                    width={200}
                    className={style.logo}
                    alt="logo"
                  />
                </Link>
              </div>
              <div className={`${style.nav_icon} col-xxl-9 col-xl-9 col-lg-9`}>

                     <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <div className={style.section1_NavSearch}>
                        <div className={style.section1_NavSearchbox}>
                            <input type="search" placeholder="Current Location" />
                            <MdLocationPin />
                        </div>
                        <div className={style.section1_NavSearchbox}>
                            <input type="search" placeholder="Search for services" />
                            <FaSearch />
                        </div>
                               <div className={style.section1_NavSearch}>
                        <div className={style.section1_NavSearchbox}>
                            <input type="search" placeholder="Search for services" />
                            <FaSearch />
                        </div>
                   </div>
                     <div className="col-xxl-6 col-xl-6 col-lg-6">
                          <Link href="#">
                  <FaShoppingCart />
                </Link>
                <Link href="#">
                  <FaUser />
                </Link>
                <Link href="#" onClick={SidemenuAction}>
                  <FaBars onClick={SidemenuAction} />
                </Link>
                   </div>
                 
              </div>{" "}
            </div>{" "}
          </div> </div> </div>
        </nav>
                <div>
                    <h1>Plan</h1>
                </div>           
        </section>
        <section className={style.section2}>
            <div>
                <div className={style.basicplan}>
                    <h1>Basic Plan</h1>
                    <p className={style.basic_para1}>$99<span>/month</span></p>
                    <span className={style.basic_para2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    <hr />
                    <ul>
                        <li><FiCheck />Lorem ipsum is Simply</li>
                        <li><FiCheck />Lorem ipsum is Simply</li>
                        <li><FiCheck />Lorem ipsum is Simply</li>
                        <li><FiCheck />Lorem ipsum is Simply</li>
                        <li><FiCheck />Lorem ipsum is Simply</li>
                        <li><FiCheck />Lorem ipsum is Simply</li>

                    </ul>
                    <div>
                        <Link href="#">START NOW <FaChevronRight /></Link>
                    </div>
                </div>
                <div className={style.center}>
                    <h1>Standard Plan</h1>
                    <p className={style.standard_para1}>$199<span>/month</span></p>
                    <span className={style.standard_para2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    <hr />
                    <ul>
                        <li><FiCheck />Lorem ipsum is Simply</li>
                        <li><FiCheck />Lorem ipsum is Simply</li>
                        <li><FiCheck />Lorem ipsum is Simply</li>
                        <li><FiCheck />Lorem ipsum is Simply</li>
                        <li><FiCheck />Lorem ipsum is Simply</li>
                        <li><FiCheck />Lorem ipsum is Simply</li>

                    </ul>
                    <div>
                        <Link href="#">START NOW <FaChevronRight /></Link>
                    </div>
                </div>
                <div className={style.basicplan}>
                    <h1>Premium Plan</h1>
                    <p className={style.premium_para1}>$149<span>/month</span></p>
                    <span className={style.premium_para2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                    <hr />
                    <ul>
                        <li><FiCheck />Lorem ipsum is Simply</li>
                        <li><FiCheck />Lorem ipsum is Simply</li>
                        <li><FiCheck />Lorem ipsum is Simply</li>
                        <li><FiCheck />Lorem ipsum is Simply</li>
                        <li><FiCheck />Lorem ipsum is Simply</li>
                        <li><FiCheck />Lorem ipsum is Simply</li>

                    </ul>
                    <div>
                        <Link href="#">START NOW <FaChevronRight /></Link>
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
