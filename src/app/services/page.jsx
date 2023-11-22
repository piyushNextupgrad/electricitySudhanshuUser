import style from "@/styles/services.module.css"
import { FaSearch, FaUser, FaBars } from "react-icons/fa"
import Image from "next/image";
import Navbar from "@/components/navbar";
import Subescribe from "@/components/subscribe";
import CommonFooter from "@/components/commomfooter";
import Link from "next/link";

const Services = () => {
    return (
        <>
             <section className={style.section1}>
      
      <div className="container">
        <div className="row align-items-center">       
         <Navbar />               
           <h1 className="innerheading">Services</h1>        
         </div>
           </div>
     </section>
            <section className={style.section2}>
                  <div className="container"> 
                <div className="row align-items-center">
                <div>
                    <div>
                        <Image src="/services/icon1.png" height={100} width={100} alt="img" />
                        <h2>Lorem Ipsum is Simply</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div>
                        <Image src="/services/icon2.png" height={100} width={100} alt="img" />
                        <h2>Lorem Ipsum is Simply</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div>
                        <Image src="/services/icon3.png" height={100} width={100} alt="img" />
                        <h2>Lorem Ipsum is Simply</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>

                </div>
                <div>
                    <div>
                        <Image src="/services/icon4.png" height={100} width={100} alt="img" />
                        <h2>Lorem Ipsum is Simply</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div>
                        <Image src="/services/icon5.png" height={100} width={100} alt="img" />
                        <h2>Lorem Ipsum is Simply</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div>
                        <Image src="/services/icon6.png" height={100} width={100} alt="img" />
                        <h2>Lorem Ipsum is Simply</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
 </div> </div>

                </div>
            </section>
            <section className={style.section3}>
                <div>
                    <h3>FEATURES</h3>
                    <p>OUR WORK FLOW</p>
                    <div className={style.section3_designs}>
                        <div><Image src="/services/design1.png" height={125} width={140} alt="img" /></div>
                        <div>
                            <h3>Lorem Ipsum is Simply</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                    <div className={style.section3_designs_shift}>
                        <div><Image src="/services/design2.png" height={125} width={140} alt="img" /></div>
                        <div>
                            <h3>Lorem Ipsum is Simply</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>
                    <div className={style.section3_designs}>
                        <div><Image src="/services/design3.png" height={125} width={140} alt="img" /></div>
                        <div>
                            <h3>Lorem Ipsum is Simply</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                    </div>

                </div>
                <div>
                    <Image src="/services/Layer_63.png" height={550} width={500} alt="img" />
                </div>
            </section>
            <section>
            <Subescribe />
            </section>
            <section>
            <CommonFooter />
            </section>





        </>

    );
}

export default Services;
