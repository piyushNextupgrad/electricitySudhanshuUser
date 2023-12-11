"use client"
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill, PiNumberCircleFourFill, PiNumberCircleFiveFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import style from "@/styles/acservice.module.css";
import Accordion from 'react-bootstrap/Accordion';
import Subscribe from "@/components/subscribe";
import CommonFooter from "@/components/commomfooter";

import Navbar from "@/components/navbar";
import Link from "next/link";
import { useState } from "react";
const ACservices = () => {
    const [isSubmitingLoader, setisSubmitingLoader] = useState(false);
    return (
        <div >
            {isSubmitingLoader ? (
                <div className="overlay">
                    <div className="spinner-container">
                        <img className="animatingSpinnerSvg" src="/spinner.svg" alt="" />
                    </div>
                </div>
            ) : null}

            <section className={`${style.section1} container-fluid`}  >
                <div className="container">
                    <div className="row align-items-center">
                        <Navbar />
                        <h1 className="innerheading">AC Services & Repair</h1>
                    </div>
                </div>

            </section>
            <section className={`${style.section2} container`} >
                <div className="row" >
                    <div className={`${style.section2_div1} col-xs-12 col-sm-12 col-md-12 col-lg-6 text-sm-center text-lg-start text-xs-center`} >
                        <Image src="/ac_service/Layer_50.png" width={500} height={500} alt="img" />
                    </div>
                    <div className={`${style.section2_div2} col-xs-12  col-sm-12 col-md-12 col-lg-6 text-sm-center text-lg-start  text-xs-center`} >
                        <span>30 DAYS WARRENTY</span>
                        <h1>Foam & Power jet AC Service (Split)</h1>
                        <div>
                            <span>$599</span>
                            <span>45 mins</span>
                        </div>
                        <ul className="text-start">
                            <li>Get 2X deeper dust removal with Foam + Power Jet technology</li>
                            <li>Intense cleaning of both inner and outer units</li>
                            <li>Get 2X deeper dust removal with Foam + Power Jet technology</li>
                            <li>Intense cleaning of both inner and outer units</li>
                        </ul>
                        <div>
                            <div>
                                <label>Quantity</label>{" "}
                                <select id="dropdown" name="dropdown">
                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                            <div>
                                <label>Date</label>{" "}
                                <input type="datetime-local" />
                            </div>
                        </div>
                        <div className={style.bttn}>
                            <Link href="#">BOOK SERVICES</Link>
                        </div>
                    </div>
                </div>


            </section>
            <section className={style.section3}>
                <div className="container">
                    <h1>How it works</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, consequuntur voluptas. Tempora saepe, soluta nobis cumque officia nostrum sequi similique!</p>
                    <div className="row " >
                        <div className="col-md-6 text-xs-center col-xs-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6" >
                            <ul>
                                <li>
                                    <span>1</span>
                                    <div>
                                        <span>Pre-Service checks</span>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, quam.</p>
                                    </div>
                                </li>
                                <li>
                                    <span>2</span>
                                    <div>
                                        <span>Pre-Service checks</span>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit rerum quae soluta!</p>
                                    </div>
                                </li>
                                <li>
                                    <span>3</span>
                                    <div>
                                        <span>Pre-Service checks</span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vitae expedita voluptate neque deleniti.</p>
                                    </div>
                                </li>
                                <li>
                                    <span>4</span>
                                    <div>
                                        <span>Pre-Service checks</span>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, tempora mollitia. Maiores minus ex non illo?</p>
                                    </div>
                                </li>
                                <li>
                                    <span>5</span>
                                    <div>
                                        <span>Pre-Service checks</span>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, officiis asperiores nisi est magnam blanditiis distinctio amet optio?</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className=" col-md-6 text-xs-center col-sm-12 col-lg-6 col-xl-6 col-xxl-6 text-center" >
                            <Image src="/ac_service/Layer_63.png" height={500} width={500} alt="img" />
                        </div>

                    </div>
                </div>
            </section>
            <section className={style.section4}>
                <div className="mt-5">
                    <div>
                        <h1>Frequenty asked Questions</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut recusandae maiores quia quibusdam. Dicta, incidunt dolor voluptatibus officia necessitatibus atque?</p>
                        <div className={`${style.checkout_accordian} container ac_accordian`}>
                            <div className='row'>
                                <Accordion flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut recusandae maiores quia quibusdam?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut recusandae maiores quia quibusdam?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut recusandae maiores quia quibusdam?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut recusandae maiores quia quibusdam?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut recusandae maiores quia quibusdam?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut recusandae maiores quia quibusdam?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                            culpa qui officia deserunt mollit anim id est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>
                            </div>
                        </div>

                    </div>
                    <div className={`${style.section4_div2} container `} >
                        <h1>Customer Reviews</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti expedita ullam consequatur consectetur totam repudiandae, sunt sint eaque optio.</p>
                        <div className="row" >
                            <div className={`${style.range_div}  col-xs-12 col-sm-12 col-md-6`}>
                                <p>4.83<span><FaStar /></span></p>
                                <span>26.8k reviews</span>
                                <ul>
                                    <li>5<FaStar /><input style={{ accentColor: " black;" }} type="range" min={0} max={5} value={5} /><span>25.2k</span></li>
                                    <li>4<FaStar /><input style={{ accentColor: " black;" }} type="range" min={0} max={5} value={3} /><span>6.1k</span></li>
                                    <li>3<FaStar /><input style={{ accentColor: " black;" }} type="range" min={0} max={5} value={2} /><span>7.2k</span></li>
                                    <li>2<FaStar /><input style={{ accentColor: " black;" }} type="range" min={0} max={5} value={2} /><span>8.3k</span></li>
                                    <li>1<FaStar /><input style={{ accentColor: " black;" }} type="range" min={0} max={5} value={1} /><span>9.4k</span></li>
                                </ul>

                            </div>
                            <div className={`${style.testimonial_div}  col-xs-12 col-sm-12 col-md-6 `}>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <Image src="/ac_service/4.jpg" height={50} width={50} alt="img" /></div>
                                            <div>
                                                <span>Maria<br />
                                                    sept 2023</span>
                                            </div>
                                        </div>
                                        <div>
                                            5<FaStar />
                                        </div>
                                    </div>
                                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam modi eligendi dicta repellendus sint necessitatibus quae deleniti. Corporis, inventore?</div>
                                </div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <Image src="/ac_service/4.jpg" height={50} width={50} alt="img" /></div>
                                            <div>
                                                <span>Maria<br />
                                                    sept 2023</span>
                                            </div>
                                        </div>
                                        <div>
                                            5<FaStar />
                                        </div>
                                    </div>
                                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam modi eligendi dicta repellendus sint necessitatibus quae deleniti. Corporis, inventore?</div>
                                </div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <Image src="/ac_service/4.jpg" height={50} width={50} alt="img" /></div>
                                            <div>
                                                <span>Maria<br />
                                                    sept 2023</span>
                                            </div>
                                        </div>
                                        <div>
                                            5<FaStar />
                                        </div>
                                    </div>
                                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam modi eligendi dicta repellendus sint necessitatibus quae deleniti. Corporis, inventore?</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Subscribe />
                <CommonFooter />

            </section>

        </div>);
}

export default ACservices;