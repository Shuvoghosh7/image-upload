import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
         fetch("http://localhost:5000/user/singpu", {
             method: "POST",
             headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify(data)
         })
             .then(res => res.json())
             .then(data => {
                 reset()
                 console.log(data)
             })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-base-100 mx-auto p-5 w-96">
                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="user Email"
                        className="input input-bordered bg-white w-full"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "email is required"
                            }
                        })}
                    />
                </div>
                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="User password"
                        className="input input-bordered bg-white w-full"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "password is required"
                            }
                        })}
                    />
                </div>
                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="confirm Password"
                        className="input input-bordered bg-white w-full"
                        {...register("confirmPassword", {
                            required: {
                                value: true,
                                message: "name is required"
                            }
                        })}
                    />
                </div>
                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text">Role</span>
                    </label>
                    <select {...register("role")}>
                        <option value="buyer">buyer</option>
                        <option value="store-manages">store-manages</option>
                        <option value="admin">admin</option>
                    </select>
                </div>
                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text">First Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="User first Name"
                        className="input input-bordered bg-white w-full"
                        {...register("firstName", {
                            required: {
                                value: true,
                                message: "firstName is required"
                            }
                        })}
                    />
                </div>
                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text">Last Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Use lastName"
                        className="input input-bordered bg-white w-full"
                        {...register("lastName", {
                            required: {
                                value: true,
                                message: "name is required"
                            }
                        })}
                    />
                </div>
                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text">Contact Number</span>
                    </label>
                    <input
                        type="text"
                        placeholder="user contact Number"
                        className="input input-bordered bg-white w-full"
                        {...register("contactNumber", {
                            required: {
                                value: true,
                                message: "name is required"
                            }
                        })}
                    />
                </div>
                <div className="form-control w-full mx-auto">
                    <label className="label">
                        <span className="label-text">Status</span>
                    </label>
                    <select {...register("status")}>
                        <option value="active">active</option>
                        <option value="inactive">inactive</option>
                        <option value="admin">blocked</option>
                    </select>
                </div>

                <div className="modal-action w-full mx-auto m-5">
                    <input className='btn btn-accent text-white w-full' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default Register;