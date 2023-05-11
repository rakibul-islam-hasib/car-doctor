import React, { useContext } from 'react';
import NavBar from '../../headers/NavBar';
import img from '../../../assets/images/login/login.svg';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProviders';
import { FadeLoader } from 'react-spinners';
const Login = () => {
    const { login, loader, user  , setLoader} = useContext(AuthContext)
    if (user) {
        return <Navigate to={'/'} />
    }
    const handelFormSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password)
            .then(res => {
                console.log(res.user)
                setLoader(false)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        loader ? <div className="h-screen flex justify-center items-center">
            <FadeLoader color="#36d7b7" />
        </div> :
            <div className='w-[85%] mx-auto'>
                <NavBar />
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="mr-8">
                            <img src={img} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <h1 className="text-4xl font-bold">Login now!</h1>
                                <form onSubmit={handelFormSubmit}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input name='email' type="email" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                                <div className="divider">Or</div>
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="btn btn-ghost btn-sm btn-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon text-primary icon-tabler icon-tabler-brand-facebook" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4V8a1 1 0 0 1 1 -1h3V3h-3a5 5 0 0 0 -5 5v2H7" />
                                        </svg>
                                        <span className="ml-2">Facebook</span>
                                    </button>
                                    <button className="btn btn-ghost btn-sm btn-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M17.788 5.108A9 9 0 1021 12h-8" />
                                        </svg>
                                        <span className="ml-2">Google</span>
                                    </button>
                                </div>
                                <p className='text-center'><small>New to car doctor ?
                                    <Link
                                        className='text-primary font-bold'
                                        to={'/register'}>Register</Link></small></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Login;