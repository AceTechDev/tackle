import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuButton from "./Navigations/MenuButton";

export default function Layout({ Header, children, title, description }) {
  Header = Header || true;
  const [show, setShow] = useState(false);
  const showMenu = () => {
    setShow(!show);
  };
  return (
    <>
      <Head>
        <title>{title ? title : "Tackle"}</title>
        <meta
          name="description"
          content={description ? description : "Generated by create next app"}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {Header && (
        <header className="header">
          <div className="logoContainer w-[72px] h-[90px] md:w-auto md:h-auto">
            <Image
              src="https://tackle.parsa.today/tackle.png"
              height={100}
              width={80}
              alt="Tackle"
            />
          </div>
          <nav>
            <ul className="justify-between hidden md:flex nav">
              <li className="li">
                <Link href="/">Players Market</Link>
              </li>
              <li className="li">
                <Link href="/BestPlayer">Best Players</Link>
              </li>
              <li className="li">
                <Link href="/">Who We Are</Link>
              </li>
              <li className="li">
                <Link href="/">Recent Transfers</Link>
              </li>
            </ul>
            <MenuButton show={show} showMenu={showMenu} />
          </nav>
          <div
            className={
              !show
                ? "opacity-0 absolute w-0 h-0"
                : "md:hidden absolute top-0 inset-x-0 transition-all duration-100 ease-out"
            }>
            <nav className="bg-[#161616]">
              <ul className="flex-col justify-center w-full p-6 nav">
                <li className="my-1 li">
                  <Link href="/">Players Market</Link>
                </li>
                <li className="my-1 li">
                  <Link href="/BestPlayer">Best Players</Link>
                </li>
                <li className="my-1 li">
                  <Link href="/">Who We Are</Link>
                </li>
                <li className="my-1 li">
                  <Link href="/">Recent Transfers</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      )}
      {children}
    </>
  );
}
