import style from "@/styles/services.module.css"
import { FaSearch, FaUser, FaBars } from "react-icons/fa"
import Image from "next/image";
import Subescribe from "@/components/subscribe";
import CommonFooter from "@/components/commomfooter";
import Link from "next/link";

const Services = () => {
    return (
        <>
            <section className={style.section1}>
                <nav>
                    <div className={style.section1_NavLogo}>
                        <Link href="#"><Image src="/services/logo.png" height={50} width={200} alt="img" /></Link>
                    </div>
                    <div className={style.section1_NavSearch}>
                        <div className={style.section1_NavSearchbox}>
                            <input type="search" placeholder="Search for services" />
                            <FaSearch />
                        </div>
                        <div className={style.section1_NavIcons}>

                            <FaUser />
                            <FaBars />
                        </div>
                    </div>
                </nav>
                <div>
                    <h1>Services</h1>
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
