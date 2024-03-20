"use client"
import {FaSignOutAlt} from "react-icons/fa";
import {MdMessage, MdOutlineCreate, MdOutlineDashboard, MdOutlineManageAccounts} from "react-icons/md";
import {CgProfile} from "react-icons/cg";
import {Logout} from "@/helper/logout";
import Link from "next/link";


const MobileMenu = ({showMenu}) => {

    return (
        <>
            <div
                className={`${showMenu ? "left-0" : "-left-[100%]"} fixed top-0 bottom-0 h-screen z-20 w-[72] bg-dark-purple dark:text-white px-5 pb-5 pt-8 md:hidden transition-all duration-500 rounded-r-xl shadow-md`}>
                {/* logo part*/}
                <div className="flex gap-x-4 items-center">
                    <img src={"logo.png"} className="cursor-pointer duration-500" alt="logo"/>
                    <h1 className={`text-white origin-left font-semibold text-2xl duration-300`}>Expense
                        Tracker</h1>
                </div>
                {/* logo part ended*/}


                <ul className="pt-6 space-y-3">
                    <Link href={"/"} className="text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md">
                        <MdOutlineDashboard size={22}/>
                        <span className="origin-left duration-300">Dashboard</span>
                    </Link>
                    <Link href={"/transactions"} className="text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md">
                        <MdMessage size={22}/>
                        <span className="origin-left duration-300">Transactions</span>
                    </Link>
                    <li onClick={() => Logout()} className="text-gray-300 text-lg flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md">
                        <FaSignOutAlt size={22}/>
                        <span className="origin-left duration-300">Logout</span>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default MobileMenu;