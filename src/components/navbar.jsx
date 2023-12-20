"use client"

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import style from "@/styles/navbar.module.css"
import { MdLocationPin } from "react-icons/md";
import { AiOutlineSearch, AiOutlineDribbble } from "react-icons/ai";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';
import { IoMdClose } from "react-icons/io";
import Swal from 'sweetalert2'

import { Toaster, toast } from 'sonner'
import { postData, getData } from "../../services/services";

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Offcanvas from 'react-bootstrap/Offcanvas';

import { FaSearch, FaUser, FaBars, FaRegWindowClose, FaFacebookF, FaGooglePlusG, FaSkype, FaShoppingCart, FaTwitter, FaChevronRight } from "react-icons/fa"
import { useState, useEffect } from "react";



const Navbar = () => {


  const [show, setShow] = useState(false);
  const [smShow, setSmShow] = useState(false);
  const [verify, setVerify] = useState("d-none");

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [register_name, setRegister_name] = useState('');
  const [register_email, setRegister_email] = useState('');
  const [register_phone, setRegister_phone] = useState('');
  const [register_password, setRegister_password] = useState('');
  const [register_locality, setRegister_locality] = useState('');
  const [register_city, setRegister_city] = useState('');
  const [register_state, setRegister_state] = useState('');
  const [register_zip, setRegister_zip] = useState('');
  const [userId, setUserId] = useState('');


  const [isSubmitingLoader, setisSubmitingLoader] = useState(false);
  // const [login, setLogin] = useState(localStorage.getItem(JSON.parse("token")));
  const login = 1;

  const route = useRouter();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLoginValidation = () => {
    // setisSubmitingLoader(true)
    // if (typeof window !== 'undefined') {
    //   const user = JSON.parse(localStorage.getItem("ElectricityId"))
    //   console.log("user", user)
    //   if (user) {
    //     toast.success("You are logged In");
    //     route.push('/checkout');

    //   } else {
    //     toast.error("Please Login first!!");
    //     route.push('/login');
    //   }
    // }
    // setisSubmitingLoader(false)
  }

  // const handleLogin = async (e) => {

  //   e.preventDefault();
  //   setisSubmitingLoader(true);
  //   if (email == '' || password == '') {
  //     toast.error("Both fields are required !!")
  //   }
  //   else {
  //     const login = {
  //       "email": email,
  //       "password": password,
  //       "user_type": "Customer"
  //     }
  //     try {
  //       const resp = await postData("/login", login);
  //       // console.log("resp Login", resp)
  //       if (resp?.success) {
  //         toast.success(resp?.message);
  //         if (typeof window !== 'undefined') {
  //           localStorage?.setItem("token", JSON.stringify(resp?.data?.token));
  //           localStorage?.setItem("userName", JSON.stringify(resp?.data?.name?.name))
  //           localStorage?.setItem("ElectricityId", JSON.stringify(resp?.data?.name?.id))
  //         }

  //       }
  //       else {
  //         toast.error(resp?.message);

  //       }
  //     } catch (error) {
  //       console.log("try-catch error", error)
  //     }

  //     setSmShow(false);
  //   }
  //   setisSubmitingLoader(false);
  //   route.refresh();
  // }

  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   setisSubmitingLoader(true)

  //   if (register_name == '' || register_email == '' || register_phone == '' || register_password == '' || register_city == '' || register_zip == '' || register_locality == '' || register_state == '') {
  //     toast.error("All fields are required!!")
  //   }
  //   else if (register_phone.length < 10) {
  //     toast.error("Please enter 10 digit phone number!!")
  //   } else if (register_zip.length !== 6) {
  //     toast.error("Please enter 6 digit Zipcode!!")
  //   }
  //   else {

  //     let person = {
  //       "name": register_name,
  //       "email": register_email,
  //       "user_phno": register_phone,
  //       "password": register_password,
  //       "user_locality": register_locality,
  //       "user_city": register_city,
  //       "user_state": register_state,
  //       "user_zipcode": register_zip,
  //       "user_type": "Customer"
  //     };

  //     try {
  //       const resp = await postData("/register", person);
  //       console.log("resp", resp);
  //       if (resp?.status) {
  //         toast.success("Customer Registered Successfully!!");
  //         setSmShow(false);
  //       }
  //       else {
  //         toast.error(resp?.errors?.email[0]);
  //         console.log("Customer register fail error", resp?.errors);
  //       }
  //     } catch (error) {
  //       console.log("catch Error", error)
  //     }

  //     //zip code validation try-catch block.
  //     // try {
  //     //   const filter_data = []
  //     //   const secondResp = await getData("/GetServiceLocation");
  //     //   // console.log("zip_data_response",secondResp);
  //     //   secondResp.data.map(e => filter_data.push(e.zip_code))
  //     //   // console.log("filter_data", filter_data)
  //     //   // console.log("register_zip",register_zip)
  //     //   // console.log(typeof(register_zip))
  //     //   // console.log(typeof(filter_data[0]))

  //     //   // console.log("boolean",filter_data.includes(register_zip))
  //     //   if (filter_data.includes(Number(register_zip))) {
  //     //     toast.success("We are available in your area!")
  //     //   }
  //     //   else {
  //     //     // toast.error("We don't provide services on this zipcode!!")

  //     //     Swal.fire({
  //     //       icon: 'error',
  //     //       title: 'Oops...',
  //     //       text: "We dont provide services in your area! ",

  //     //     })
  //     //   }
  //     // } catch (error) {
  //     //   console.log("try-catch error", error);
  //     // }


  //   }
  //   setisSubmitingLoader(false)


  // }

  // useEffect(() => {

  // }, []);

  const def_data = () => {
    if (typeof window !== 'undefined') {
      // const localUserId =  JSON.parse(localStorage.getItem("ElectricityId"))
      JSON.parse(localStorage.getItem("ElectricityId")) ? (setUserId(localStorage.getItem("ElectricityId"))) :("")
  }
  }


  useEffect(() => {
    def_data();
  }, []);


  return (<>
    {isSubmitingLoader ? (
      <div className="overlay">
        <div className="spinner-container">
          <img className="animatingSpinnerSvg" src="/spinner.svg" alt="" />
        </div>
      </div>
    ) : null}

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
              <Link href="/checkout" onClick={handleLoginValidation}>
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
              {/* <li>
                <MdKeyboardDoubleArrowRight />
                <Link href="/acservice">AC SERVICE</Link>
              </li> */}
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


    <div className="nav_model" >


      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title><Image src="/logo.png" height={50} width={200} alt="img" /></Modal.Title>
        </Modal.Header>


        
        <Modal.Body >

          {/* <Tabs defaultActiveKey="first" className="d-flex justify-content-around login_tabs">
            <Tab eventKey="first" title="Register" >
              <Form>
                <Row className="mb-2 mt-2">
                  <Form.Group as={Col} controlId="formGridName">
                     <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" value={register_name} onChange={(e) => setRegister_name(e.target.value)} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" value={register_email} onChange={(e) => setRegister_email(e.target.value)} />
                  </Form.Group>
                </Row>
                <Row className="mb-2 mt-2">
                  <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={register_password} onChange={(e) => setRegister_password(e.target.value)} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" placeholder="Phone" value={register_phone} onChange={(e) => setRegister_phone(e.target.value)} />
                  </Form.Group>
                </Row>



                <Form.Group className="mb-2" controlId="formGridAddress2">
                  <Form.Label>Address </Form.Label>
                  <Form.Control placeholder="Address" value={register_locality} onChange={(e) => setRegister_locality(e.target.value)} />
                </Form.Group>

                <Row className="mb-2">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control placeholder="City" value={register_city} onChange={(e) => setRegister_city(e.target.value)} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control placeholder="State" value={register_state} onChange={(e) => setRegister_state(e.target.value)} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="number" placeholder="Zipcode" value={register_zip} onChange={(e) => setRegister_zip(e.target.value)} />
                  </Form.Group>
                </Row>



                <Button variant="primary" className="mt-2" onClick={() => { setVerify("d-block"); toast.error("Phone Need to be varified!!") }}>
                  Verify phone number!!
                </Button>
              </Form>
              <div className={`${verify}`}>
                <hr />
                <Form.Group className="mb-2" >
                  <Form.Label className="mt-2">OTP</Form.Label>
                  <Form.Control placeholder="OTP" type="text" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleRegister} >
                  Submit
                </Button>

              </div>




            </Tab>
            <Tab eventKey="second" title="Login">
              <Form.Group className="mb-2" >
                <Form.Label className="mt-2">Email</Form.Label>
                <Form.Control placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-2" >
                <Form.Label>Password</Form.Label>
                <Form.Control placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleLogin}>
                Submit
              </Button>
            </Tab>

          </Tabs> */}
          <div className="d-flex justify-content-evenly">
            <Button variant="primary" onClick={() => route.push("/login")}>
              Login
            </Button>
            <Button variant="primary" onClick={() => route.push("/register")}>
              Register
            </Button>
          </div>

        </Modal.Body>

      </Modal>
    </div>
  </>);
}

export default Navbar;
