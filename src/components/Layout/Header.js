"use client"
import {Logout} from "@/helper/logout";

const Header = () => {
    return (
        <>
            <div className="shadow-md py-6 px-2 md:px-12">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold font-serif text-lg md:text-3xl">Expense Management</h1>
                    <div className="flex gap-3 items-center">
                        <span className="text-gray-500 text-sm">Osman Goni</span>
                        <button onClick={() => Logout()}
                                className="px-3 py-1 bg-blue-500 text-white hover:bg-blue-700 rounded-md">Logout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;