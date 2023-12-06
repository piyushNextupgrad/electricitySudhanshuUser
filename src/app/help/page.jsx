
"use client"
import { HiChatAlt2 } from "react-icons/hi";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import style from "@/styles/help.module.css"
import Navbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";



import CommonFooter from "@/components/commomfooter";
import Subescribe from "@/components/subscribe";

import Comp1 from "@/components/HelpComponents/comp1"
import Comp2 from "@/components/HelpComponents/comp2"
import Comp3 from "@/components/HelpComponents/comp3"
import Comp4 from "@/components/HelpComponents/comp4"
import Comp5 from "@/components/HelpComponents/comp5"
import { useState, useEffect } from "react";


const Help = () => {

    const [comp, setComp] = useState(3);


    useEffect(() => {

    }, []);



    return (
        < div >
            <section className={style.section1}>
                <div className="container">
                    <div className="row align-items-center">
                        <Navbar />
                        <h1 className="innerheading">Help & Support</h1>
                    </div>
                </div>
            </section>
            <section className={`${style.section2} container`}>
                <div className="row">
                    <div className='col-md-4'>
                        <div className={style.helpbttn}>

                            <div onClick={() => { setComp(3) }}>
                                <button className={comp === 3 ? "compbttnstyle" : " "}>
                                    Help with Services
                                    <FaArrowRightLong />
                                </button>
                            </div>
                            <div onClick={() => { setComp(1) }} >
                                <button className={comp === 1 ? "compbttnstyle" : " "}>
                                    FAQ
                                    <FaArrowRightLong />
                                </button>
                            </div>

                            <div onClick={() => { setComp(5) }}>
                                <button className={comp === 5 ? "compbttnstyle" : " "}>
                                    Leagal, Terms and Conditions
                                    <FaArrowRightLong />
                                </button>
                            </div>

                            <div onClick={() => { setComp(2) }}>
                                <button className={comp === 2 ? "compbttnstyle" : " "}>
                                    Ticket generate
                                    <FaArrowRightLong />
                                </button>
                            </div>

                            <div onClick={() => { setComp(4) }}>
                                <button className={comp === 4 ? "compbttnstyle" : " "}>
                                    Chat
                                    <FaArrowRightLong />
                                </button>
                            </div>



                        </div>

                        <div className={style.content}>
                            <div className={style.photos}>

                                <div className={style.thumbnails}>
                                    <Image src="/help/contact.jpg" alt="digital portrait of Gemma Arterton as Gretel" height={300} width={300} />
                                    <div className={style.black}></div>
                                    <div className={style.title}>
                                        <HiChatAlt2 />
                                        <h3>Do You Need Any Help?</h3>
                                        <hr />
                                        <p>+91-1234567890</p>
                                        <span>info@support.com</span><br />
                                        <div>
                                            <Link href="#">CONTACT US</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.compont} col-md-8 accordSudh`}>

                        {
                            comp == 1 ? (<Comp1 />) :
                                comp == 2 ? (<Comp2 />) :
                                    comp == 3 ? <Comp3 /> :
                                        comp == 4 ? <Comp4 /> :
                                            comp == 5 ? <Comp5 /> : "No comp"
                        }




                    </div>
                </div>
            </section >
            <section>
                <Subescribe />
                <CommonFooter />

            </section>

        </div  >
    );
}

export default Help;