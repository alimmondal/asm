import { FaBookReader } from "react-icons/fa";

function Header() {
  return (
    <div className="my-2 px-2 md: w-[85%] md:px-10 mx-auto flex items-center justify-between">
      <div className="dark:text-slate-400">
        <ul>
          <li>
            <a href="tel:+8801860060068">Mob: 01860060068</a>
          </li>
          <li>
            <a href="tel:+8801751337773">WhatsApp: 01751337773</a>
          </li>
        </ul>
      </div>
      <div className="hidden md:flex flex-col items-center justify-center ">
        <h1 className="">
          <FaBookReader />
        </h1>
        <h1 className="text-xl font-bold text-green-500 capitalize italic dark:text-slate-400">
          ASM English English Academy
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
