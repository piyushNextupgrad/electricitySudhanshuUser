"use client"
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import { FaCircleUser, FaLock, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa6";
import { IconName } from "react-icons/fc";
import Link from 'next/link';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Toaster, toast } from 'sonner'

import { postData } from '../../../services/services';
import { useState } from 'react';
import { FaAddressBook } from 'react-icons/fa';
import { useRouter } from 'next/navigation';



export default function Ragister() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cnf_phone, setCnf_phone] = useState('');
    const [password, setPassword] = useState('');
    const [cnf_password, setCnf_password] = useState('');
    const [locality, setLocality] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [isSubmitingLoader, setisSubmitingLoader] = useState(false);

    const route = useRouter();

    const handleRagister = async (e) => {

        setisSubmitingLoader(true)
        e.preventDefault();
        if (name == "" || email == "" || phone == "" || password == "" || locality == "" || city == "" || state == "" || zip == "") {
            toast.error("All fields are required!!")
        }

        else if (phone !== cnf_phone) {
            toast.error("Phone Number Mismatched!!")
        } else if (password !== cnf_password) {
            toast.error("Password Mismatched!!")
        } else if (phone.length < 10) {
            toast.error("Please enter 10 digit phone number!!")
        } else if (zip.length !== 6) {
            toast.error("Please enter 6 digit Zipcode!!")
        }
        else {

            let person = {
                "name": name,
                "email": email,
                "user_phno": phone,
                "password": password,
                "user_locality": locality,
                "user_city": city,
                "user_state": state,
                "user_zipcode": zip,
                "user_type": "Customer"
            };

            try {
                const resp = await postData("/register", person);
                console.log("resp", resp);
                if (resp?.status) {
                    toast.success("Customer Registered Successfully!!");
                    setTimeout(route.push("/"), 4500)
                }
                else {
                    toast.error(resp?.errors?.email[0]);
                    console.log("Customer register fail error", resp?.errors);

                }



            } catch (error) {
                console.log("catch Error", error)
            }


        }
        setisSubmitingLoader(false)

    }

    return (

        <Form className='register container'>
            {isSubmitingLoader ? (
                <div className="overlay">
                    <div className="spinner-container">
                        <img className="animatingSpinnerSvg" src="/spinner.svg" alt="" />
                    </div>
                </div>
            ) : null}


            <Toaster position="top-center" richColors />
            <div className='row'>
                <div className='col-12 col-sm-12 col-lg-6 registration-img'>
                    <Image src="/login.svg" height={500} width={500} alt='logo' />
                </div>
                <div className='col-12 col-sm-12 col-lg-6 register-form mb-5 pt-5'>
                    <div>
                        <div className='register-logo mb-3'>
                            <Image src="/homepage/logo.png" height={50} width={200} alt='img' />
                        </div>
                        {/* <hr /> */}
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="number" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Confirm Phone</Form.Label>
                                <Form.Control type="number" placeholder="Phone" value={cnf_phone} onChange={(e) => setCnf_phone(e.target.value)} />
                                {/* <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select> */}
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={cnf_password} onChange={(e) => setCnf_password(e.target.value)} />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="Address" value={locality} onChange={(e) => setLocality(e.target.value)} />
                        </Form.Group>



                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control placeholder='State' value={state} onChange={(e) => setState(e.target.value)} />
                                {/* <Form.Select defaultValue="Choose..." >
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select> */}
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control type="number" placeholder='Zipcode' value={zip} onChange={(e) => setZip(e.target.value)} />
                            </Form.Group>
                        </Row>


                        <div className='d-flex justify-content-around'>
                            <Button variant="primary" type="submit" onClick={handleRagister}>
                                Ragister Now!!
                            </Button>
                            <Button variant="primary" onClick={() => route.push("/login")}>
                                Back to Login
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Form>
    )
}