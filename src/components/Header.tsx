import { FaBookReader } from "react-icons/fa";

function Header() {
  return (
    <div className="py-2 px-2 md:px-0 w-[85%] mx-auto md:flex items-center justify-between hidden">
      <div className="dark:text-slate-400">
        <ul>
          <li>
            <a href="tel:+8801860060068">01860060068</a>
          </li>
          <li>
            <a href="tel:+8801751337773">01751337773</a>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex flex-col items-center justify-center ">
        <h1 className="">
          <FaBookReader />
        </h1>
        <h1 className=" text-green-500 text-xl md:text-4xl dark:text-slate-400 heading2">
          ASM English Academy
        </h1>
      </div>

      <div className="">
        <img
          src="/man.jpg"
          alt=""
          className="w-24 h-24 rounded-full border border-slate-500 "
        />
      </div>
    </div>
  );
}

export default Header;
