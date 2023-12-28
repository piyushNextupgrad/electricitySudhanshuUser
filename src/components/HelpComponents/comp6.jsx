//customer profile
"use client"
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "@/styles/HelpComponentStyle/comp6.module.css"
import { getData, putData, postData } from '../../../services/services';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'sonner'
import { useRouter } from 'next/navigation';
import style from "@/styles/HelpComponentStyle/comp6.module.css";
import axios from 'axios';


const Comp6 = () => {

    const route = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [alt_phone, setAlt_phone] = useState('');
    const [Hno, setHno] = useState('');
    const [locality, setLocality] = useState('');
    const [lankmark, setLandmark] = useState('');
    const [zip, setZip] = useState();
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [userType, setUserType] = useState('')
    const [profile_photo, setProfile_photo] = useState('')
    const [current_photo, setCurrent_photo] = useState(null)
    const [isSubmitingLoader, setisSubmitingLoader] = useState(false);


    const getUser = async () => {
        setisSubmitingLoader(true)

        try {
            if (typeof window !== 'undefined') {
                const user_id = localStorage.getItem("ElectricityId")
                // console.log("user_id", user_id)

                const resp = await getData(`/GetAllUser?id=${user_id}`)
                console.log("get user resp", resp)
                resp.msg === 'No Data Found' ? toast.error(resp.msg) : ""
                setName(resp.data[0].name);
                setEmail(resp.data[0].email);
                setPhone(resp.data[0].user_phno);
                setAlt_phone(resp.data[0].user_alt_phno);
                setCity(resp.data[0].user_city);
                setCountry(resp.data[0].user_country);
                setLandmark(resp.data[0].user_landmark);
                setLocality(resp.data[0].user_locality);
                setZip(resp.data[0].user_zipcode);
                setState(resp.data[0].user_state);
                setHno(resp.data[0].user_house_num);
                setUserType(resp.data[0].user_type);
                setCurrent_photo(resp.data[0].user_profile_photo)

            }

        } catch (error) {
            console.log("try-catch error", error)
        }
        setisSubmitingLoader(false)
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        setisSubmitingLoader(true)


        try {

            if (zip.toString().length !== 6) {
                toast.error("Zipcode must be 6 digits!!")
                // console.log("zip",typeof(zip))
                // console.log("zip",zip.length)
            }
            else if (alt_phone.toString().length !== 10) {
                toast.error("Phone no must have 10 numbers!!")
                // console.log("phone",typeof(alt_phone))
            }
            else {
                try {
                    if (typeof window !== 'undefined') {
                        const user_id = localStorage.getItem("ElectricityId");
                        console.log("user-id", user_id)
                        // const person = {
                        //     "updId": user_id,
                        //     "name": name,
                        //     "user_alt_phno": alt_phone,
                        //     "user_locality": locality,
                        //     "user_house_num": Hno,
                        //     "user_landmark": lankmark,
                        //     "user_zipcode": zip,
                        //     "user_city": city,
                        //     "user_state": state,
                        //     "user_country": country,
                        //     "user_profile_photo":profile_photo,
                        //     "user_type": "Customer"
                        // }
                        const formData = new FormData();



                        formData.append('updId', user_id);
                        formData.append('name', name);
                        formData.append('user_alt_phno', alt_phone);
                        formData.append('user_locality', locality);
                        formData.append('user_house_num', Hno);
                        formData.append('user_landmark', lankmark);
                        formData.append('user_zipcode', zip);
                        formData.append('user_city', city);
                        formData.append('user_state', state);
                        formData.append('user_country', country);
                        formData.append('user_profile_photo', profile_photo);
                        formData.append('user_type', 'Customer');





                        // const resp = await postData('/UpdateUser', formData)
                        const resp = await axios.post("https://nextupgrad.us/electricity/api/UpdateUser", formData)

                        console.log("update user resp", resp)
                        resp.data.message === "User Updated Successfully" ? toast.success(resp.data.message) : toast.error(resp.data.message)

                        location.reload();
                    }
                } catch (error) {
                    console.log("try-catch error", error)
                }

            }



        } catch (error) {
            console.log("try-catch error", error)
        }

        setisSubmitingLoader(false)
    }

    const handleLogout = () => {
        setisSubmitingLoader(true)

        try {
            if (typeof window !== 'undefined') {
                localStorage.removeItem("token");
                localStorage.removeItem("userName");
                localStorage.removeItem("ElectricityId");

            }
            toast.success("SignOut Successfully!!")
            location.reload();

        } catch (error) {
            console.log("try-catch error", error)
        }
        setisSubmitingLoader(false);
    }

    useEffect(() => {
        getUser();

    }, [])


    return (
        <div >
            {isSubmitingLoader ? (
                <div className="overlay">
                    <div className="spinner-container">
                        <img className="animatingSpinnerSvg" src="/spinner.svg" alt="" />
                    </div>
                </div>
            ) : null}
            <Toaster position="top-center" richColors />


            <div className={style.profilepic}>
                <Image src={current_photo === null ? "/dummy.jpg" :`https://nextupgrad.us/electricity/public/images/profile_photo/${current_photo}` } height={200} width={200} alt='img' />
            </div>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} disabled />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type='text' value={locality} onChange={(e) => setLocality(e.target.value)} />

                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Profile Picture</Form.Label>
                        <Form.Control
                            type="file"
                            required
                            name="file"
                            onChange={(e) => setProfile_photo(e.target.files[0])}

                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} >
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="number" value={phone} disabled />
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>Alternate Phone</Form.Label>
                        <Form.Control type="number" value={alt_phone} onChange={(e) => setAlt_phone(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Form.Label>User Type</Form.Label>
                        <Form.Control type="text" value={userType} disabled />
                    </Form.Group>
                </Row>


                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>House No.</Form.Label>
                        <Form.Control type='text' value={Hno} onChange={(e) => setHno(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Landmark</Form.Label>
                        <Form.Control type='text' value={lankmark} onChange={(e) => setLandmark(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>ZipCode</Form.Label>
                        <Form.Control type='number' value={zip} onChange={(e) => setZip(e.target.value)} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type='text' value={city} onChange={(e) => setCity(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control type='text' value={state} onChange={(e) => setState(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Country</Form.Label>
                        <Form.Control type='text' value={country} onChange={(e) => setCountry(e.target.value)} />
                    </Form.Group>
                </Row>


                <div className='d-flex justify-content-evenly'>

                    {(email == "" || userType == "" || phone == "") ? (<Button variant="primary" onClick={() => route.push("/login")} >
                        Login
                    </Button>) : (<Button variant="primary" type="submit" onClick={handleUpdate}>
                        Update
                    </Button>)}
                    {(email == "" || userType == "" || phone == "") ? (<Button variant="primary" onClick={handleLogout} disabled>
                        Sign Out
                    </Button>) : (<Button variant="primary" type="submit" onClick={handleLogout}>
                        Sign Out
                    </Button>)}
                </div>
            </Form>
        </div>

    );
}

export default Comp6;