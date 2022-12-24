import React from 'react';
import {AiOutlineMenu, AiOutlineSearch} from "react-icons/ai";
import {BsFillCartFill} from "react-icons/bs";

function Navbar() {
    const {DATA} = ['kebaya', 'daily']
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/*Left side */}
            <div className='flex justify-center gap-2 items-center'>
                <AiOutlineMenu className={"md:hidden"} size={24} />
                <h1 className='text-2xl md:text-3xl cursor-pointer'>
                    <span className='font-bold text-gray-700'>Clot</span><span className='text-purple-700 font-bold'>her.</span>
                </h1>
            </div>
            {/* Search Button */}
            <div className={"border border-slate-300 text-slate-800 rounded-md flex justify-around items-center w-[200px] sm:w-[400px] lg:w-[500px] overflow-hidden"}>
                <input className={"bg-transparent p-2 focus:outline-none w-full"} type={"text"} placeholder={"Search Something..."} />
                <div>
                    <select className={"items-center border-l-[1px] w-32 px-2 py-2"}>
                        <option>Kebaya</option>
                    </select>
                </div>
                <div className={"bg-slate-800 p-2"}>
                    <AiOutlineSearch className={"text-white cursor-pointer"} size={24} />
                </div>
            </div>
            {/*Cart System*/}
            <button className={"bg-slate-900 text-white hidden md:flex items-center gap-1"}>
                <BsFillCartFill size={18} className={"mr-1"}/> Cart
            </button>
        </div>
    );
}

export default Navbar;