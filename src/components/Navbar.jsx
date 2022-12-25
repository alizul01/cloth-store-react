import { Fragment, useState } from "react";
import { AiOutlineCheckSquare, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsChevronBarExpand, BsChevronExpand, BsFillCartFill } from "react-icons/bs";
import { Listbox } from "@headlessui/react";
import { AiFillCheckSquare } from "react-icons/ai";

const categoryData = [
    { id: 1, category: "kebaya" },
    { id: 2, category: "kemeja" },
    { id: 3, category: "kaos" },
    { id: 4, category: "jaket" },
    { id: 5, category: "sweater" },
];

function Navbar() {
    const [selectedCategory, setCategory] = useState(categoryData[0]);
    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/*Left side */}
            <div className="flex justify-center gap-2 items-center">
                <AiOutlineMenu className={"md:hidden"} size={24} />
                <h1 className="text-2xl md:text-3xl cursor-pointer">
                    <span className="font-bold text-gray-700">Clot</span>
                    <span className="text-purple-700 font-bold">her.</span>
                </h1>
            </div>
            {/* Search Button */}
            <div
                className={
                    "border border-slate-300 text-slate-800 rounded-md flex justify-around items-center w-[200px] sm:w-[400px] lg:w-[500px] overflow-hidden"
                }
            >
                <input
                    className={"bg-transparent p-2 focus:outline-none w-full"}
                    type={"text"}
                    placeholder={"Search Something..."}
                />
                <div>
                    <Listbox value={selectedCategory} onChange={setCategory}>
                        <Listbox.Button className={"relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md"}>
                            {selectedCategory.category}
                            {/* chevron up down react icons */}
                            <BsChevronExpand className={"absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400"} size={18} />
                        </Listbox.Button>
                        <Listbox.Options className="absolute mt-1 max-h-60 w-40 overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {categoryData.map((data) => (
                                <Listbox.Option key={data.id} value={data} as={Fragment} className={"cursor-pointer text-slate-800 text-base p-2 w-full capitalize hover:text-slate-800 hover:bg-slate-100 flex gap-2"}>
                                    {({ active, selected }) => (
                                        <li
                                            className={`${active ? "bg-slate-100" : "bg-white"} w-full flex justify-between items-center`}
                                        >
                                            {selected && <AiOutlineCheckSquare size={24} />}
                                            {data.category}
                                        </li>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Listbox>
                </div>
                <div className={"bg-slate-800 p-2"}>
                    <AiOutlineSearch className={"text-white cursor-pointer"} size={24} />
                </div>
            </div>
            {/*Cart System*/}
            <button
                className={"bg-slate-900 text-white hidden md:flex items-center gap-1"}
            >
                <BsFillCartFill size={18} className={"mr-1"} /> Cart
            </button>
        </div>
    );
}

export default Navbar;
