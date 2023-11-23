
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


const Help = () => {
    return (
        <>
            <section className={style.section1}>
                <div>
                    <Navbar />

                    <h1>Help & Support</h1>

                </div>
            </section>
            <section className={`${style.section2} container`}>
                <div className="row">
                    <div className='col-md-4'>
                        <div className={style.helpbttn}>

                            <div><button>Help with Services<FaArrowRightLong /></button></div>
                            <div><button>FAQ<FaArrowRightLong /></button></div>
                            <div><button>Leagal, Terms and Conditions<FaArrowRightLong /></button></div>
                            <div><button>Ticket generate<FaArrowRightLong /></button></div>
                            <div><button>Chat<FaArrowRightLong /></button></div>

                        </div>
                        {/* <div className={style.contactUs}>
                            <div className={style.overlayback}></div>
                            <div className={style.overlayfront}></div>
                            <div className={style.overtext}>
                                <HiChatAlt2 />
                                <h2>Do You Need Any Help?</h2>
                                <hr />
                                <p>+91-1234567890</p>
                                <span>info@support.com</span>
                                <Link href="#">CONTACT US</Link>
                            </div>
                        </div> */}
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
                    <div className={`${style.compont} col-md-8`}>
                        {/* <ul>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, cum!<FaRegPlusSquare /></li>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, cum!<FaRegPlusSquare /></li>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, cum!<FaRegPlusSquare /></li>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, cum!<FaRegPlusSquare /></li>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, cum!<FaRegPlusSquare /></li>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, cum!<FaRegPlusSquare /></li>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, cum!<FaRegPlusSquare /></li>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, cum!<FaRegPlusSquare /></li>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, cum!<FaRegPlusSquare /></li>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, cum!<FaRegPlusSquare /></li>
                        </ul> */}
                        
                        <Comp1/>
                       
                    </div>
                </div>
            </section >
            <section>
                <Subescribe />
                <CommonFooter />

            </section>

        </>
    );
}

export default Help;