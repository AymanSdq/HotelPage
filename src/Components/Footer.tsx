

const Footer = () => {
  return (
    <>
      <footer className="footer md:px-16  sm:footer-horizontal py-15 text-white bg-[#7C6A46] ">
        <aside className="flex flex-col gap-4">
          <h1 className="font-bold dancing-script text-3xl -font-script ">Paradise view</h1>
          <p className="w-[277px] text-xs raleway text-justify">
            The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us)
          </p>
        </aside>
        <nav>
          <h6 className="footer-title raleway">Quick links</h6>
          <a className="link link-hover raleway">Room booking</a>
          <a className="link link-hover raleway">Rooms</a>
          <a className="link link-hover raleway">Contact</a>
          <a className="link link-hover raleway">Explore</a>
        </nav>
      <nav>
        <h6 className="footer-title raleway">Company</h6>
        <a className="link link-hover raleway">Privacy policy</a>
        <a className="link link-hover raleway">Refund policy</a>
        <a className="link link-hover raleway">F.A.Q</a>
        <a className="link link-hover raleway">About</a>
      </nav>
      <nav>
        <h6 className="footer-title raleway">Social media</h6>
        <a className="link link-hover raleway">Facebook</a>
        <a className="link link-hover">Twitter</a>
        <a className="link link-hover raleway">Instagram</a>
        <a className="link link-hover raleway">Linkedin</a>
      </nav>
      <nav>
        <h6 className="footer-title raleway">Newsletter</h6>
        <p className="text-xs w-[234px] raleway">Kindly subscribe to our newsletter to get latest deals on our rooms and vacation discount.</p>
        <div className="my-4">
          <input type="" placeholder="Enter your email" className="bg-white text-black rounded-md" />
        </div>
      </nav>
    </footer>
    <footer className="footer border-t border-[#D9D9D9] sm:footer-horizontal raleway footer-center text-white bg-[#7C6A46] py-12">
      <aside>
        <p className="raleway font-semibold">Paradise view 2023</p>
      </aside>
    </footer>
    </>
  );
};

export default Footer;
