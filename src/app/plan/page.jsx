"use client"

import { FaSearch, FaUser, FaBars, FaRegWindowClose, FaFacebookF, FaGooglePlusG, FaSkype, FaShoppingCart, FaTwitter, FaChevronRight } from "react-icons/fa"
import { AiOutlineSearch, AiOutlineDribbble } from "react-icons/ai"
import { MdLocationPin } from "react-icons/md";
import Image from "next/image";
import Subescribe from "@/components/subscribe";
import CommonFooter from "@/components/commomfooter";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { useState, useEffect } from "react";
import style from "@/styles/plan.module.css"
import { FiCheck } from 'react-icons/fi';
import { getData } from "../../../services/services";

const Plan = () => {
  const [isSubmitingLoader, setisSubmitingLoader] = useState(false);
  const [plan1, setPlan1] = useState('');
  const [plan2, setPlan2] = useState('');
  const [plan3, setPlan3] = useState('');
  const [empty_plan1, setEmpty_plan1] = useState('');
  const [empty_plan2, setEmpty_plan2] = useState('');
  const [empty_plan3, setEmpty_plan3] = useState('');



  const getPlan = async () => {
    setisSubmitingLoader(true)
    try {
      const resp = await getData("/GetSubscription");
      // console.log("plan resp", resp.data[1]);
      resp.data[0] !== undefined ? setPlan1(resp.data[0]) : setEmpty_plan1("d-none");
      resp.data[1] !== undefined ? setPlan2(resp.data[1]) : setEmpty_plan2("d-none");
      resp.data[2] !== undefined ? setPlan3(resp.data[2]) : setEmpty_plan3("d-none");
    } catch (error) {
      console.log("try-catch error", error);
    }
    setisSubmitingLoader(false);
  }

  useEffect(() => {
    getPlan();
  }, []);



  return (
    <div >
      {isSubmitingLoader ? (
        <div className="overlay">
          <div className="spinner-container">
            <img className="animatingSpinnerSvg" src="/spinner.svg" alt="" />
          </div>
        </div>
      ) : null}
      <section className={style.section1} >

        <div className="container" >
          <div className="row align-items-center">
            <Navbar />
            <h1 className="innerheading" >Plan</h1>
          </div>
        </div>

      </section>
      <section className={style.section2} >
        <div className="container plancolumbox">
          <div className="row align-items-center">
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className={`${empty_plan1} planbox`}  >
                <h1>{plan1.subscription_name}</h1>
                <p className={style.basic_para1}>{plan1.subscription_amt}<span>/month</span></p>
                <span className={style.basic_para2}>{plan1.subscription_description}</span>
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
              <div className={`${empty_plan2} planbox premiumplan`} >
                <h1>{plan2.subscription_name}</h1>
                <p className={style.standard_para1}>{plan2.subscription_amt}<span>/month</span></p>
                <span className={style.standard_para2}>{plan2.subscription_description}</span>
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
              <div className={`${empty_plan3} planbox`}>
                <h1>{plan3.subscription_name}</h1>
                <p className={style.premium_para1}>{plan3.subscription_amt}<span>/month</span></p>
                <span className={style.premium_para2}>{plan3.subscription_description}</span>
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

    </ div >
  );
}

export default Plan;