function LoadMore({ func, length, limit }) {
  return (
    <button
      onClick={() => console.log(limit, length)}
      className={
        length - 1 <= limit
          ? "hidden"
          : "text-white flex m-auto justify-center items-center"
      }>
      {}
      Load More
      <svg
        className="mt-1 ml-1"
        width="13"
        height="6"
        viewBox="0 0 16 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1L8 8L15 1"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default LoadMore;
