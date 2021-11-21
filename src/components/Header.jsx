import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
    return (

        <div className="header grid grid-cols-2 mt-20  reletive ">
            <div className="header_1 pl-5 lg:pl-20 flex items-center" data-aos="fade-right" >
                <div className="pr-10">
                    <h1>Wireless the way it should be</h1>
                    <p>Proin lacinia nisl non ante aliquam, vitae eleifend magna mattis, mauris molestie.</p>
                    <NavLink to="#">
                        <button className=" rounded-sm transition-all duration-200 hover:bg-white hover:text-gray-600">DISCOVER MORE</button>
                    </NavLink>
                </div>
            </div>
            <div className=" header_2 relative overflow-hidden" data-aos="fade-left">
                <div className=" h-full">
                    <img src="./assets/images/001.png" alt="" id="headerImg" className=" relative " />
                </div>
            </div>
        </div >

    )
}

export default Header
