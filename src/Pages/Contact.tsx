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
                <iframe
  width="600"
  height="450"
  loading="lazy"
  src="https://www.google.com/maps/embed/v1/place?key=API_KEY
    &q=Space+Needle,Seattle+WA">
</iframe>
                </section>
            <Footer />
        </>
    )
}

export default Contact