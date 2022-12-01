import React from "react";

function ReqBtn({ status,text,func }) {
  return (
      <div className='flex flex-row items-center'>
          {
              status?.id === 0 ? <span className='request_status mr-3'>
              {status?.name}
          </span> : ""
          }
        <button onClick={func} className={`request_btn ${status?.id === 1 ? 'accepted'  : status?.id === -1 ? 'rejected' : ''}`}>{text ? text : "View More"}</button>
      </div>
  );
}

export default ReqBtn;
