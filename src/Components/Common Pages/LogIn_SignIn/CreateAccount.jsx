import { useFormik } from 'formik'
import { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';


import * as Yup from 'yup';
const FormSchema = Yup.object({
    fName: Yup.string("Enter Name").min(2).max(10).required("fild is required"),
    lName: Yup.string("Enter Name").min(2).max(10).required("fild is required"),
    age: Yup.string(),
    email: Yup.string("Enter Email").required("fild is required").email(),
    number: Yup.string(),
    password: Yup.string().min(4).max(6).required(),
    rePassword: Yup.string().min(4).max(6).required().oneOf([Yup.ref("password"), null], "password dosn't match"), // if pass dosent match this logic here 
})

function CreateAccount() {

    // pass show !show fnc 
    const [reShow, setReShow] = useState(false);
    const [show, setShow] = useState(false);

    const initialValues = {
        fName: "",
        lName: "",
        age: "",
        email: "",
        number: "",
        password: "",
        rePassword: "",

    };

    // get exterct
    const { errors, handleBlur, handleChange, handleSubmit, touched, setFieldValue, values } = useFormik({
        initialValues,
        validationSchema: FormSchema,
        onSubmit: (values, { resetForm }) => {
            console.log("afterSubmit : ", values)
            // resetForm(values = "")
        }
    })
    console.log("errors here 🚩", errors)
    return (
        <div className=''>
            <div className="text-black bg-slate-100 w-full">
                <div className='text-center py-2 underline underline-offset-4 font-bold text-2xl text-gray-600'>
                    <h3>Create an Account</h3>
                </div>
                {/*  */}
                <form action="" onSubmit={handleSubmit}>
                    <div className='flex justify-center w-full py-5'>
                        <div className='lg:w-2/4' >
                            {/* 1 fName */}
                            <div className='flex flex-col'>
                                <label className="font-semibold" htmlFor="">First Name :</label>
                                <input className="bg-gray-300  py-1 rounded ps-1 my-1" type="text" name="fName" id="fName" placeholder="Enter First Name" value={values.fName} onChange={handleChange} onBlur={handleBlur} />
                                {/* error msg */}
                                {touched.fName && errors.fName ? <span><small>{errors.fName}</small></span> : ""}
                            </div>
                            {/* 2 lName */}
                            <div className='flex flex-col'>
                                <label className="font-semibold" htmlFor="">Last Name :</label>
                                <input className="bg-gray-300  py-1 rounded ps-1 my-1" type="text" name="lName" id="lName" placeholder="Enter Last Name" value={values.lName} onChange={handleChange} onBlur={handleBlur} />
                                {/* error msg */}
                                {touched.lName && errors.lName ? <span><small>{errors.lName}</small></span> : ""}
                            </div>
                            {/* age */}
                            <div className='flex flex-col'>
                                <label className="font-semibold" htmlFor="">Age :</label>
                                <input className="bg-gray-300  py-1 rounded ps-1 my-1" type="date" name="age" id="age" placeholder="Enter Age" value={values.age} onChange={handleChange} onBlur={handleBlur} />
                                {/* error msg */}
                                {touched.age && errors.age ? <span><small>{errors.age}</small></span> : ""}
                            </div>
                            {/* number : pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" */}
                            <div className='flex flex-col'>
                                <label className="font-semibold" htmlFor=""> Number :</label>
                                <input className="bg-gray-300  py-1 rounded ps-1 my-1" type="tel"
                                    name="number" id="number" placeholder="Giveen Number" value={values.number} onChange={handleChange} onBlur={handleBlur} />
                                {/* error msg */}
                                {touched.number && errors.umber ? <span><small>{errors.number}</small></span> : ""}
                            </div>
                            {/* email */}
                            <div className='flex flex-col'>
                                <label className="font-semibold" htmlFor="">Email :</label>
                                <input className="bg-gray-300  py-1 rounded ps-1 my-1" type="email" name="email" id="email" placeholder="Enter Email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                {/* error msg */}
                                {touched.email && errors.email ? <span><small>{errors.email}</small></span> : ""}
                            </div>
                            {/*password */}
                            <div className='flex flex-col relative'>
                                <label className="font-semibold" htmlFor="">Password :</label>
                                <input className="pe-11  bg-gray-300  py-1 rounded ps-1 my-1" type={show ? "text" : "password"} name="password" id="password" placeholder="Enter Password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                                {/* error msg */}
                                {touched.password && errors.password ? <span><small>{errors.password}</small></span> : ""}
                                <span className='text-gray-600 absolute right-4 top-9 text-md cursor-pointer '
                                    onClick={() => setShow(!show)}
                                >
                                    {show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                                </span>
                            </div>
                            {/* re enter password */}
                            <div className='flex flex-col relative'>
                                <label className="font-semibold" htmlFor="">Re Enter Password :</label>
                                <input className="pe-11  bg-gray-300  py-1 rounded ps-1 my-1" type={reShow ? "text" : "password"} name="rePassword" id="rePassword" placeholder="Re Enter Password" value={values.rePassword} onChange={handleChange} onBlur={handleBlur} />
                                {/* error msg */}
                                {touched.rePassword && errors.rePassword ? <span><small>{errors.rePassword}</small></span> : ""}
                                <span className='text-gray-600 absolute right-4 top-9 text-md cursor-pointer '
                                    onClick={() => setReShow(!reShow)}
                                >
                                    {reShow ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                                </span>

                            </div>
                            {/* \submit btn */}
                            <div className='flex justify-center'>
                                <button className='bg-green-700 hover:bg-green-600 transition-all px-28 py-2 rounded mt-3 text-white hover:text-yellow-50' type='submit'>Create Account</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='flex w-full items-center justify-center pb-3'>
                    <button className=''>Alrady Have an account ? <Link className='underline-offset-2 underline' to={'/Login'}>Log in</Link></button>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount
