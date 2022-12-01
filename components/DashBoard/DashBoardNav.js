import Link from "next/link";
import { useProjectContext } from "../../context/ProjectProvider";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";
import React from "react";

function DashBoardNav({ selected }) {
  const router = useRouter();
  const { userData, setUserData } = useProjectContext();
  const [token, setToken, removeCookie] = useCookies(["token"]);

  const logout = () => {
    removeCookie("token");
    setTimeout(() => {
      router.replace({
        pathname: "/",
      });
      setUserData(null);
    }, 50);
  };
  return (
    <div
      id="Dlist"
      className="text-gray-200 mb-2 mx-auto md:mx-0 md:mb-0 w-[100%] md:w-auto md:mt-10 md:ml-1.5 lg:ml-2 h-fit">
      <div className="hidden md:flex rounded-2xl border-2 md:p-1 lg:p-1.5 border-[#f1c224] md:mx-5 lg:m-2.5 mb-5 mt-1">
        <div className="flex flex-col items-start -m-1 justify-evenly py-[1em] px-[3em]">

          <h4 className="font-bold md:text-xl lg:text-2xl md:max-w-[80px] lg:max-w-[110px]">
            {userData?.type === 'user' ? `${userData?.firstName} ${userData?.lastName}` : userData?.name}
          </h4>
          <span className="flex text-[#f1c224] items-center lg:text-base md:text-sm font-12">
            <Link href="dashboard/EditProfile">Edit Profile</Link>
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
          </span>
        </div>
      </div>
      <div className="overflow-x-scroll md:overflow-x-hidden rounded-2xl border-2 px-2 md:px-2 py-1.5 md:py-4 mb-5 md:mb-2 border-[#f1c224] md:mx-5 lg:m-2.5 flex md:flex-col items-center">
        <div
          className={`${selected === "Req" ? "selected" : ""} ${`${
            userData?.isComplete ? "" : "disabled"
          }`} dashBoardList`}>
          {userData?.isComplete ? (
            <Link href="/dashboard/">Requests</Link>
          ) : (
            <Link href="#">Requests</Link>
          )}
        </div>

        <div
          className={`${selected === "Prof" ? "selected" : ""} dashBoardList`}>
          {userData?.isComplete ? (
            <Link href="/dashboard/EditProfile/">Profile</Link>
          ) : (
            <Link href="#">Profile</Link>
          )}
        </div>
        <div className="dashBoardList text-[#F01515] hover:bg-[#F01515] font-medium transition-all">
          <button onClick={() => logout()}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default DashBoardNav;
