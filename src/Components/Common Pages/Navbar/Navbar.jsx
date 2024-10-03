// Navbar.js
// import React from 'react';
import { CiShop, CiViewList } from 'react-icons/ci';
import { FaCartArrowDown, FaUser } from 'react-icons/fa'
import { TiHomeOutline } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import Categoris from '../../Categoris/Categoris';
import Shop from '../../Shop/Shop';

function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100 flex ">
                <div className="navbar-start">
                    <Link className='font-bold text-2xl' to={'/'}>Evaly</Link>
                </div>

                {/* Main Search input and button */}
                <div className="navbar-center hidden lg:flex px-10 ">
                    <input type="text" placeholder="Search Items" className="input input-bordered w-72 max-w-xs focus:border-none bg-slate-100 text-black" />
                    <button className='btn btn-outline ms-2 border-none bg-slate-200 text-black font-semibold'>Search</button>
                </div>

                {/* Cart -- Sign in */}
                <div className="navbar-end flex gap-x-2 pe-3">
                    <span className='px-4 py-3 bg-slate-200 cursor-pointer text-black '><FaCartArrowDown /></span>
                    <span className='flex items-center px-3 py-2 bg-slate-200 gap-x-1 cursor-pointer text-black '><FaUser /><Link to={'/signin'}>Sign in</Link> </span>
                </div>
            </div>
            <hr className='mt-2 mb-3' />

            {/* Home -- Shop -- Category Section  */}
            <div className='flex gap-x-5 py-4'>
                <Link className='flex  items-center text-1xl font-medium cursor-pointer hover:underline underline-offset-4 hover:text-blue-500' to={'/'}><TiHomeOutline className='hover: text-md me-1'/> Home</Link>
                <Link className='flex  items-center text-1xl font-medium cursor-pointer hover:underline underline-offset-4 hover:text-blue-500' to={'/shop'}><CiShop className='hover: text-md me-1'/> Shop</Link>
                <Link className='flex  items-center text-1xl font-medium cursor-pointer hover:underline underline-offset-4 hover:text-blue-500' to={'/categoris'}><CiViewList className='hover: text-md me-1'/> Categories</Link>
                
            </div>
            {/* <hr /> */}
        </>
    )
}

export default Navbar;
