"use client";
import { useState } from "react";

import style from "../styles/homepage.module.css";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";


import Offcanvas from 'react-bootstrap/Offcanvas';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import Sidemenu from "@/components/sidemenu";
import {
  FaBars,
  FaUser,
  FaShoppingCart,
  FaStar,
  FaArrowRight,
  FaArrowLeft,
  FaRegWindowClose,
} from "react-icons/fa";
import { FaFacebookF, FaGooglePlusG, FaSkype, FaTwitter } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineSearch, AiOutlineDribbble } from "react-icons/ai";

import MainFooter from "@/components/commomfooter.jsx";
import Subescribe from "@/components/subscribe";

import Swiper1 from "@/components/swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
// import 'swiper/css/pagination';
import { Navigation } from "swiper/modules";

function Homepage() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <section className={style.header}>
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
                <Link href="#">
                  <FaShoppingCart />
                </Link>
                <Link href="#">
                  <FaUser />
                </Link>
                <Link href="#" onClick={handleShow}>
                  <FaBars />
                </Link>
              </div>{" "}
            </div>{" "}
          </div>
        </nav>

        <div className={style.banner_items}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-4">
                <div className={style.banner_text}>
                  <h1>
                    Quality Home Services <span>on Demand.</span>
                  </h1>
                  <p>
                    Experienced,Hand-picked Professionals to serve you at your
                    Doorstep.
                  </p>
                  <div className={style.banner_input}>
                    <div className={style.banner_input1}>
                      {" "}
                      <MdLocationPin />
                      <input type="text" placeholder="Current Locaction" />
                    </div>
                    <div className={style.banner_input2}>
                      {" "}
                      <AiOutlineSearch />
                      <input type="text" placeholder="Search for Services" />
                    </div>
                  </div>
                  <div className={style.banner_text_div}>
                    <h3>
                      <span>25% DISCOUNT</span> ON YOUR FIRST SERVICES{" "}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-4">
                <Swiper1 />
                {/* <div className={style.slider1}> </div> */}
              </div>{" "}
            </div>
          </div>
        </div>
      </section>
      <section className={style.section2}>
        <div className="container">
          <h1>Quality of Home Services.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>

          <div className={style.section2_slider}>
            <Swiper
              slidesPerView={5}
              spaceBetween={15}
              autoplay={true}
              modules={[Navigation]}
              loop={true}
              navigation={true}
              // Navigation={{ nextE1: '.review-swiper-button-next', prevE1: '.review-swiper-button-prev' }}

              className="mySwiper sliderbox"
            // style={{
            //     "--swiper-pagination-color": "yellow",
            //     "--swiper-pagination-bullet-inactive-color": "lightyellow",
            //     "--swiper-pagination-bullet-inactive-opacity": "1",
            //     "--swiper-pagination-bullet-size": "10px",
            //     "--swiper-pagination-bullet-horizontal-gap": "6px",
            //     "--swiper-pagination-bullet-border-radius": "0px"
            // }}
            >
              <SwiperSlide className={style.slider2_background}>
                <Link href="#" target="_blank">
                  <div>
                    <Image
                      src="/homepage/plumber.png"
                      height={60}
                      width={60}
                      alt="img"
                    />
                    <span>Plumbers</span>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className={style.slider2_background}>
                <Link href="#" target="_blank">
                  <div>
                    <Image
                      src="/homepage/electric.png"
                      height={60}
                      width={60}
                      alt="img"
                    />
                    <span>Elelctricians</span>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className={style.slider2_background}>
                <Link href="#" target="_blank">
                  <div>
                    <Image
                      src="/homepage/ac.png"
                      height={60}
                      width={60}
                      alt="img"
                    />
                    <span>AC Service</span>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className={style.slider2_background}>
                <Link href="#" target="_blank">
                  <div>
                    <Image
                      src="/homepage/invertor.png"
                      height={60}
                      width={60}
                      alt="img"
                    />
                    <span>Invertor Repair</span>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className={style.slider2_background}>
                <Link href="#" target="_blank">
                  <div>
                    <Image
                      src="/homepage/carpainter.png"
                      height={60}
                      width={60}
                      alt="img"
                    />
                    <span>Carpenters</span>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className={style.slider2_background}>
                <Link href="#" target="_blank">
                  <div>
                    <Image
                      src="/homepage/plumber.png"
                      height={60}
                      width={60}
                      alt="img"
                    />
                    <span>Plumbers</span>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className={style.slider2_background}>
                <Link href="#" target="_blank">
                  <div>
                    <Image
                      src="/homepage/electric.png"
                      height={60}
                      width={60}
                      alt="img"
                    />
                    <span>Elelctricians</span>
                  </div>
                </Link>
              </SwiperSlide>
              <SwiperSlide className={style.slider2_background}>
                <Link href="#" target="_blank">
                  <div>
                    <Image
                      src="/homepage/ac.png"
                      height={60}
                      width={60}
                      alt="img"
                    />
                    <span>AC Repair</span>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>
            {/* <div>
                        <div className="swiper-button-prev"><FaArrowLeft /></div>
                        <div className="swiper-button-next"><FaArrowRight /></div>
                    </div> */}
          </div>
        </div>
      </section>
      <section className={style.section3}>
        <div >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-4">
              <Image
                src="/homepage/couple.png"
                height={766}
                width={640}
                alt="img"
              />
            </div>
            <div
              className={`${style.section3_div2} col-xxl-6 col-xl-6 col-lg-4`}
            >
              <h1>
                Sit at Home
                <br />
                <span>We Will Take Care</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div>
                <div>
                  <Link href="#">
                    <Image
                      src="/homepage/fastservice.png"
                      height={70}
                      width={80}
                      alt="img"
                    />
                  </Link>
                  <span>
                    Fast Service
                    <br /> on Time
                  </span>
                </div>
                <div>
                  <Link href="#">
                    <Image
                      src="/homepage/helpcenter.png"
                      height={70}
                      width={70}
                      alt="img"
                    />
                  </Link>
                  <span>
                    24/7 <br />
                    Help Center
                  </span>
                </div>
                <div>
                  <Link href="#">
                    <Image
                      src="/homepage/widemap.png"
                      height={70}
                      width={70}
                      alt="img"
                    />
                  </Link>
                  <span>
                    Wide
                    <br /> Coverage Map
                  </span>
                </div>
                <div>
                  <Link href="#">
                    <Image
                      src="/homepage/employee.png"
                      height={70}
                      width={70}
                      alt="img"
                    />
                  </Link>
                  <span>
                    More Than <br />
                    1500 Employee
                  </span>
                </div>
              </div>
              <div>
                <Link href="#">Read More</Link>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section className={style.section4}>
        <div className="container">
          <div className="row align-items-center">
            <div className={style.section4_div1}>
              <div className={style.section4_div1_div1}>
                <div>
                  <div>
                    <h1>Its Summer Time !</h1>
                    <p>Get 30% Off First 50 Order</p>
                    <div>
                      <Link href="#">BOOK SERVICES</Link>
                    </div>
                  </div>
                  <div>
                    <Image
                      src="/homepage/Layer_31.png"
                      height={150}
                      width={300}
                      alt="img"
                    />
                  </div>
                </div>
              </div>
              <div className={style.section4_div1_div2}>
                <div>
                  <h1>Its All Time Offer !</h1>
                  <div>
                    <div>
                      <p>Get 45% Off More then 10 Services</p>
                      <div>
                        <Link href="#">BOOK SERVICES</Link>
                      </div>
                    </div>
                    <div>
                      <Image
                        src="/homepage/Layer_35.png"
                        height={150}
                        width={400}
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.section4_div2}>
              <div>
                <h1>Its Winter Time !</h1>
                <p>Get 30% Off First 50 Order</p>
                <Image
                  src="/homepage/Layer_33.png"
                  height={300}
                  width={200}
                  alt="img"
                />
                <Link href="#">BOOK SERVICES</Link>
              </div>
            </div>{" "}
          </div>{" "}
        </div>
      </section>
      <section className={style.section5}>
        <div className="container">
          <div className="row align-items-center">
            <div className={style.section5_div1}>
              <Image
                src="/homepage/Layer_38.png"
                height={700}
                width={550}
                alt="img"
              />
            </div>
            <div className={style.section5_div2}>
              <h1>Trusted & Popular Services Portal</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div>
                <div>
                  <div className={style.check_icon_div}>
                    <FiCheck />
                  </div>
                  <div className={style.check_text_div}>
                    <h4 style={{ color: "#1d2022", fontWeight: "600" }}>
                      #1 Quality Job
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div>
                  <div className={style.check_icon_div}>
                    <FiCheck />
                  </div>
                  <div className={style.check_text_div}>
                    <h4 style={{ color: "#1d2022", fontWeight: "600" }}>
                      Top Companies
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div>
                  <div className={style.check_icon_div}>
                    <FiCheck />
                  </div>
                  <div className={style.check_text_div}>
                    <h4 style={{ color: "#1d2022", fontWeight: "600" }}>
                      No Extra Charges
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div>
                  <div className={style.check_icon_div}>
                    <FiCheck />
                  </div>
                  <div className={style.check_text_div}>
                    <h4 style={{ color: "#1d2022", fontWeight: "600" }}>
                      24/7 Help Center
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </section>
      <section className={style.section6}>
        
        <iframe
          width="100%"
          height="740px"
          src="https://www.youtube.com/embed/D0UnqGm_miA?si=FhxubZNN8DF8AAkT"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
        ></iframe>
      </section>
      <section className={style.section7}>
        <div className="container">
          <div className="row align-items-center">
            <div>
              <h1>Good Reviews By Customers</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
            <div className={style.section7_commentsection1}>
              <div className={style.section7_testmonial}>
                <h4>"#The best usefull website"</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div>
                  <div>
                    <Image
                      src="/homepage/1.jpg"
                      height={50}
                      width={50}
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>Lucia E. Nugent</h4>
                    <span>CEO of climber</span>
                    <div>
                      <FaStar style={{ color: "ff9800" }} />
                      <FaStar style={{ color: "ff9800" }} />
                      <FaStar style={{ color: "ff9800" }} />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.section7_testmonial}>
                <h4>"Rating is the #1"</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div>
                  <div>
                    {" "}
                    <Image
                      src="/homepage/1.jpg"
                      height={50}
                      width={50}
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>Brenda R. Smith</h4>
                    <span>Founder of Yeloover</span>
                    <div>
                      <FaStar style={{ color: "ff9800" }} />
                      <FaStar style={{ color: "ff9800" }} />
                      <FaStar style={{ color: "ff9800" }} />
                      <FaStar style={{ color: "ff9800" }} />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.section7_testmonial}>
                <h4>"Rating is the #1"</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div>
                  <div>
                    {" "}
                    <Image
                      src="/homepage/1.jpg"
                      height={50}
                      width={50}
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>Brenda R. Smith</h4>
                    <span>Founder of Yeloover</span>
                    <div>
                      <FaStar style={{ color: "ff9800" }} />
                      <FaStar style={{ color: "ff9800" }} />
                      <FaStar style={{ color: "ff9800" }} />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.section7_commentsection2}>
              <div className={style.section7_testmonial}>
                <h4>"Rating is the #1"</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div>
                  <div>
                    {" "}
                    <Image
                      src="/homepage/1.jpg"
                      height={50}
                      width={50}
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>Brenda R. Smith</h4>
                    <span>Founder of Yeloover</span>
                    <div>
                      <FaStar style={{ color: "ff9800" }} />
                      <FaStar style={{ color: "ff9800" }} />
                      <FaStar style={{ color: "ff9800" }} />
                      <FaStar style={{ color: "ff9800" }} />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.section7_testmonial}>
                <h4>"Rating is the #1"</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div>
                  <div>
                    {" "}
                    <Image
                      src="/homepage/1.jpg"
                      height={50}
                      width={50}
                      alt="img"
                    />
                  </div>
                  <div>
                    <h4>Brenda R. Smith</h4>
                    <span>Founder of Yeloover</span>
                    <div>
                      <FaStar style={{ color: "ff9800" }} />
                      <FaStar style={{ color: "ff9800" }} />
                      <FaStar style={{ color: "ff9800" }} />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>

      {/* ================================off canvas================================= */}

      <section className={style.sidemenu} >
      

        <Offcanvas show={show} onHide={handleClose} placement='end'>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <div className={style.sidemenu_head}>
                <Link href="#">
                  <Image
                    src="/homepage/logo.png"
                    height={50}
                    width={200}
                    alt="img"
                  />
                </Link>
              </div>



            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className={style.sidemenu_nav}>
              <hr />
              <ul>
                <li>
                  <MdKeyboardDoubleArrowRight />
                  <Link href="/">HOME</Link>
                </li>
                <li>
                  <MdKeyboardDoubleArrowRight />
                  <Link href="/services">SERVICES</Link>
                </li>
                <li>
                  <MdKeyboardDoubleArrowRight />
                  <Link href="/checkout">CHECKOUT</Link>
                </li>
                <li>
                  <MdKeyboardDoubleArrowRight />
                  <Link href="/plan">PLAN</Link>
                </li>
                <li>
                  <MdKeyboardDoubleArrowRight />
                  <Link href="/help">HELP</Link>
                </li>
                <li>
                  <MdKeyboardDoubleArrowRight />
                  <Link href="/acservice">AC SERVICE</Link>
                </li>
              </ul>
            </div>
            <hr />
            <div className={style.sidemenu_icons}>

              <Link href="#">
                <FaFacebookF />
              </Link>
              <Link href="#">
                <AiOutlineDribbble />
              </Link>
              <Link href="#">
                <FaGooglePlusG />
              </Link>
              <Link href="#">
                <FaSkype />
              </Link>
              <Link href="#">
                <FaTwitter />
              </Link>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </section>


      <Subescribe />

      <MainFooter />
    </div>
  );
}
export default Homepage;

// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

// AiOutlineDribbbleSquare
