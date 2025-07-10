import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from "react-router";
import { toast } from 'react-toastify'

const Signup = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log(data);
        return navigate("/auth/login")
    }

    return (
        <div className='h-screen w-screen flex items-center justify-center  bg-[#f8fafc]'>
            <form onSubmit={handleSubmit(onSubmit)} className="form flex flex-col items-center justify-evenly w-80 mb-20">
                <p className='text-blue-600 text-4xl font-bold mb-5 text-center'>Welcome to <span className='font-black'>AskBrief</span></p>
                <div className='w-full flex flex-col items-center justify-center gap-1 mb-4 '>
                    <input type='text' className='w-full  bg-white shadow-md rounded-4xl border border-gray-300 focus:outline-none focus:border-blue-500 px-5 py-3 text-lg' placeholder='username' {...register("username", { required: "Username is required", pattern: { value: /^[a-zA-Z0-9_]{3,20}$/, message: "Invalid Username" } })} />
                    <span className='w-full h-3 text-center'>{errors.username && <span className='text-red-500 text-sm'>{errors.username.message}</span>}</span>
                </div>
                <div className='w-full flex flex-col items-center justify-center gap-1 mb-4 '>
                    <input type='text' className='w-full  bg-white shadow-md rounded-4xl border border-gray-300 focus:outline-none focus:border-blue-500 px-5 py-3 text-lg' placeholder='user@example.com' {...register("email", { required: "Email is required", pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email" } })} />
                    <span className='w-full h-3 text-center'>{errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}</span>
                </div>
                <div className='w-full flex flex-col items-center justify-center gap-1 mb-4 '>
                    <input type='password' className='w-full bg-white shadow-md rounded-4xl border border-gray-300 focus:outline-none focus:border-blue-500 px-5 py-3 text-lg' placeholder='●●●●●●●●●●' {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be atleast 6 characters long" } })} />
                    <span className='w-full h-3 text-center'>{errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}</span>
                </div>
                <div className='w-full flex flex-col items-center justify-center gap-1 mb-4 '>
                    <input type='password' className='w-full bg-white shadow-md rounded-4xl border border-gray-300 focus:outline-none focus:border-blue-500 px-5 py-3 text-lg' placeholder='●●●●●●●●●●' {...register("confirm", { required: "Enter password to confirm", minLength: { value: 6, message: "Password must be atleast 6 characters long" } })} />
                    <span className='w-full h-3 text-center'>{errors.confirm && <span className='text-red-500 text-sm'>{errors.confirm.message}</span>}</span>
                </div>
                <input type="submit" value="Register" className='bg-blue-600 hover:bg-blue-500 transition-all p-2 rounded-4xl w-full px-5 py-3 font-medium mt-1   text-lg  text-white cursor-pointer' />
                <p className='text-sm text-gray-700 mt-2 font-semibold'>Already have an account? <NavLink to={"/auth/login"}><span className='text-blue-600 cursor-pointer'>Login</span></NavLink></p>
            </form>
        </div>
    )
}

export default Signup
