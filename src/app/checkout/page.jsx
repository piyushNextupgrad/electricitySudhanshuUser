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
import { useEffect, useState } from "react";
import { postData } from "../../../services/services";
import { getFormatedDate } from "../../../helper/helper";
import { Toaster, toast } from 'sonner'



const Checkout = () => {
    const [highlight, setHighlight] = useState(0)
    const [highlight2, setHighlight2] = useState(0)
    const [def_selt, setDef_selt] = useState('');
    const [def_dte, setDef_dte] = useState('');
    const [user_id, setUser_id] = useState('')
    const [finalSelect, setFinalSelect] = useState('')
    const [finalDate, setFinalDate] = useState('')
    const [cartList, setCartList] = useState([])
    const [isSubmitingLoader, setisSubmitingLoader] = useState(false);
    const [cartTotal,setCartTotol] = useState();
    const [finalAmmt,setFinalAmmt] =useState();


    const def_values = () => {

        if (typeof window !== 'undefined') {
            // setDef_selt(localStorage.getItem("Elect_service_qty"));
            // setDef_dte(localStorage.getItem("Elect_service_date"));
            // setUser_id(localStorage.getItem("ElectricityId"));
            const cartServices = JSON.parse(localStorage.getItem("Cart"))
            // console.log("cartServices", cartServices)
            setCartList(cartServices)
            //adding cart total here
            const total_array=[]
           cartServices.filter((c)=>total_array.push(c.service_cost))
            // console.log("total",total_array)
            let total = 0;
             total_array.map((e)=>{
                
                total = total + e;
                setCartTotol(total)
                setFinalAmmt(total + 59)
            })

        }

    }


    // console.log("CArtlist",cartList)
    const handleSubmit = async () => {
        setisSubmitingLoader(true)
        
        // if (typeof window !== 'undefined') {
           
        // }
        
        try {
                const formateDate = getFormatedDate(finalDate,"YYYY-MM-DD hh:mm:ss")
                const today = getFormatedDate(Date.now(),"YYYY-MM-DD hh:mm:ss")
             const ServiceBooking={
                "service_id":45,
                "customer_id":user_id,
                "qty":finalSelect,
                "service_book_date":today,
                'service_avail_date':formateDate
             }
               console.log("id",user_id)
            //  console.log("formated date",Date.now())
            //  console.log("formated date today",today)
            //  console.log("datenow",new Date())
             console.log("servicebooking object",ServiceBooking)
            //  console.log("final_Select",finalSelect)
            //  console.log("type of finalselect",typeof(Number(finalSelect)))
            const resp = await postData("/StoreServiceBooking",ServiceBooking)
            console.log("resp",resp)
            toast(resp.message);
        } catch (error) {
                console.log("try-catch error",error)
        }
        setisSubmitingLoader(false)

    }
    useEffect(() => {
        def_values()
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
            <Toaster position="top-center" richColors />
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
                                <input type="number" placeholder="Enter Mobile Number" maxLength="10" />
                            </div>
                        </div>
                        <div className={style.otp}>
                            <label>Varification Code</label>
                            <p>We Have send you 4 digit varification code on <span>+91-7985133197</span></p>
                            <div className="justify-content-center justify-content-lg-start">
                                <input type="text" maxLength="1" />
                                <input type="text" maxLength="1" />
                                <input type="text" maxLength="1" />
                                <input type="text" maxLength="1" />
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
                        {/* <div className={style.timeslot}>
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
                        </div> */}
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
                                                <Link href="/services">BOOK SERVICES</Link>
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
                                                <Link href="/services">BOOK SERVICES</Link>
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


                    <div className={`${style.section2_col2} col text-center text-lg-start`} >
                        {/* {cartList.map((t)=>{})} */}
                        <div className={style.foam}>
                            {cartList.map((t)=>(
                            <div >
                                {/* <hr/> */}
                                <h1 className="text-center">{t.service_name}</h1>
                                <div className={style.foam_payment}>
                                    <span>${t.service_cost}</span>
                                    <span>45 mins</span>
                                </div>
                                {/* { console.log("t",t.service_cost)} */}
                                <div className={style.quantity}>
                                    <div>
                                        <label>Quantity</label>{" "}
                                        <select id="dropdown" name="dropdown" value={t.service_quantity} onChange={(e) => { setFinalSelect(e.target.value) }}>
                                            <option value="choose" >choose</option>
                                            <option value="1" >1</option>
                                            <option value="2" >2</option>
                                            <option value="3" >3</option>
                                            <option value="4" >4</option>
                                            <option value="5" >5</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>Date</label>{" "}
                                        <input type="datetime-local" value={t.service_date} onChange={(e) => setFinalDate(e.target.value)} />
                                    </div>
                                </div>
                                {/* <hr/> */}
                            </div>
                            ))}
                            {/* <div className={style.payment}>
                                <h2>Payment Method</h2>
                                <Link href="/services" >Book other services</Link>
                            </div> */}
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
                                <span>${cartTotal}</span>
                            </div>
                            <div>
                                <span>Tax & Fee</span>
                                <span>$59</span>
                            </div>
                            <hr />
                            <div>
                                <span>Total</span>
                                <span>${finalAmmt}</span>
                            </div>
                            <div className={style.ttlpmt}>
                                <span>Ammount to Pay</span>
                                <span>${finalAmmt}</span>
                            </div>
                            <hr />

                        </div>
                        <div className={style.payment}>
                            <h2>Payment Method</h2>
                            <Link href="#" onClick={handleSubmit}>Pay ${finalAmmt}</Link>
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
                        {/* <div className={style.section4_div1}>
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
                        </div> */}



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