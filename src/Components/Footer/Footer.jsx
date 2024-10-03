import React from 'react';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=''>
            <hr className='mb-6' />
            <footer className="footer bg-base-100 text-gray-400 px-3 py-10 mt-3 rounded text-base flex justify-around ">
                <div className=''>
                    <Link className='font-bold text-2xl' to={'/'}>Evaly</Link>
                    <span>Evaly corporation. </span>
                    <span>Belive in you. </span>
                    <div className='w-full flex justify-between items-center mt-3'>
                        <p className='font-medium'>Follow Us</p>
                        <div className='ms-2 flex gap-x-3 py-1'>
                            <span className='hover:text-white font-bold cursor-pointer text-lg'><FaFacebookF /> </span>
                            <span className='hover:text-white font-bold cursor-pointer text-lg'><AiOutlineYoutube /> </span>
                            <span className='hover:text-white font-bold cursor-pointer text-lg'><FaInstagram /> </span>
                        </div>
                    </div>
                </div>
                <nav className=''>
                    <h6 className="footer-title">Services</h6>
                    <Link className="hover:text-white">Branding</Link>
                    <Link className="hover:text-white">Design</Link>
                    <Link className="hover:text-white">Marketing</Link>
                    <Link className="hover:text-white">Advertisement</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link className=' hover:text-white' to={'/aboutus'}>About Us</Link>
                    <Link className=' hover:text-white' to={'/contact'}>Contact Us</Link>
                    <Link className=' hover:text-white' to={'/jobs'}>Jobs Search</Link>
                    <Link className=' hover:text-white' to={'/jobs'}>Our Team</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <Link className=' hover:text-white' to={'/t&u'}>Terms of use</Link>
                    <Link className=' hover:text-white' to={'/privacy'}>Privacy policy</Link>
                    <Link className=' hover:text-white' to={'/cookie'}>Cookie policy</Link>
                    <Link className=' hover:text-white' to={'/cookie'}>Article </Link>
                </nav>
            </footer>
            <div className='pt-4 text-center'>
                <span className='text-gray-400 font-semibold'>All Right Reserved DevConfig-BD@</span>
            </div>
        </div>
    );
};

export default Footer;