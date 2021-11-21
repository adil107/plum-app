import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { useScrollSection } from 'react-scroll-section';
const Navbar = () => {
    ///////begin use For Jumb To Section
    const homeSection = useScrollSection('home');
    const testiminialsSection = useScrollSection('testimonial_section');
    const featureSection = useScrollSection('feature_section');
    const purchaseSection = useScrollSection('purchase_section');
    ///////End use For Jumb To Section


    const [mobileShow, setMobileShow] = useState(false)

    return (
        <div className="fixed w-full bg-white shadow-lg z-50 top-0 h-20 sm:px-16">

            <nav className="max-w-7xl relative mx-auto px-5  flex h-full">
                <div className=" flex items-center">
                    <img src="./assets/images/logo.png" alt="Logo Images" className="w-32 sm:w-36" />
                </div>

                <div className="flex-1 sm:border-r ">
                    <ul className=" hidden lg:flex justify-end items-center h-full  ">
                        <NavLink to="#" className=" h-full inline-block mr-7">
                            <li onClick={homeSection.onClick} selected={homeSection.selected} className="CenterFlex navLi h-full ">HOME</li>
                        </NavLink>
                        <NavLink to="#" className=" h-full mr-7">
                            <li onClick={featureSection.onClick} selected={featureSection.selected} className="CenterFlex  navLi h-full " > FEATURES</li>
                        </NavLink>
                        <NavLink to="#" className=" h-full mr-7">
                            <li onClick={testiminialsSection.onClick} selected={testiminialsSection.selected} className="CenterFlex  navLi h-full ">TESTIMONIALS</li>
                        </NavLink>
                        <NavLink to="#">
                            <button onClick={purchaseSection.onClick} selected={purchaseSection.selected} className="uppercase  px-6 py-2.5 text-white rounded-sm transition-all duration-300 mr-6 " id="navBtn">Purchase</button>
                        </NavLink>

                    </ul>

                    {/*//// Menue Bar  //// */}
                    <div className="Mobile_Bar lg:hidden flex justify-end items-center h-full sm:mr-6">
                        <div className="flex cursor-pointer" onClick={() => { setMobileShow(!mobileShow) }}>
                            <h1 className="">MENU</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="hidden cartDiv relative sm:flex CenterFlex h-full ml-6  cursor-pointer ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4  transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <p className="px-2 py-0.5 ml-0.5 text-white font-semibold rounded-full bg-red-600 text-xs">0</p>

                    <div className="cartList absolute right-0 shadow py-6 w-72 pl-4 bg-white border-t-2 border-red-600">
                        <p>No Product in the cart</p>
                    </div>
                </div>


                {/* mobile Menue Slide  */}
                <div className={`${mobileShow ? 'h-52' : "h-0"} lg:hidden overflow-hidden px-5 absolute top-full left-0 right-0 bg-white border-t transition-all duration-300`}>
                    <ul className="mobile_Ul h-full ">
                        <NavLink to="#" className=" block">
                            <li className="py-2.5 border-b ">HOME</li>
                        </NavLink>
                        <NavLink to="#" className="block">
                            <li className="py-2.5 border-b ">FEATURES</li>
                        </NavLink>
                        <NavLink to="/#Testimonial_Section" className="block">
                            <li className="py-2.5 border-b">TESTIMONIALS</li>
                        </NavLink>
                        <NavLink to="#" className="block">
                            <button className="uppercase w-full bg-red-600 py-3 mt-4 text-sm text-white rounded-sm transition-all duration-300 ">Purchase</button>
                        </NavLink>

                    </ul>
                </div>
            </nav>

        </div >
    )
}

export default Navbar
