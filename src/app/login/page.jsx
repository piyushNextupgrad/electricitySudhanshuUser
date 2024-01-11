"use client"
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { FaCircleUser, FaLock, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa6";
import { IconName } from "react-icons/fc";
import Link from 'next/link';
import { useState } from 'react';
import { postData } from '../../../services/services';
import { Toaster, toast } from 'sonner'
import { useRouter } from 'next/navigation';
import { PiCornersOutLight } from 'react-icons/pi';




export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitingLoader, setisSubmitingLoader] = useState(false);


    const route = useRouter();
    

    const handleLogin = async (e) => {
        
        e.preventDefault();
        setisSubmitingLoader(true);
        const login = {
            "email": email,
            "password": password
        }
        try {
            const resp = await postData("/login", login);
            console.log("resp Login",resp)
            if (resp?.success) {
                toast.success(resp?.message);
                setTimeout(route.push("/"),4500);
                if(typeof window !== 'undefined'){
                localStorage?.setItem("token",JSON.stringify(resp?.data?.token));
                localStorage?.setItem("userName",JSON.stringify(resp?.data?.name?.name))
                localStorage?.setItem("ElectricityId",JSON.stringify(resp?.data?.name?.id))
            
            }
                
                // const session = sessionStorage.getItem("LogedIn");
                // console.log("session",typeof(session));
            }
            else {
                toast.error(resp?.message);
                
            }
        } catch (error) {
            console.log("try-catch error", error)
        }
        setisSubmitingLoader(false);
    }
    return (
        <>
            <div className="page">

                {isSubmitingLoader ? (
                    <div className="overlay">
                        <div className="spinner-container">
                            <img className="animatingSpinnerSvg" src="/spinner.svg" alt="" />
                        </div>
                    </div>
                ) : null}
                <Toaster position="top-center" richColors />
                <div className="page-single construction-body">
                    <div className="container text-center single-page single-pageimage  ">
                        <div className="row">
                            <div className="col-xl-7 col-lg-6 col-md-12">
                                <img
                                    src="/login.svg"
                                    className="construction-img mb-7 h-480  mt-5 mt-xl-0"
                                    alt=""
                                />
                            </div>
                            <div className="col-xl-5  col-lg-6 col-md-12 ">
                                <div className="col-lg-11">
                                    <img
                                        src="/logo.png"
                                        className="header-brand-img light-view mb-4"
                                        alt="logo"
                                    />
                                    <div className="wrapper wrapper2">
                                        <form id="login" className="card-body" tabIndex={500}>
                                            <h2 className="mb-1 font-weight-semibold">Login</h2>
                                            <p className="mb-6">Sign In to your account</p>
                                            <div className="input-group mb-3">
                                                <span className="input-group-addon">
                                                    <FaCircleUser />
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Username"
                                                    value={email}
                                                    onChange={(e) => setEmail(e?.target?.value)}
                                                />
                                            </div>
                                            <div className="input-group mb-4">
                                                <span className="input-group-addon">
                                                    <FaLock />
                                                </span>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e?.target?.value)}
                                                />
                                            </div>
                                            <div className="row mb-0">
                                                <div className="col-12">
                                                    <Link
                                                        href="/"

                                                        className="btn btn-primary btn-block"
                                                        onClick={handleLogin}
                                                    >
                                                        Login
                                                    </Link>
                                                    
                                                </div>
                                                <p className=" mt-1">
                                                    Don't have account?
                                                    <Link href="/register" className="text-primary ml-1">
                                                        Sign Up
                                                    </Link>
                                                </p>
                                                <div className="col-12 mb-0">
                                                    <Link
                                                        href="/forgot"
                                                        className="btn btn-link box-shadow-0 px-0"
                                                    >
                                                        Forgot password?
                                                    </Link>
                                                   

                                                </div>
                                                <div className="col-12 mb-0">
                                                    <Link
                                                        href="/"
                                                        className="btn btn-link box-shadow-0 px-0"
                                                    >
                                                        Home Page
                                                    </Link>
                                                   

                                                </div>
                                            </div>
                                        </form>
                                        <div className="card-body social-icons border-top">
                                            <a className="btn  btn-social btn-fb mr-2" href='https://www.facebook.com'>
                                                <FaFacebookF />
                                            </a>
                                            <a className="btn  btn-social btn-googleplus mr-2" href='https://www.youtube.com'>
                                                <FaYoutube />
                                            </a>
                                            <a className="btn  btn-social btn-twitter-transparant  " href='https://www.twitter.com'>
                                                <FaTwitter />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}