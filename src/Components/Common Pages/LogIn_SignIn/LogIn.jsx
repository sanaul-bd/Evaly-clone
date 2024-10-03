import React from 'react';
import { MdDriveFileRenameOutline, MdOutlineEmail, MdPassword } from 'react-icons/md';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className='lg:p-2'>
            <div>
                <h1 className='lg:text-2xl text-md  font-semibold text-center lg:my-4'>Log in to Evaly</h1>
            </div>
            <div className='flex justify-center my-2'>
                <div className='lg:w-2/5 w-full  border-solid border-1 border-gray-600 rounded-lg shadow-lg px-2 lg:py-8 py-3'>
                    <label className="input input-bordered flex items-center gap-2 mb-1 shadow-sm">
                        <MdDriveFileRenameOutline />
                        <input type="text" className="grow" placeholder="Fullname" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-1 shadow-sm">
                        <MdOutlineEmail />
                        <input type="text" className="grow" placeholder="Email" />
                    </label>

                    <label className="input input-bordered flex items-center gap-2 mb-1 shadow-sm">
                        <MdPassword />
                        <input type="password" className="grow" value="" placeholder='Enter password' />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-1 shadow-sm">
                        <MdPassword />
                        <input type="password" className="grow" value="" placeholder='Re Enter password' />
                    </label>
                </div>
            </div>
            <div className='flex w-full items-center justify-center'>
                <button className='lg:w-2/5 bg-black h-10 mt-3 rounded font-medium text-white w-full'>Create an Account</button>
            </div>
            <div className='flex w-full items-center justify-center my-2'>
                <button className=''>Alrady Have an account ? <Link className='underline-offset-2 underline' to={'/signin'}>Log in</Link></button>
            </div>
        </div>
    );
};

export default LogIn;