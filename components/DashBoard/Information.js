function Information({ text1, text2, children, Class }) {
  return (
    <div className={`${Class} flex text-[11px] items-center my-1.5 sm:text-sm`}>
      {text1}
      <hr className="border-[#f1c224] mt-1 mx-2 flex-1" />
      {children}
      <span className={text2.length > 18 && "text-[10px] sm:text-[11px]"}>
        {text2}
      </span>
    </div>
  );
}

export default Information;
