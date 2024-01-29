import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";

import CustomInput from "../components/CustomInput";
import { login } from "../features/auth/authSlice";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let schema = Yup.object().shape({
        email: Yup.string().email("Email must a valid email.").required("Email is required."),
        password: Yup.string().required("Password is required.")
    })
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            dispatch(login(values));
        },
    });
    const authState = useSelector((state) => state);
    console.log(authState)

    const { user, isLoading, isError, isSuccess, message } = authState.auth;

    useEffect(() => {
        if (isSuccess) {
            navigate("/admin");
        }
        else {
            navigate("");
        }
    }, [user, isLoading, isError, isSuccess, message])
    return (
        <div className="py-5 login-container" >
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
                <h3 className="text-center title">Login</h3>
                <p className="text-center">Login to your account to continue.</p>
                <div className="error text-center">
                    {message.message === "Rejected" ? "You are not admin." : ""}
                </div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        label="Email Address"
                        id="email"
                        name="email"
                        onChng={formik.handleChange("email")}
                        val={formik.values.email}
                        placeholder="Enter email address..."
                    />
                    <div className="error">
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <CustomInput
                        type="password"
                        label="Password"
                        id="pass"
                        name="password"
                        onChng={formik.handleChange("password")}
                        val={formik.values.password}
                        placeholder="Enter Password..."
                    />
                    <div className="error">
                        {formik.touched.password && formik.errors.password ? (
                            <div>{formik.errors.password}</div>
                        ) : null}
                    </div>
                    <div className="mb-3 text-end">
                        <Link to="forgot-pass" className="button">
                            Forgot Password?
                        </Link>
                    </div>
                    <button
                        className="border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5"
                        style={{ background: "#ffd333" }}
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;