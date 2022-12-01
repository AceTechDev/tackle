import Link from "next/link";

function Navlink({ link, text }) {
  return (
    <>
      {link ? (
        <div className="m-1.5 text-start text-[14px] hover:text-black">
          <Link href={"/"}>{text}</Link>
        </div>
      ) : (
        <h5 className="font-medium text-[16px] mx-1.5 my-3 ">{text}</h5>
      )}
    </>
  );
}

export default Navlink;
