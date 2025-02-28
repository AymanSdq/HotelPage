import Header from "../Components/Header"


const Home = () => {
    return (
        <>
            <Header />
            <section className="w-full md:px-16 bg-[#FAFAFA]">
                {/* Hero Section */}
                <div className="w-full  h-[calc(100vh-81px)] flex ">
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
                    <div className="w-1/2  bg-[url(/bghotel.png)] bg-cover ">
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home