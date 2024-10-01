function Header() {
  return (
    <div className="my-2 px-2 md:px-10 mx-auto flex items-center justify-between">
      <div className="">
        <p>Mob: 01751337773</p>
        <p>Or: 01860060068</p>
      </div>
      <div className="hidden lg:block">
        <h1 className="md:text-center italic">ASM</h1>
        <h1 className="text-xl text-rose-500 capitalize italic">
          English Private Center
        </h1>
      </div>

      <div className="rounded-full">
        <img src="/placeholder.jpg" alt="" className="w-24 h-24 rounded-full" />
      </div>
    </div>
  );
}

export default Header;
