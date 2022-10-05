import React from 'react';
import logo from '../../../images/Logo.png'

const Navigation = () => {
    return (
        <>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href='/'>About</a></li>
                            <li><a href='/'>Features</a></li>
                            <li><a href='/'>Pricing</a></li>
                            <li><a href='/'>Testimonials</a></li>
                            <li><a href='/'>Help</a></li>
                        </ul>
                    </div>

                    {/* logo */}

                    <a className='' href='/'>
                        <div className="w-[110px] md:w-36 lg:w-full">
                            <img src={logo} alt='logo' />
                        </div>
                    </a>

                    {/* logo */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Features</a></li>
                        <li><a href='/'>Pricing</a></li>
                        <li><a href='/'>Testimonials</a></li>
                        <li><a href='/'>Help</a></li>
                    </ul>
                </div>
                <div className="navbar-end">

                    <a href='/' className="btn btn-sm normal-case btn-ghost">Sign in</a>

                    <a href='/' className="btn btn-secondary btn-sm md:ml-5 md:px-8 normal-case text-[#F53835] btn-outline rounded-full">Sign Up</a>

                </div>
            </div>


        </>
    );
};

export default Navigation;