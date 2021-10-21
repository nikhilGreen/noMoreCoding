import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link'
import swal from 'sweetalert';
import { signIn, signOut, useSession } from 'next-auth/client'
import { loginType } from "../components/global";
import { useRouter } from 'next/router'
import { parseCookies, destroyCookie } from 'nookies';
import $ from "jquery";

export default function signin(props) {

    const [session, loading] = useSession()    
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [login, setlogin] = useState({
        email: "",
        password: ""
    });
    console.log('props signin',props);
    const router = useRouter()
    useEffect(() => {
        
        try {
            if (session) {
                
                console.log('session', session);
                let firstName = session.user.name.split(' ').slice(0, -1).join(' ');
                let lastName = session.user.name.split(' ').slice(-1).join(' ');
                let userdata = { email: session.user.email, firstName: firstName, lastName: lastName, profileImage: session.user.image, loginType: loginType.socialSite };
                
                fetch(`/api/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userdata)
                })
                    .then(res => res.json())
                    .then(res2 => {
                        console.log("res2----------------", res2)
                        if (res2.success) {
                            document.cookie = `tokenTest=${res2.token};max-age=` + 60 * 60 * 5;
                            // console.log(res2)
                            router.replace("/");
                        } else {
                            console.log("no response")
                            console.log(res2)
                            swal(`${res2.message}`, `${login.email}`, "warning");
                        }
                    }
                    )
                    console.log('if condn-------------------------------');
            }    
        } catch (error) {
            console.log('session',error);
        }

    }, [session])

    useEffect(() => {
    
        var params = new URLSearchParams(window.location.search);
        async function fetchMyAPI() {
            try {

                const id = params.get("id");
                if (id != null && id.trim() != null) {

                    const res = await fetch(`/api/auth/verification`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            'uid': id,
                        })
                    });

                    if (res.status >= 200 && res.status < 300) {
                        const data = await res.json();
                        console.log('data', data)
                    } else {
                        console.log('data not')
                    }
                } else {
                    return {
                        props: {}
                    }
                }
            } catch (error) {
                console.log("ERROR: ", error);
            }
        }
        fetchMyAPI()
    }, [])

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setlogin({ ...login, [name]: value })
    }

    function isValid() {
        let isValid = true
        if (login.email == "") {
            isValid = false
            setEmailError("Please fill this required field !")
        } else {
            setEmailError("")
        }
        if (login.password == "") {
            isValid = false
            setPasswordError("Please fill this required field !")
        } else {
            setPasswordError("")
        }
        return isValid
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Email :', login.email)
        console.log('Password :', login.password)
        if (isValid()) {
            let userdata = {
                email: login.email,
                password: login.password
            }
            fetch(`/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userdata)
            })
                .then(res => res.json())
                .then(res2 => {
                    if (res2.success) {
                        document.cookie = `tokenTest=${res2.token};max-age=` + 60 * 60 * 5;
                        console.log(res2)
                        router.replace('/')
                    } else {
                        console.log("no response")
                        console.log(res2)
                        swal(`${res2.message}`, `${login.email}`, "warning");
                    }
                }
                )
        }
    }

    return (
        <>

            <div className="w-full max-w-xs mx-auto my-10">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" name='email' value={login.email} onChange={handleInput} />
                        {emailError ? <p className="text-red-500 text-xs italic">{emailError}</p> : null}

                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" name='password' value={login.password} onChange={handleInput} />
                        {passwordError ? <p className="text-red-500 text-xs italic">{passwordError}.</p> : null}
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                        </button>
                        <Link href={'/forgotPassword'}>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Forgot Password?
                            </a>
                        </Link>
                    </div>
                    <div className="my-3">
                        {!session && <>

                            <a style={{cursor: 'pointer'}} className="mb-2" onClick={() => signIn("google", { callbackUrl: "http://localhost:3000" })}>Sign in As Google</a><br/>
                            <a style={{cursor: 'pointer'}} className="mb-2" onClick={() => signIn("github", { callbackUrl: "http://localhost:3000" })}>Sign in As Github</a><br/>
                            <a style={{cursor: 'pointer'}} className="mb-2" onClick={() => signIn("facebook", { callbackUrl: "http://localhost:3000" })}>Sign in As Facebook</a><br/>
                            {/* <a className="mb-2" onClick={() => signIn("twitter", { callbackUrl: "http://localhost:3000/" })}>Sign in As twitter</a><br/> */}
                        </>}
                    </div>
                    <div>
                        <Link href={'/signup'}>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                                Sign Up
                            </a>
                        </Link>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 Nikhil Corp. All rights reserved.
                </p>
            </div>

        </>
    );
}

export async function getServerSideProps(ctx) {
    var { tokenTest } = parseCookies(ctx)
    if (tokenTest && tokenTest != undefined) {
        return { props: { tokenTest } }
    } else {
        return { props: {} }
    }
}