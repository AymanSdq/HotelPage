import Footer from "../Components/Footer"
import Header from "../Components/Header"

const About = () => {
    return (
        <>
            <Header />
            {/* Hero */}
            <section className="w-full bg-cover mulish bg-[url('/contactimg.png')] flex flex-col gap-12 py-48 justify-center items-center">
                    <h1 className="text-6xl font-extrabold text-white mulish">About us</h1>
                    <p className="text-white font-semibold text-center mulish max-md:text-sm">The elegant luxury bedrooms in this gallery showcase custom interior  <br />  designs & decorating ideas. View pictures and find your <br />  perfect luxury bedroom design.</p>
            </section>
            {/* About us Section */}
            <section className="flex w-full md:flex-row flex-col my-24 gap-6 md:px-16">
                {/* Image section */}
                <div className="md:w-1/2  px-6 md:px-0 w-full flex flex-col items-center gap-4">
                    <img src="/Manager.png" className="h-[400px]  object-cover" alt="Manager" />
                    <h1 className="font-bold mulish text-xl text-center">Chidinma James (Manager)</h1>
                </div>
                {/* Text */}
                <div className="md:w-1/2 px-6 md:px-0 text-sm mulish text-justify items-center flex flex-col gap-4">
                    <p>The United Nations is an international organization founded in 1945. Currently made up of 193 Member States, the UN and its work are guided by the purposes and principles contained in its founding Charter. The UN has evolved over the years to keep pace with a rapidly changing world.But one thing has stayed the same: it remains the one place on Earth where all the world’s nations can gather together, discuss common problems, and find shared solutions that benefit all of humanity. The Secretary-General is Chief Administrative Officer of the UN – and is also a symbol of the Organization's ideals and an advocate for all the world's peoples, especially the poor and vulnerable.</p>
                    <p>The Secretary-General is appointed by the General Assembly on the recommendation of the Security Council for a 5-year, renewable term.The current Secretary-General, and the 9th occupant of the post, is António Guterres of Portugal, who took office on 1 January 2017.On the 18th of June, 2021, Guterres was re-appointed to a second term, pledging as his priority to continue helping the world chart a course out of the COVID-19 pandemic.</p>
                    <p>The United Nations is an international organization founded in 1945. Currently made up of 193 Member States, the UN and its work are guided by the purposes and principles contained in its founding Charter. The UN has evolved over the years to keep pace with a rapidly changing world.But one thing has stayed the same: it remains the one place on Earth where all the world’s nations can gather together, discuss common problems, and find shared solutions that benefit all of humanity. The Secretary-General is Chief Administrative Officer of the UN – and is also a symbol of the Organization's ideals and an advocate for all the world's peoples, especially the poor and vulnerable.</p>
                    <p>The Secretary-General is appointed by the General Assembly on the recommendation of the Security Council for a 5-year, renewable term. The current Secretary-General, and the 9th occupant of the post, is António Guterres of Portugal, who took office on 1 January 2017.On the 18th of June, 2021, Guterres was re-appointed to a second term, pledging as his priority to continue helping the world chart a course out of the COVID-19 pandemic.</p>
                </div>
            </section>
            {/* Brands */}
            <div className="w-full md:px-16 mb-12 flex flex-col gap-4 justify-center items-center">
                <h1 className="mulish text-3xl font-semibold">Clients</h1>
                <div className="flex items-center flex-col md:flex-row justify-center gap-6">
                    <img className="w-[76px]" src="/brand.png" alt="Brand Client" />
                    <img className="w-[76px]" src="/brand1.png" alt="Brand Client" />
                    <img className="w-[76px]" src="/brand2.png" alt="Brand Client" />
                    <img className="w-[76px]" src="/brand3.png" alt="Brand Client" />
                    <img className="w-[76px]" src="/brand4.png" alt="Brand Client" />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default About