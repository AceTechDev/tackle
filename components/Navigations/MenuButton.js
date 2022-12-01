function MenuButton({ showMenu, show }) {
  return (
    <>
      <button
        onClick={showMenu}
        className="absolute z-50 top-[26px] right-[24px] md:hidden duration-400 opacity-90 hover:opacity-100 group">
        <div className={!show ? "bar" : "bar -rotate-45 translate-y-[6px]"} />
        <div className={!show ? "bar" : "bar opacity-0"} />
        <div className={!show ? "bar" : "bar rotate-45 -translate-y-[6px]"} />
      </button>
    </>
  );
}

export default MenuButton;
