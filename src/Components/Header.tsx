import { NavLink } from "react-router";

const Header = () => {
    return (
        <div className="navbar --font-display bg-[#FAFAFA] py-4 md:px-16 outline-0">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" > {" "}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "} </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow" >
                <li><a href="#">Home</a></li>
                <li><a href="#">Explore</a></li>
                <li><a href="#">Rooms</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </div>
            <a  href="/" className="">
                <img src="/Logo.svg" alt="Logo" />
            </a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><NavLink to="/" end> Home </NavLink></li> 
                <li><NavLink to="/explore" end> Explore </NavLink></li>
                <li><NavLink to="/rooms" end> Rooms </NavLink></li>
                <li><NavLink to="/about" end> About </NavLink></li>
                <li><NavLink to="/contact" end> Contact </NavLink></li>
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn text-white bg-[#7C6A46]">Book now</a>
        </div>
        </div>
  );
};

export default Header;
