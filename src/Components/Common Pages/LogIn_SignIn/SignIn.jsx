
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineEmail, MdPassword } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className='flex lg:justify-center py-2 '>
            <div className=' px-4 py-6 lg:w-2/5 w-full border-solid border-1 border-gray-600 rounded-lg shadow-lg my-10'>
                <div className=''>
                    <span className="label-text font-semibold">Enter Email</span>
                    <label className="input input-bordered flex items-center gap-2 shadow-md">
                        <MdOutlineEmail />
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                </div>
                <div>
                    <span className="label-text font-semibold ">Enter Email</span>
                    <label className="input input-bordered flex items-center gap-2 shadow-md">
                        <MdPassword />
                        <input type="password" className="grow" value="" placeholder='Enter Password' />
                    </label>
                </div>
                <button className='mb-2 bg-black h-10 mt-3 rounded font-medium text-white w-full'>Sign in</button>

                <div className='flex justify-center  items-center my-2 bg-slate-100 py-1 cursor-pointer'>
                    <FcGoogle />
                    <span className='ms-2'>Login with Google</span>
                </div>
                {/*  */}
                <div className='flex justify-center'>
                    <span className=''>Dont have an Account ? <Link className='underline-offset-2 underline' to={'/login'}>Sign up</Link> </span>
                </div>
            </div>
        </div>
    );
};

export default SignIn;