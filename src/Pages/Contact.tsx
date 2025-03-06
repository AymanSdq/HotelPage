import Footer from "../Components/Footer"
import Header from "../Components/Header"


const Contact = () => {
    return (
        <>
            <Header />
                {/* Hero */}
                <section className="w-full bg-cover mulish bg-[url('/contactimg.png')] flex flex-col gap-12 py-48 justify-center items-center">
                    <h1 className="text-6xl font-extrabold text-white mulish">Contact</h1>
                    <p className="text-white font-semibold text-center mulish">The elegant luxury bedrooms in this gallery showcase custom interior <br />  designs & decorating ideas. View pictures and find your <br /> perfect luxury bedroom design.</p>
                </section>
                {/* Form */}
                <section className="w-full px-16 py-[80px]">
                    <div className="w-full flex justify-between">
                        <div className="flex flex-col">
                            <label className="text-xl mb-3 mulish" htmlFor="me">Fullname</label>
                            <input type="text" className="border px-4 py-3 w-[600px]" placeholder="e.g John Becker"/>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xl mb-3 mulish" htmlFor="me">Email</label>
                            <input type="email" className="border px-4 py-3 w-[600px]" placeholder="johnbecker@gmail.com" />
                        </div>
                    </div>
                    <div className="flex flex-col mt-12">
                            <label className="text-xl mb-3 mulish" htmlFor="me">Message</label>
                            <textarea className="w-full px-4 py-3 resize-none" name="" rows={8} placeholder="Hello"></textarea>
                        </div>
                </section>
                <section>
                <div><iframe width="100%" height="600" frameBorder="0" scrolling="no"  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/drones/">drone quadcopter</a></iframe></div>
                </section>
            <Footer />
        </>
    )
}

export default Contact