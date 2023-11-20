import Link from "next/link";
import Image from "next/image";
import style from "@/styles/navbar.module.css"
import { MdLocationPin } from "react-icons/md";
import { FaSearch, FaUser, FaBars, FaRegWindowClose, FaFacebookF, FaGooglePlusG, FaSkype, FaShoppingCart, FaTwitter, FaChevronRight } from "react-icons/fa"

const Navbar = () => {
    return (<nav className={style.navbar}>
        <div className={style.section1_NavLogo}>
            <Link href="/"><Image src="/services/logo.png" height={50} width={200} alt="img" /></Link>
        </div>
        <div className={style.section1_NavSearch}>
            <div className={style.section1_NavSearchbox}>
                <input type="search" placeholder="Current Location" />
                <MdLocationPin />
            </div>
            <div className={style.section1_NavSearchbox}>
                <input type="search" placeholder="Search for services" />
                <FaSearch />
            </div>
            <div className={style.section1_NavIcons}>
                <FaShoppingCart />
                <FaUser />
                <FaBars />
            </div>
        </div>
    </nav>);
}

export default Navbar;