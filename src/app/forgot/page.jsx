"use client"
import Link from "next/link"
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa6";


export default function Forgot() {
    const [isSubmitingLoader, setisSubmitingLoader] = useState(false);

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
                <div className="page-single construction-body">
                    <div className="container text-center single-page single-pageimage  ">
                        <div className="row">
                            <div className="col-xl-7 col-lg-6 col-md-12">
                                <img
                                    src="/forgot.svg"
                                    className="construction-img mt-7 h-300  "
                                    alt=""
                                />
                            </div>
                            <div className="col-xl-5  col-lg-6 col-md-12 ">
                                <div className="col-lg-11 ">
                                    <img
                                        src="/logo.png"
                                        className="header-brand-img light-view mb-4"
                                        alt="Aronox logo"
                                    />
                                    <div className="wrapper wrapper2">
                                        <form id="login" className="card-body" tabIndex={500}>
                                            <h2 className="mb-1 font-weight-semibold">Forgot Password</h2>
                                            <p className="mb-6">Sign In to your account</p>
                                            <div className="input-group mb-3">
                                                <span className="input-group-addon">
                                                    <FaEnvelope />
                                                </span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="EmailId"
                                                />
                                            </div>
                                            <div className="row mt-5">
                                                <div className="col-12">
                                                    <Link
                                                        href="/"
                                                        className="btn btn-primary btn-block"
                                                    >
                                                        Send
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="text-center text-muted mt-3 ">
                                                {" "}
                                                Forget it, <Link href="/login">send me back</Link> to the
                                                sign in screen.{" "}
                                            </div>
                                        </form>
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
