import Footer from "../Components/Footer"
import Header from "../Components/Header"

const About = () => {
    return (
        <>
            <Header />
            {/* Hero */}
            <section className="w-full bg-cover mulish bg-[url('/contactimg.png')] flex flex-col gap-12 py-48 justify-center items-center">
                    <h1 className="text-6xl font-extrabold text-white mulish">About us</h1>
                    <p className="text-white font-semibold text-center mulish">The elegant luxury bedrooms in this gallery showcase custom interior  <br />  designs & decorating ideas. View pictures and find your <br />  perfect luxury bedroom design.</p>
            </section>
            {/* About us Section */}

            <Footer />
        </>
    )
}

export default About