
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineEmail, MdPassword } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik'
import { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


import * as Yup from 'yup';
const FormSchema = Yup.object({
    email: Yup.string("Enter Email").required("fild is required").email(),
    password: Yup.string().min(4).max(10).required(),
})


const Login = () => {


    // pass show !show fnc 
    const [show, setShow] = useState(false);

    const initialValues = {
        email: "",
        password: "",

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

        <div className='flex lg:justify-center py-2 '>
            <div className=' px-4 py-6 lg:w-2/5 w-full border-solid border-1 border-gray-600 rounded-lg shadow-lg my-10'>
                <form action="" onSubmit={handleSubmit}>
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

                        <span className='text-gray-600 absolute right-4 top-9 text-md cursor-pointer '
                            onClick={() => setShow(!show)}
                        >
                            {show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                        </span>
                    </div>

                    {/* Submit button Here */}
                    <div>
                        <button type='submit' className='mb-2 bg-black h-10 mt-3 rounded font-medium text-white w-full'>Log in</button>
                    </div>
                </form>
                <div className='flex justify-center  items-center my-2 bg-slate-100 py-1 cursor-pointer'>
                    <FcGoogle />
                    <span className='ms-2'>Login with Google</span>
                </div>
                {/*  */}
                <div className='flex justify-center'>
                    <span className=''>Dont have an Account ? <Link className='underline-offset-2 underline' to={'/CreateAccount'}>Create an account</Link> </span>
                </div>
            </div>
        </div>
    );
};

export default Login;