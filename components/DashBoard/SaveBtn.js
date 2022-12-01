import React from "react";

function SaveBtn({ Class }) {
  return (
    <div className={`flex justify-center ${Class}`}>
      <button
        type="reset"
        className="mx-1 border-2 text-[14px] font-medium border-[#f1c224] py-1 px-5 rounded hover:bg-[#f1c224] hover:text-[#101010]">
        Reset
      </button>
      <button
        type="submit"
        className="mx-1 border-2 text-[14px] font-medium text-[#101010] border-[#f1c224] bg-[#f1c224] py-1 px-5 rounded hover:opacity-90">
        Save Changes
      </button>
    </div>
  );
}

export default SaveBtn;
