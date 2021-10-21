import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import swal from 'sweetalert';
import { loginType } from '../components/global';

function signUp() {

    const [signUp, setSignUp] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setSignUp({ ...signUp, [name]: value })
    }

    function isValid() {
        let isValid = true
        if (signUp.firstName == "") {
            isValid = false
            setFirstNameError("Please fill this required field !")
        } else {
            setFirstNameError("")
        }
        if (signUp.lastName == "") {
            isValid = false
            setLastNameError("Please fill this required field !")
        } else {
            setLastNameError("")
        }
        if (signUp.email == "") {
            isValid = false
            setEmailError("Please fill this required field !")
        } else {
            setEmailError("")
        } if (signUp.password == "") {
            isValid = false
            setPasswordError("Please fill this required field !")
        } else {
            setPasswordError("")
        }
        return isValid
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Email :', signUp.email)
        console.log('Password :', signUp.password)
        if (isValid()) {
            let userdata = {
                firstName: signUp.firstName,
                lastName: signUp.lastName,
                email: signUp.email,
                password: signUp.password,
                loginType: loginType.email
            }
            fetch(`/api/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userdata)
            }).then(res => res.json()).then(res2 => {
                console.log('res2',res2)
                swal("Submitted", `${res2.message}`, "success");
            })
        }
    }
    return (
        <>
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="flex flex-wrap mb-6">
                    <div className="w-full md:w-1/2 ">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            First Name
                        </label>
                        <input className="appearance-none block w-full  text-gray-700 border  rounded py-3 px-4 mb-3 " name="firstName" type="text" placeholder="Jane" value={signUp.firstName} onChange={handleInput} />
                        {firstNameError ? <p className="text-red-500 text-xs italic">{firstNameError}</p> : null}
                    </div>
                </div>
                <div className="flex flex-wrap mb-6">
                    <div className="w-full md:w-1/2 ">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Last Name
                        </label>
                        <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="lastName" type="text" placeholder="Doe" value={signUp.lastName} onChange={handleInput} />
                        {lastNameError ? <p className="text-red-500 text-xs italic">{lastNameError}</p> : null}
                    </div>
                </div>
                <div className="flex flex-wrap mb-6">
                    <div className="w-full md:w-1/2 ">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Email Address
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="email" type="email" placeholder="Doe" value={signUp.email} onChange={handleInput} />
                        {emailError ? <p className="text-red-500 text-xs italic">{emailError}</p> : null}
                    </div>
                </div>
                <div className="flex flex-wrap mb-6">
                    <div className="w-full md:w-1/2">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                            Password
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="password" type="password" placeholder="******************" value={signUp.password} onChange={handleInput} />
                        {passwordError ? <p className="text-red-500 text-xs italic">{passwordError}</p> : null}
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign Up
                    </button>

                </div>
            </form>
        </>
    );
}

export default signUp;