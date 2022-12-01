function BoxInput({ OnChange,placeholder, ContainerClass, Class, children }) {
  return (
    <div
      className={`${
        ContainerClass ? ContainerClass : ""
      } relative h-full`}>
      <select
        onChange={OnChange}
        className={`${Class} text-[10px] md:text-sm boxInput pr-5`}>
        {children}
      </select>
      <svg
        className="absolute top-1/2 md:top-3 right-2 md:right-3 z-0 pointer-events-none w-[8px] h-[4px] md:w-[10px] md:h-[6px]"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1L6 6L11 1"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default BoxInput;
