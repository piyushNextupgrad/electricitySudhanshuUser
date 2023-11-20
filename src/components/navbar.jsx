import Link from "next/link";
import Image from "next/image";
import style from "@/styles/navbar.module.css"
import { MdLocationPin } from "react-icons/md";
import { AiOutlineSearch, AiOutlineDribbble } from "react-icons/ai";
import { FaSearch, FaUser, FaBars, FaRegWindowClose, FaFacebookF, FaGooglePlusG, FaSkype, FaShoppingCart, FaTwitter, FaChevronRight } from "react-icons/fa"

const Navbar = () => {
    return ( <nav className={style.nav}>
            <div className="row align-items-center">
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-4">
                {" "}
                <Link href="#">
                  <Image
                    src="/services/logo.png"
                    height={50}
                    width={200}
                    className={style.logo}
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col-xxl-9 col-xl-9 col-lg-9">
              <div className="row align-items-center">
				   <div className="col-xxl-9 col-xl-9 col-lg-9">
           <div className="row align-items-center">
           <div className={`col-xxl-6 col-xl-6 col-lg-6 ${style.innersearch}` }>
                      {" "}
                      <MdLocationPin />
                      <input type="text" placeholder="Current Locaction" />
                    </div>
                    <div className={`col-xxl-6 col-xl-6 col-lg-6 ${style.innersearch}` }>
                      {" "}
                      <AiOutlineSearch />
                      <input type="text" placeholder="Search for Services" />
                    </div>
                  </div>  </div>
                  <div className={`col-xxl-3 col-xl-3 col-lg-3 ${style.innerhomeicon}` }>
                <Link href="#">
                  <FaShoppingCart />
                </Link>
                <Link href="#">
                  <FaUser />
                </Link>
                <Link href="#">
                  <FaBars/>
                </Link>
                </div>{" "}
              </div>{" "}
              </div>
            </div>{" "}
        </nav>);
}

export default Navbar;
