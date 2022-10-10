import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const HandealLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value
        fetch("http://localhost:5000/user/login", {
             method: "POST",
             headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify({email, password})
         })
             .then(res => res.json())
             .then(data => {
             localStorage.setItem('token', data.data.token);
                 console.log(data.data.token)
             })
    }
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content w-full">
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={HandealLogin} class="form-control">
                            <label class="label">Email</label>
                            <input type="email" name="email"  class="input input-bordered" />
                            <label class="label">Password</label>
                            <input type="password" name="password" class="input input-bordered" /> <br />
                            <input type="submit" value="Login" class="btn btn-primary mt-5" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;