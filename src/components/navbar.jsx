import Link from "next/link";
import Image from "next/image";
import style from "@/styles/navbar.module.css"
import { MdLocationPin } from "react-icons/md";
import { FaSearch, FaUser, FaBars, FaRegWindowClose, FaFacebookF, FaGooglePlusG, FaSkype, FaShoppingCart, FaTwitter, FaChevronRight } from "react-icons/fa"

const Navbar = () => {
    return ( <nav className={style.nav}>
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
                <Link href="#">
                  <FaShoppingCart />
                </Link>
                <Link href="#">
                  <FaUser />
                </Link>
                <Link href="#" onClick={SidemenuAction}>
                  <FaBars onClick={SidemenuAction} />
                </Link>
              </div>{" "}
            </div>{" "}
          </div>
        </nav>);
}

export default Navbar;
