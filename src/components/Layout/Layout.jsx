"use client"
import {useState} from 'react';
import Sidebar from "@/components/Layout/Sidebar";
import MobileMenu from "@/components/Layout/MobileMenu";
import {IoMdClose} from "react-icons/io";
import {HiMenuAlt3} from "react-icons/hi";

const Layout = ({children}) => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


    return (
        <>
            <div className="flex flex-col md:flex-row">
                <Sidebar/>
                <div className="content flex-1 h-screen md:overflow-y-scroll">
                    {/*Header Started*/}
                    <div className="shadow-md block md:hidden px-4 py-5 z-10 bg-white duration-300">
                        <div className="flex items-center justify-between">
                            <h1 className="font-bold font-serif text-3xl">Expense Tracker</h1>
                            <div>
                                {/* Mobile Hamburger icon */}
                                {showMenu ? (
                                    <IoMdClose
                                        onClick={toggleMenu}
                                        className=" cursor-pointer transition-all"
                                        size={30}
                                    />
                                ) : (
                                    <HiMenuAlt3
                                        onClick={toggleMenu}
                                        className="cursor-pointer transition-all"
                                        size={30}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    {/*Header Ended*/}

                    <div className="content-body w-full h-[80vh] md:h-auto overflow-y-scroll md:overflow-y-auto">
                        {children}
                    </div>
                </div>
            </div>

            <MobileMenu showMenu={showMenu}/>
        </>
    );
};

export default Layout;