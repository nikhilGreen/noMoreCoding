import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import swal from 'sweetalert';

function forgotPassword() {

    const [email, setEmail] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Email :', email)
        fetch(`/api/auth/forgotPassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email:email})
        })
            .then(res => res.json())
            .then(res2 => {
                console.log('res2',res2)
                swal("Submitted", `Email : ${email}`, "success");
            })
    }

    return (
        <>

            <div className="w-full max-w-xs">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email Address" name='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Submit
                        </button>

                    </div>
                </form>

            </div>
        </>
    );
}

export default forgotPassword;