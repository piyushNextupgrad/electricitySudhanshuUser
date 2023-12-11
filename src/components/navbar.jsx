"use client"

import Link from "next/link";
import Image from "next/image";
import style from "@/styles/navbar.module.css"
import { MdLocationPin } from "react-icons/md";
import { AiOutlineSearch, AiOutlineDribbble } from "react-icons/ai";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Toaster, toast } from 'sonner'

import Offcanvas from 'react-bootstrap/Offcanvas';

import { FaSearch, FaUser, FaBars, FaRegWindowClose, FaFacebookF, FaGooglePlusG, FaSkype, FaShoppingCart, FaTwitter, FaChevronRight } from "react-icons/fa"
import { useState } from "react";
import { useRouter } from "next/navigation";


const Navbar = () => {


  const [show, setShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  // const [login, setLogin] = useState(localStorage.getItem(JSON.parse("token")));
  const login = 1;

  const route = useRouter();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (<>
    <nav className={style.nav}>
      <Toaster position="top-center" richColors />
      <div className="row align-items-center">
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-4">
          {" "}
          <Link href="/">
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
                <div className={`col-xxl-6 col-xl-6 col-lg-6 ${style.innersearch}`}>
                  {" "}
                  <MdLocationPin />
                  <input type="text" placeholder="Current Locaction" />
                </div>
                <div className={`col-xxl-6 col-xl-6 col-lg-6 ${style.innersearch}`}>
                  {" "}
                  <AiOutlineSearch />
                  <input type="text" placeholder="Search for Services" />
                </div>
              </div>  </div>
            <div className={`col-xxl-3 col-xl-3 col-lg-3 ${style.innerhomeicon}`}>
              <Link href="#">
                <FaShoppingCart />
              </Link>
              <Link href="#" onClick={() => setSmShow(true)} className="me-2">
                <FaUser />
              </Link>
              <Link href="#" onClick={handleShow}>
                <FaBars />
              </Link>
            </div>{" "}
          </div>{" "}
        </div>
      </div>{" "}
    </nav>




    <div>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className={style.sidemenu_head}>
              <Link href="#">
                <Image
                  src="/homepage/logo.png"
                  height={50}
                  width={200}
                  alt="img"
                />
              </Link>
            </div>



          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={style.sidemenu_nav}>
            <hr />
            <ul>
              <li>
                <MdKeyboardDoubleArrowRight />
                <Link href="/">HOME</Link>
              </li>
              <li>
                <MdKeyboardDoubleArrowRight />
                <Link href="/services">SERVICES</Link>
              </li>
              <li>
                <MdKeyboardDoubleArrowRight />
                <Link href="/checkout">CHECKOUT</Link>
              </li>
              <li>
                <MdKeyboardDoubleArrowRight />
                <Link href="/plan">PLAN</Link>
              </li>
              <li>
                <MdKeyboardDoubleArrowRight />
                <Link href="/help">HELP</Link>
              </li>
              <li>
                <MdKeyboardDoubleArrowRight />
                <Link href="/acservice">AC SERVICE</Link>
              </li>
            </ul>
          </div>
          <hr />
          <div className={style.sidemenu_icons}>

            <Link href="#">
              <FaFacebookF />
            </Link>
            <Link href="#">
              <AiOutlineDribbble />
            </Link>
            <Link href="#">
              <FaGooglePlusG />
            </Link>
            <Link href="#">
              <FaSkype />
            </Link>
            <Link href="#">
              <FaTwitter />
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>


    <div>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Login / Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div >

            { //conditional operator
              login !== 1 ?
                (<div>

                  <div className="d-flex justify-content-around">
                    <h6>Name:</h6>
                    {/* <h6>{localStorage.getItem(JSON.parse(userName))}</h6> */}
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <Button variant="primary" onClick={() => {
                      // localStorage.removeItem("token");
                      toast.success("Logged out successfully!")
                      setTimeout(route.push("/"), 4500);

                    }}>
                      Logout
                    </Button>
                  </div>
                </div>
                )
                :
                (
                  <div className="d-flex justify-content-around">
                    <Button variant="primary" onClick={() => route.push("/login")}>Login</Button>
                    <Button variant="primary" onClick={() => route.push("/register")}>Register</Button>
                  </div>
                )
            }


          </div>
        </Modal.Body>

      </Modal>
    </div>
  </>);
}

export default Navbar;
