import Navlink from "./Navlink";

function Footer() {
  return (
    <footer className="h-fit w-full -mt-0.5">
      <div className="body overflow-hidden md:flex grid grid-cols-2">
        <div className="text-white flex flex-col justify-start items-start w-fit md:w-1/5 ml-10 sm:ml-14 md:ml-6 m-4 md:m-6 pl-3">
          <Navlink text={"Social Media:"} />
          <Navlink link={true} text={"Facebook"} />
          <Navlink link={true} text={"Instagram"} />
          <Navlink link={true} text={"Twitter"} />
          <Navlink link={true} text={"Youtube"} />
        </div>
        <div className="text-white flex flex-col justify-start items-start w-fit md:w-1/5 ml-8 sm:ml-10 md:ml-6 m-4 md:m-6 md:pl-3">
          <Navlink text={"Support:"} />
          <Navlink link={true} text={"Contact Us"} />
          <Navlink link={true} text={"FAQ"} />
          <Navlink link={true} text={"Downloads"} />
        </div>

        <div className="text-white flex flex-col justify-start items-start w-fit md:w-1/5 ml-10 sm:ml-14 md:ml-6 m-4 md:m-6 pl-3">
          <Navlink text={"About:"} />
          <Navlink link={true} text={"About Company"} />
          <Navlink link={true} text={"Jobs"} />
          <Navlink link={true} text={"Newsroom"} />
          <Navlink link={true} text={"History"} />
        </div>
        <div className="text-white flex flex-col text-xs sm:text-sm md:text-base md:mt-6 flex-1 m-6 ml-8 sm:ml-10 md:pr-5 mr-2 md:-ml-2">
          <Navlink text={"Stay Up to Date"} />
          <form className="flex flex-col m-1.5">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="border-b-[2px] border-white/50 bg-transparent py-0.5 outline-none focus:border-yellow-[#f1c224]/60"
            />
            <button
              type="submit"
              className="bg-[#fdcb25] text-[#202020] font-medium mt-7 w-3/6 rounded py-1.5 sm:p-1 text-xs sm:text-[14px] hover:bg-[#f1c224]/90">
              Sign UP
            </button>
          </form>
        </div>
      </div>
      <p className="text-white/70 text-center text-[13px] sm:text-sm md:text-base p-2 body2 -mt-0.5">
        Powered By <span className="text-white font-medium">Golden Sports</span>
        . All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
