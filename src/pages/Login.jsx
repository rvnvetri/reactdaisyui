import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Authentication logic here
    };

    return (
        <>        
        <div className="w-full min-h-screen bg-blue-50">
            <div className="hero min-h-screen">
                <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                    <h1 className="text-2xl text-Primary">test</h1>
                <div className="hero-content w-full">
                    <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="label text-lg">Email</label>                                
                                <input type="email" className="input w-full" placeholder="Email" />
                                <label className="label text-lg">Password</label>
                                <input type="password" className="input w-full" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default Login;
