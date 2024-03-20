"use client"
import {useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {MdMessage, MdOutlineCreate, MdOutlineDashboard, MdOutlineManageAccounts} from "react-icons/md";
import {CgProfile} from "react-icons/cg";
import {FaSignOutAlt} from "react-icons/fa";
import {Logout} from "@/helper/logout";
import Link from "next/link";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    return (
        <>
            {/*Sidebar started*/}
            <div
                className={`${open ? 'w-72' : 'w-20'} hidden md:block sidebar h-screen px-5 pb-5 pt-8 duration-300 bg-dark-purple rounded-r-xl relative`}>
                {/* logo part*/}
                <div className="flex gap-x-4 items-center">
                    <img src={"logo.png"} className="cursor-pointer duration-500" alt="logo"/>
                    <h1 className={`text-white origin-left font-semibold text-xl duration-300 ${!open && "scale-0"}`}>Expense Tracker</h1>
                </div>
                {/* logo part ended*/}

                <div
                    className="w-[28px] h-[28px] grid place-items-center text-xl text-white bg-red-400 border-dark-purple absolute -right-4 top-9 rounded-full cursor-pointer">

                    {open ? (
                        <>
                            <IoIosArrowBack onClick={() => setOpen(!open)}/>

                        </>
                    ) : (
                        <>
                            <IoIosArrowForward onClick={() => setOpen(!open)}/>
                        </>
                    )
                    }
                </div>


                {/*menu-items*/}
                <ul className="pt-6 space-y-3">
                    <Link href={"/"} className="text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md">
                        <MdOutlineDashboard size={22}/>
                        <span className={`${!open && 'hidden'} origin-left duration-300`}>Dashboard</span>
                    </Link>
                    <Link href={"/transactions"} className="text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md">
                        <MdMessage size={22}/>
                        <span className={`${!open && 'hidden'} origin-left duration-300`}>Transactions</span>
                    </Link>
                    <li onClick={() => Logout()} className="text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md">
                        <FaSignOutAlt size={22}/>
                        <span className={`${!open && 'hidden'} origin-left duration-300`}>Logout</span>
                    </li>
                </ul>
                {/*menu-items ended*/}


            </div>
            {/*Sidebar Ended*/}
        </>
    );
};

export default Sidebar;