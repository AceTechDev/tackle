function AboutText({ children }) {
  return (
    <>
      <div className="flex items-center mb-4">
        About
        <svg
          className="m-1.5"
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.25 15.25H17.75V16.5H0.25V15.25ZM14.875 4.625C15.375 4.125 15.375 3.375 14.875 2.875L12.625 0.625C12.125 0.125 11.375 0.125 10.875 0.625L1.5 10V14H5.5L14.875 4.625ZM11.75 1.5L14 3.75L12.125 5.625L9.875 3.375L11.75 1.5ZM2.75 12.75V10.5L9 4.25L11.25 6.5L5 12.75H2.75Z"
            fill="#f1c224"
          />
        </svg>
      </div>
      <p className="pr-4 mb-10 text-xs font-light sm:text-sm md:text-base">
        {children}
      </p>
    </>
  );
}

export default AboutText;
