import Hamburger from "hamburger-react";
import { useState } from "react"

const navbar = () => {
    const [isActive, setisActive] = useState(false);
    const toggleNavbar = () => {
        setisActive(!isActive);
    }

    return (
        <div className="sticky top-0 sm:px-[150px] bg-white py-[15px] z-[20] sm:py-[10px] shadow-md flex flex-col sm:flex-row sm:items-center justify-between">
            <div className="flex items-center justify-between z-10">
                <div className="px-[10px] flex gap-[5px] sm:gap-[10px] items-center">
                    <img src="/vite.svg" alt="" className="w-[40px] sm:w-[40px] sm:py-[10px]" />
                    <p className="font-[700] text-[20px] sm:text-[20px]">KOBER</p>
                </div>
                <div className="block sm:hidden mr-1 " onClick={toggleNavbar}>
                    <Hamburger color="#1D0A5B" size={20} />
                </div>
            </div>
            <div className={`shadow-md sm:shadow-none navBar ${isActive ? "active" : ""} min-h-[20vh] sm:min-h-0 pt-[10px] pb-[15px] sm:py-0`}>
                <ul className="flex flex-col sm:flex-row items-center sm:gap-[30px]">
                    <li className="py-[10px] text-[14px] sm:text-[14px] font-[700] font-poppins"><a href="#home" >HOME</a></li>
                    <li className="py-[10px] text-[14px] sm:text-[14px] font-[700] font-poppins"><a href="#about" >ABOUT</a></li>
                    <li className="py-[10px] text-[14px] sm:text-[14px] font-[700] font-poppins"><a href="#portfolio" >PORTFOLIO</a></li>
                    <li className="py-[10px] text-[14px] sm:text-[14px] font-[700] font-poppins"><a href="#contact" >CONTACT</a></li>
                </ul>
            </div>
        </div>
    )
}

export default navbar