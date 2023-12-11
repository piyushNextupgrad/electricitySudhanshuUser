'use client'
import { AiOutlineSearch, AiOutlineDribbble } from "react-icons/ai";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FiCheck } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import Navbar from "@/components/navbar"
import style from "@/styles/checkout.module.css"
import Link from "next/link";
import Image from "next/image";
import CommonFooter from "@/components/commomfooter";
import Subescribe from "@/components/subscribe";
import { useState } from "react";



const Checkout = () => {
    const [highlight, setHighlight] = useState(0)
    const [highlight2, setHighlight2] = useState(0)
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
            <section className={style.section1}>
                <div className="container">
                    <div className="row align-items-center">
                        <Navbar />
                        <h1 className="innerheading">Checkout</h1>
                    </div>
                </div>
            </section>
            <section className={`${style.section2} container`} >
                <div className="row" >
                    <div className={`${style.section2_col1} col text-center text-lg-start`} >
                        <div className={style.account}>
                            <h2>Account</h2>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero magnam fuga blanditiis debitis ipsa voluptates.</p>
                            <button>Login</button>
                        </div>
                        <div className={style.mobile}>
                            <label>Enter Mobile Number</label>
                            <div>
                                <select id="dropdown" name="dropdown">
                                    <option value="option1">+91</option>
                                    <option value="option2">+92</option>
                                    <option value="option3">+93</option>
                                </select>
                                <input type="number" placeholder="Enter Mobile Number" maxlength="10" />
                            </div>
                        </div>
                        <div className={style.otp}>
                            <label>Varification Code</label>
                            <p>We Have send you 4 digit varification code on <span>+91-7985133197</span></p>
                            <div className="justify-content-center justify-content-lg-start">
                                <input type="text" maxlength="1" />
                                <input type="text" maxlength="1" />
                                <input type="text" maxlength="1" />
                                <input type="text" maxlength="1" />
                            </div>
                        </div>
                        <div className={style.address}>
                            <label>Address</label>
                            <form className="text-start">
                                <input type="text" placeholder="Search for Location" />
                                <AiOutlineSearch />
                            </form>
                            <div>
                                <div>
                                    <FaLocationCrosshairs />
                                    <Link href="#">Use Current Location</Link>
                                </div>
                                <input type="text" placeholder="House/Flat Number*" />
                                <input type="text" placeholder="Landmark(Optional)" />
                                <input type="text" placeholder="Name" />

                            </div>

                        </div>
                        <div className={style.timeslot}>
                            <h1>Slot</h1>
                            <h4>When Should the proffesional arrive?</h4>
                            <p>Your service will take approx <span>40</span>mins</p>
                            <div className={`${style.timeslot_day}  justify-content-center justify-content-lg-start`}>
                                <div onClick={() => { setHighlight(1) }} className={highlight === 1 ? "checkout_highlight" : ""}>Fri <br /> <span>29</span></div>
                                <div onClick={() => { setHighlight(2) }} className={highlight === 2 ? "checkout_highlight" : ""}>Sat <br /> <span>30</span></div>
                                <div onClick={() => { setHighlight(3) }} className={highlight === 3 ? "checkout_highlight" : ""}>Sun  <br /> <span>01</span></div>
                            </div>
                            <span>Select start time of service</span>
                            <div className={style.timeslot_time}>
                                <div className="text-center">
                                    <div onClick={() => { setHighlight2(4) }} className={highlight2 === 4 ? "checkout_highlight" : ""}>8:00AM</div>
                                    <div onClick={() => { setHighlight2(5) }} className={highlight2 === 5 ? "checkout_highlight" : ""}>8:30AM</div>
                                    <div onClick={() => { setHighlight2(6) }} className={highlight2 === 6 ? "checkout_highlight" : ""}>9:00AM</div>
                                </div>
                                <div>
                                    <div onClick={() => { setHighlight2(7) }} className={highlight2 === 7 ? "checkout_highlight" : ""}>9:30AM</div>
                                    <div onClick={() => { setHighlight2(8) }} className={highlight2 === 8 ? "checkout_highlight" : ""}>10:00AM</div>
                                    <div onClick={() => { setHighlight2(9) }} className={highlight2 === 9 ? "checkout_highlight" : ""}>10:30AM</div>
                                </div>
                            </div>
                        </div>
                        <div className={style.payment}>
                            <h2>Payment Method</h2>
                            <Link href="#">Pay $658</Link>
                        </div>
                    </div>


                    <div className={`${style.section2_col2} col text-center text-lg-start`} >
                        <div className={style.foam}>
                            <h1>Foam & Power jet AC Service (Split)</h1>
                            <div className={style.foam_payment}>
                                <span>$599</span>
                                <span>45 mins</span>
                            </div>
                            <div className={style.quantity}>
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
                            <div className={style.coupons}>
                                <p><FiCheck />Avoid calling before reaching the location</p>
                                <div>
                                    <div>
                                        <BiSolidOffer />
                                        <Link href="#">Coupons and offers</Link>
                                    </div>
                                    <div>
                                        <Link href="#">Login/Signup to view offers</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.paymentsummry}>
                            <h2>Payment Summary</h2>
                            <div>
                                <span>Item Total</span>
                                <span>$599</span>
                            </div>
                            <div>
                                <span>Tax & Fee</span>
                                <span>$59</span>
                            </div>
                            <hr />
                            <div>
                                <span>Total</span>
                                <span>$658</span>
                            </div>
                            <div className={style.ttlpmt}>
                                <span>Ammount to Pay</span>
                                <span>$658</span>
                            </div>
                            <hr />

                        </div>
                        <div className={style.cancellation}>
                            <h3>Cancellation Policy</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, modi animi? Exercitationem aut reprehenderit recusandae nisi dolore fuga quod libero!</p>
                        </div>
                        {/* <div className={style.seasonoffer}>
                            <div >
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
                            <div >
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
                        </div> */}
                        <div className={style.section4_div1}>
                            <div className={style.section4_div1_div2}>
                                <div>
                                    <h1>Its Summer Time !</h1>
                                    <div>
                                        <div>
                                            <p>Get 30% Off First 50 Order.</p>
                                            <div>
                                                <Link href="#">BOOK SERVICES</Link>
                                            </div>
                                        </div>
                                        <div>
                                            <Image
                                                src="/homepage/Layer_31.png"
                                                height={150}
                                                width={400}
                                                alt="img"
                                            />
                                        </div>
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



                    </div>
                </div>
            </section>
            <section>
                <Subescribe />
                <CommonFooter />
            </section>
        </div>
    );
}

export default Checkout;