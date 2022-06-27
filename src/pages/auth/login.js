import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { signIn, getSession, signOut } from "next-auth/react"
import { ToastContainer, toast } from 'react-toastify';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoginStarted, setIsLoginStarted] = useState(false);
    const [loginError, setLoginError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        setLoginError("");
        setIsLoginStarted(true);
        toast.info("Processing request");
        signIn("credentials", {
            email,
            password,
        }).then(() => {
            toast.success("Login successful");
            })
            .catch((error) => {
                toast.error("Error: " + error.message);
            });
    };
    
    return (
        <>
            <ToastContainer />
            <div className="flex flex-col items-center justify-center h-screen bg-gray-700 sm:px-6">

                <div className="logo my-8 inline-block">
                    <img src="/images/2.png" width={40} height={50} alt="Dauntless Exchange" />
                </div>
                <div className="w-full max-w-sm p-4 bg-gray-900 rounded-md shadow-md sm:p-6">
                    <div className="flex items-center justify-center">
                        <span className="text-xl font-medium text-white">Login</span>
                    </div>
                    <form className="mt-4"
                        onSubmit={(e) => handleLogin(e)}
                        data-toggle="validator"
                        autoComplete="off">
                        <label htmlFor="email" className="block">
                            <span className="text-sm text-white">Email</span>
                            <input type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete="off"
                                className="block w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-800"
                                required />
                        </label>
                        <label htmlFor="password" className="block mt-3">
                            <span className="text-sm text-white">Password</span>
                            <input type="password"
                                id="password"
                                name="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-md focus:outline-none focus:shadow-outline focus:bg-gray-800"

                                required />
                        </label>
                        <div className="flex items-center justify-between mt-4">
                            <div>
                                <label className="inline-flex items-center">
                                    <input type="checkbox"
                                        className="text-indigo-600 border form-checkbox focus:outline-none focus:shadow-outline" />
                                    <span className="mx-2 text-sm text-white">Remember me</span>
                                </label>
                            </div>
                            <div>
                                <a className="block text-sm text-indigo-200 hover:underline focus:outline-none focus:underline"
                                    href="#">Forgot
                                    your password?</a>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button type="submit"
                                className="w-full px-4 py-2 text-sm text-center text-white bg-indigo-500 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 ">Sign
                                in</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login
export async function getServerSideProps(context) {
    const session = await getSession(context);
    console.log(session)
    if (session?.user?.role == 1) {
        return {
            props: {},
            redirect: {
                destination: "/admin",
                permanent: false,
            },
        };
    } else if (session?.user?.role == 2) {
        return {
            props: {},
            redirect: {
                destination: "/agent",
                permanent: false,
            },
        };
    } else if (session?.user?.role == 3) {
        return {
            props: {},
            redirect: {
                destination: "/support",
                permanent: false,
            },
        };
    } else if (session?.user?.role == 4) {
        return {
            props: {},
            redirect: {
                destination: "/user",
                permanent: false,
            },
        };
    } else {
        return {
            props: {
                session: session,
            },
        }
    }
}