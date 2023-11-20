import Link from "next/link";
import Image from "next/image";
import style from "@/styles/navbar.module.css"
import { MdLocationPin } from "react-icons/md";
import { FaSearch, FaUser, FaBars, FaRegWindowClose, FaFacebookF, FaGooglePlusG, FaSkype, FaShoppingCart, FaTwitter, FaChevronRight } from "react-icons/fa"

const Navbar = () => {
    return (<nav className={style.navbar}>
        <div className={'${style.section1_NavLogo} col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-4'}>
            <Link href="/"><Image src="/services/logo.png" height={50} width={200} alt="img" /></Link>
        </div>
        <div className={'{style.section1_NavSearch} col-xxl-9 col-xl-9 col-lg-9'} >
            <div className="row">
            <div className={'{style.section1_NavSearchbox} col-xxl-5 col-xl-5 col-lg-5'} >
                <input type="search" placeholder="Current Location" />
                <MdLocationPin />
            </div>
            <div className={'{style.section1_NavSearchbox} col-xxl-5 col-xl-5 col-lg-5'} >
                <input type="search" placeholder="Search for services" />
                <FaSearch />
            </div>
            <div className={'{style.section1_NavIcons} col-xxl-2 col-xl-2 col-lg-2'} >
                <FaShoppingCart />
                <FaUser />
                <FaBars />
            </div>
                 </div>
        </div>
    </nav>);
}

export default Navbar;
