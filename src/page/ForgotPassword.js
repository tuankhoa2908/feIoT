import React from "react";
import CustomInput from "../components/CustomInput";
import { Link } from "react-router-dom";

const ForgotPass = () => {
    return (
        <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
                <h3 className="text-center title">Forgot Password</h3>
                <p className="text-center">
                    Please Enter your register email to get reset password mail.
                </p>
                <form action="">
                    <CustomInput type="password" label="Email Address" id="email" />

                    <div className="d-flex flex-column align-items-center mt-2">
                        <button
                            className="button"
                            type="submit"
                        >
                            Send Link
                        </button>
                        <br />
                        <Link
                            to="/"
                            className="button text-decoration-none"
                        >
                            Return Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPass;