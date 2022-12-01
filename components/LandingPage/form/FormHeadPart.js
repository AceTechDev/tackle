function FormHeadPart({ setState, state }) {
  const typeHandler = () => {
    setState(!state);
  };
  return (
    <div className="flex items-center justify-evenly mb-5 text-center text-[#7d7d7d]">
      <button
        onClick={typeHandler}
        className={`mr-5 ${state && "form_selected_register-type"}`}>
        As Club
      </button>

      <div className="h-[20px] w-0 border-r-[1.6px] border-[#7d7d7d]/95"></div>
      <button
        onClick={typeHandler}
        className={`ml-5 ${!state && "form_selected_register-type"}`}>
        As Player
      </button>
    </div>
  );
}

export default FormHeadPart;
