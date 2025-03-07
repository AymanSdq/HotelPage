import Footer from "../Components/Footer"
import Header from "../Components/Header"



const Explore = () => {


    return (
        <>
            <Header />
                {/* Header Section */}
                <section className="w-full relative">
                    <img src="/videohero.png" alt="Video" className="w-full h-[700px] object-cover" />
                    <img  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " src="/videopause.svg" alt="Video Start" />
                </section>
                {/* Section divs */}
                <section className="md:px-16 py-16"> 
                    <h1 className="raleway text-center font-semibold text-4xl">Take a tour</h1>

                    <div className="w-full flex flex-col gap-40 my-12">
                        {/* One Image */}
                        <div className="w-full relative h-[400px] bg-bottom bg-[url('/tourhotel.png')] bg-cover rounded-4xl">
                            <div className="absolute w-1/2 text-center gap-4 flex flex-col py-8 px-8 border-t-6 shadow-[0px_4px_30px_-5px_rgba(0,_0,_0,_0.1)] border-[#7c6a46] bg-white rounded-md left-1/2 transform -translate-x-1/2 -bottom-18">
                                <h1 className="text-[#7C6A46] raleway text-2xl font-semibold">Luxurious rooms</h1>
                                <p className="text-center">The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.Luxurious bedrooms that will make you never want to leave your room again. See more ideas about luxurious bedrooms, bedroom design</p>
                            </div>
                        </div>
                        {/* One Image */}
                        <div className="w-full relative h-[400px] bg-bottom bg-[url('/tourhotel.png')] bg-cover rounded-4xl">
                            <div className="absolute w-1/2 text-center gap-4 flex flex-col py-8 px-8 border-t-6 shadow-[0px_4px_30px_-5px_rgba(0,_0,_0,_0.1)] border-[#7c6a46] bg-white rounded-md left-1/2 transform -translate-x-1/2 -bottom-18">
                                <h1 className="text-[#7C6A46] raleway text-2xl font-semibold">Luxurious rooms</h1>
                                <p className="text-center">The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.Luxurious bedrooms that will make you never want to leave your room again. See more ideas about luxurious bedrooms, bedroom design</p>
                            </div>
                        </div>
                        {/* One Image */}
                        <div className="w-full relative h-[400px] bg-bottom bg-[url('/tourhotel.png')] bg-cover rounded-4xl">
                            <div className="absolute w-1/2 text-center gap-4 flex flex-col py-8 px-8 border-t-6 shadow-[0px_4px_30px_-5px_rgba(0,_0,_0,_0.1)] border-[#7c6a46] bg-white rounded-md left-1/2 transform -translate-x-1/2 -bottom-18">
                                <h1 className="text-[#7C6A46] raleway text-2xl font-semibold">Luxurious rooms</h1>
                                <p className="text-center">The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.Luxurious bedrooms that will make you never want to leave your room again. See more ideas about luxurious bedrooms, bedroom design</p>
                            </div>
                        </div>


                    </div>
                </section>
            <Footer />
        </>
    )
}

export default Explore