function QuitButton({ func, Class }) {
  return (
    <button
      className={`w-3 opacity-90 hover:opacity-100 group ${Class}`}
      onClick={func}>
      <div className="w-full h-[2px] rounded-lg bg-gray-400 -rotate-45 translate-y-[1px]" />
      <div className="w-full h-[2px] rounded-lg bg-gray-400 rotate-45 -translate-y-[1px]" />
    </button>
  );
}

export default QuitButton;
