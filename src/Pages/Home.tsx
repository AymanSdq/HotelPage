import { FaLocationDot } from "react-icons/fa6";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import Header from "../Components/Header"
import { useState } from "react";




const Home = () => {


    return (
        <>
            <Header />
            <section className="w-full md:px-16 bg-[#FAFAFA]">
                {/* Hero Section */}
                <div className="w-full relative h-[calc(100vh-81px)] flex ">
                    <div className="w-1/2 py-[59px] flex flex-col gap-6">
                        <h1 className="text-[50px] dancing-script font-semibold text-[#7C6A46]">Paradise View</h1>
                        <h2 className="text-[55px] leading-[70px] font-bold raleway w-[400px]">Hotel for every moment rich in emotion</h2>
                        <p className="raleway w-[261px]">Every moment feels like the first time in paradise view</p>
                        {/* Buttons */}
                        <div className="w-full flex my-8 gap-12">
                            <a href="#" className="text-xl px-9 py-4 rounded-full text-white bg-[#7C6A46]">Book now</a>
                            <a href="#" className="flex items-center gap-4">
                                <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="27.5" cy="27.5" r="27.5" fill="#00A699"/><path d="M21 36V18L34 27L21 36Z" fill="white"/></svg>
                                <p className="text-xl">Take a tour</p>
                            </a>
                        </div>
                    </div>
                    {/* Only image */}
                    <div className="w-1/2  bg-[url(/bghotel.png)] bg-cover ">
                    </div>
                    {/* Chekin */}
                    <div className="w-full bg-white h-30 absolute bottom-20">
                        <form action="" className="w-full h-full grid grid-cols-6 bg-white">
                            <div className="cols-span-1 flex justify-center items-center">
                                <div className="flex gap-4">
                                    <FaLocationDot className="text-3xl" />
                                    <div className="flex flex-col">
                                        <label htmlFor="location">Location</label>
                                        <select id="location" defaultValue="Pick a font" className="select pl-0 py-0 select-ghost w-[100px]">
                                            <option disabled={true}>Abuja</option>
                                            <option>New York</option>
                                            <option>Paris</option>
                                            <option>Viena</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="cols-span-1 flex justify-center items-center">
                                <div className="flex gap-4">
                                    <HiMiniBuildingOffice2 className="text-3xl" />
                                    <div className="flex flex-col">
                                        <label htmlFor="location">Room type</label>
                                        <select id="location" defaultValue="Pick a font" className="w-[100px] select pl-0 py-0 select-ghost">
                                            <option disabled={true}>Standard</option>
                                            <option>Duo</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="cols-span-1 flex justify-center items-center">
                                <div className="flex gap-4">
                                    <FaUser className="text-3xl" />
                                    <div className="flex flex-col">
                                        <label htmlFor="location">Person</label>
                                        <select id="location" defaultValue="Pick a font" className="w-[100px] select pl-0 py-0 select-ghost">
                                            <option disabled={true}>01</option>
                                            <option>02</option>
                                            <option>03</option>
                                            <option>04</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="cols-span-1 flex justify-center items-center">
                                <div className="flex gap-4">
                                    <FaCalendar className="text-3xl" />
                                    <div className="flex flex-col">
                                        <label htmlFor="location">Check in</label>
                                        <input type="date" placeholder="" className="input input-ghost" />
                                    </div>
                                </div>
                            </div>
                            <div className="cols-span-1 flex justify-center items-center">
                                <div className="flex gap-4">
                                    <FaCalendar className="text-3xl" />
                                    <div className="flex flex-col">
                                        <label htmlFor="location">Check Out</label>
                                        <input type="date" placeholder="" className="input input-ghost" />
                                    </div>
                                </div>
                            </div>
                            <div className="cols-span-1 flex justify-center items-center">
                                <button type="submit" className="text-[15px] rounded-md text-white bg-[#7C6A46] py-5 px-12">Book Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home