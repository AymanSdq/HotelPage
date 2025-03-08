import { NavLink } from "react-router";

const Footer = () => {
  return (
    <>
      <footer className="footer md:px-16 px-6  md:footer-horizontal py-15 text-white bg-[#7C6A46] ">
        <aside className="flex flex-col gap-4">
          <h1 className="font-bold dancing-script text-3xl -font-script ">Paradise view</h1>
          <p className="w-[277px] text-xs raleway text-justify">
            The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us)
          </p>
        </aside>
        <nav>
          <h6 className="footer-title raleway">Quick links</h6>
          <NavLink to={"/rooms"} className="link link-hover raleway">Room booking</NavLink>  
          <NavLink to={"/rooms"} className="link link-hover raleway">Rooms</NavLink>
          <NavLink to={"/contact"} className="link link-hover raleway">Contact</NavLink>
          <NavLink to={"/explore"} className="link link-hover raleway">Explore</NavLink>
        </nav>
        <nav>
          <h6 className="footer-title raleway">Company</h6>
          <NavLink to={"/"} className="link link-hover raleway">Privacy policy</NavLink>  
          <NavLink to={"/"} className="link link-hover raleway">Refund policy</NavLink>  
          <NavLink to={"/"} className="link link-hover raleway">F.A.Q</NavLink>  
          <NavLink to={"/about"} className="link link-hover raleway">About</NavLink>  
        </nav>
        <nav>
          <h6 className="footer-title raleway">Social media</h6>
          <NavLink to={"/"} className="link link-hover raleway">Facebook</NavLink>
          <NavLink to={"/"} className="link link-hover">Twitter</NavLink>
          <NavLink to={"/"} className="link link-hover raleway">Instagram</NavLink>
          <NavLink to={"/"} className="link link-hover raleway">Linkedin</NavLink>
        </nav>
        <nav>
          <h6 className="footer-title raleway">Newsletter</h6>
          <p className="text-xs w-[234px] raleway">Kindly subscribe to our newsletter to get latest deals on our rooms and vacation discount.</p>
          <div className="my-4 relative  md:w-[360px] w-[270px]">
            <input type="" placeholder="Enter your email" className="bg-white text-black rounded-md py-3 border-none w-full px-4" />
            <button className="text-white bg-[#7C6A46] absolute right-[2px] top-[2px] px-4 rounded-sm bottom-[2px] ">Subscribe</button>
          </div>
        </nav>
    </footer>
    <footer className="footer border-t border-[#D9D9D9] sm:footer-horizontal raleway footer-center py-8 text-white bg-[#7C6A46]">
      <aside>
        <p className="raleway font-semibold">Paradise view 2023</p>
      </aside>
    </footer>
    </>
  );
};

export default Footer;
