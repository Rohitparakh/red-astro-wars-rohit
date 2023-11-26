import Image from "next/image";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
const Navbar = () => {
    const [mode, setMode] = useState(null);
    const location = useRouter();
    console.log(location)
    const [url, setUrl] = useState(null);
    useEffect(() => {
      setUrl(location.pathname);
    }, [location]);

    if (mode === "open") {
        return (
          <>
            <header className="header w-full fixed z-10 top-0">
              <div className="container mx-auto flex flex-col justify-between items-center py-5">
                <div className="flex w-full mx-5 md:mx-0 justify-between md:justify-start">
                  <div className="ml-5 w-[32px] h-[32px] md:w-[48px] md:h-[48px]">
                    <Link href="/" passHref>
                      <Image
                        src="/logo.png"
                        alt="logo"
                        width={48}
                        height={48}
                        className="cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="md:hidden mr-5 text-white flex justify-center items-center">
                    <HiMenu
                      className="hidden w-7 h-7"
                      onClick={() => {
                        setMode("open");
                      }}
                    />
                    <IoClose
                      className="w-7 h-7"
                      onClick={() => {
                        setMode("close");
                      }}
                    />
                  </div>
                </div>
                <div className="md:flex mx-5 md:mx-0 flex-col md:flex-row justify-center md:justify-around text-white text-sm w-[868px] space-y-5 md:space-y-0 bg-black md:bg-transparent mt-5 md:mt-0 py-5 md:py-0">
                  <Link href="/home" passHref>
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                      <p
                        className={
                          "text-[16px]" + (url === "/home" ? " activeLink" : "")
                        }
                      >
                        HOME
                      </p>
                      {/* <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p> */}
                    </div>
                  </Link>
                  <div className="md:hidden flex justify-center items-center">
                    <hr className="mx-auto w-[305px] border" />
                  </div>
                  <Link href="/avatars" passHref>
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                      <p
                        className={
                          "text-[16px] op0" +
                          (url === "/avatars" ? " activeLink" : "")
                        }
                      >
                        AVATARS
                      </p>
                      {/* <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p> */}
                    </div>
                  </Link>
                  <div className="md:hidden flex justify-center items-center">
                    <hr className="mx-auto w-[305px] border" />
                  </div>
                  <Link href="/roadmap" passHref>
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                      <p
                        className={
                          "text-[16px]" +
                          (url === "/roadmap" ? " activeLink" : "")
                        }
                      >
                        ROADMAP
                      </p>
                      {/* <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p> */}
                    </div>
                  </Link>
                  <div className="md:hidden flex justify-center items-center">
                    <hr className="mx-auto w-[305px] border" />
                  </div>
                  <Link href="/assets" passHref>
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                      <p
                        className={
                          "text-[16px]" +
                          (url === "/assets" ? " activeLink" : "")
                        }
                      >
                        ASSETS
                      </p>
                      {/* <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p> */}
                    </div>
                  </Link>
                  <div className="md:hidden flex justify-center items-center cursor-pointer">
                    <hr className="mx-auto w-[305px] border" />
                  </div>
                  <Link href="/martianverse" passHref>
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                      <p
                        className={
                          "text-[16px]" +
                          (url === "/martianverse" ? " activeLink" : "")
                        }
                      >
                        MARTIANVERSE
                      </p>
                      {/* <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p> */}
                    </div>
                  </Link>
                  <div className="md:hidden flex justify-center items-center cursor-pointer">
                    <hr className="mx-auto w-[305px] border" />
                  </div>
                  <Link href="/marketplace" passHref>
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                      <p
                        className={
                          "text-[16px]" +
                          (url === "/marketplace" ? " activeLink" : "")
                        }
                      >
                        MARKETPLACE
                      </p>
                      {/* <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p> */}
                    </div>
                  </Link>
                  <div className="md:hidden flex justify-center items-center cursor-pointer">
                    <hr className="mx-auto w-[305px] border" />
                  </div>
                  <Link href="https://martianverse.redastrowars.io/" passHref>
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                      <p
                        className={
                          "text-[16px]" + (url === "/" ? " activeLink" : "")
                        }
                      >
                        PLAY
                      </p>
                      {/* <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p> */}
                    </div>
                  </Link>
                  <div className="md:hidden flex justify-center items-center cursor-pointer">
                    <hr className="mx-auto w-[305px] border" />
                  </div>
                  {/* <Link href="/staking" passHref>
                                <div className="flex flex-col items-center justify-center">
                                    <p className="text-[16px]">
                                        STAKING
                                    </p>
                                    <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p>
                                </div>
                            </Link> */}
                </div>
                <div></div>
              </div>
            </header>
            <style>{`
              .header {
                background: rgba(0, 0, 0, 0.3);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
              }
            `}</style>
          </>
        );
    }
    else if (mode === "close") {
        return (
          <>
            <header className="header w-full fixed z-10 top-0">
              <div className="container mx-auto flex flex-row justify-between items-center py-5">
                <div className="flex w-full mx-5 md:mx-0 justify-between md:justify-start">
                  <div className="w-[32px] h-[32px] md:w-[48px] md:h-[48px]">
                    <Link href="/" passHref>
                      <Image
                        src="/logo.png"
                        alt="logo"
                        width={48}
                        height={48}
                        className="cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="md:hidden text-white flex justify-center items-center">
                    <HiMenu
                      className="w-7 h-7"
                      onClick={() => {
                        setMode("open");
                      }}
                    />
                    <IoClose
                      className="hidden w-7 h-7"
                      onClick={() => {
                        setMode("close");
                      }}
                    />
                  </div>
                </div>
                <div className="hidden md:flex flex-col md:flex-row justify-center md:justify-around text-white text-sm w-[868px]">
                  <Link href="/home" passHref>
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                      <p
                        className={
                          "text-[16px] active" +
                          (url === "/home" ? " activeLink" : "op0")
                        }
                      >
                        HOME
                      </p>
                      {/* <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p> */}
                    </div>
                  </Link>
                  <Link href="/avatars" passHref>
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                      <p
                        className={
                          "text-[16px]" +
                          (url === "/avatars" ? " activeLink" : "op0")
                        }
                      >
                        AVATARS
                      </p>
                      {/* <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p> */}
                    </div>
                  </Link>
                  <Link href="/roadmap" passHref>
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                      <p
                        className={
                          "text-[16px]" +
                          (url === "/roadmap" ? " activeLink" : "op0")
                        }
                      >
                        ROADMAP
                      </p>
                      {/* <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p> */}
                    </div>
                  </Link>
                  <Link href="/assets" passHref>
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                      <p
                        className={
                          "text-[16px]" +
                          (url === "/assets" ? " activeLink" : "")
                        }
                      >
                        ASSETS
                      </p>
                      {/* <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p> */}
                    </div>
                  </Link>
                  <Link href="/martianverse" passHref>
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                      <p
                        className={
                          "text-[16px]" +
                          (url === "/martianverse" ? " activeLink" : "")
                        }
                      >
                        MARTIANVERSE
                      </p>
                      {/* <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p> */}
                    </div>
                  </Link>
                  <Link href="/marketplace" passHref>
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                      <p
                        className={
                          "text-[16px]" +
                          (url === "/marketplace" ? " activeLink" : "")
                        }
                      >
                        MARKETPLACE
                      </p>
                      {/* <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p> */}
                    </div>
                  </Link>
                  <Link href="https://martianverse.redastrowars.io/" passHref>
                    <div className="flex flex-col items-center justify-center cursor-pointer">
                      <p
                        className={
                          "text-[16px]" + (url === "/" ? " activeLink" : "")
                        }
                      >
                        PLAY
                      </p>
                      {/* <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p> */}
                    </div>
                  </Link>
                  {/* <Link href="/staking" passHref>
                                <div className="flex flex-col items-center justify-center">
                                    <p className="text-[16px]">
                                        STAKING
                                    </p>
                                    <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p>
                                </div>
                            </Link> */}
                </div>
                <div></div>
              </div>
            </header>
            <style>{`
              .header {
                background: rgba(0, 0, 0, 0.3);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
              }
            `}</style>
          </>
        );
    }

    return (
      <>
        <header className="header w-full fixed z-10 top-0">
          <div className="container mx-auto flex flex-row justify-between items-center py-5">
            <div className="flex w-full md:w-auto mx-5 md:mx-0 justify-between md:justify-start">
              {/* <div> */}
              <Link href="/" passHref>
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={48}
                  height={48}
                  className="cursor-pointer"
                />
              </Link>
              {/* </div> */}
              <div className="md:hidden text-white flex justify-center items-center">
                <HiMenu
                  className="w-7 h-7"
                  onClick={() => {
                    setMode("open");
                  }}
                />
                <IoClose
                  className="hidden w-7 h-7"
                  onClick={() => {
                    setMode("close");
                  }}
                />
              </div>
            </div>
            <div className="hidden md:flex flex-row justify-around text-white text-sm w-[868px]">
              <Link href="/home" passHref>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <p
                    className={
                      "text-[16px]" + (url === "/home" ? " activeLink" : " op0")
                    }
                  >
                    HOME
                  </p>
                  {/* <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p> */}
                </div>
              </Link>
              <Link href="/avatars" passHref>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <p
                    className={
                      "text-[16px]" +
                      (url === "/avatars" ? " activeLink" : " op0")
                    }
                  >
                    AVATARS
                  </p>
                  {/* <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p> */}
                </div>
              </Link>
              <Link href="/roadmap" passHref>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <p
                    className={
                      "text-[16px]" +
                      (url === "/roadmap" ? " activeLink" : " op0")
                    }
                  >
                    ROADMAP
                  </p>
                  {/* <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p> */}
                </div>
              </Link>
              <Link href="/assets" passHref>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <p
                    className={
                      "text-[16px]" +
                      (url === "/assets" ? " activeLink" : " op0")
                    }
                  >
                    ASSETS
                  </p>
                  {/* <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p> */}
                </div>
              </Link>
              <Link href="/martianverse" passHref>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <p
                    className={
                      "text-[16px]" +
                      (url === "/martianverse" ? " activeLink" : " op0")
                    }
                  >
                    MARTIANVERSE
                  </p>
                  {/* <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p> */}
                </div>
              </Link>
              <Link href="/marketplace" passHref>
                <div className="flex flex-col items-center justify-center cursor-pointer">
                  <p
                    className={
                      "text-[16px]" +
                      (url === "/marketplace" ? " activeLink" : " op0")
                    }
                  >
                    MARKETPLACE
                  </p>
                  {/* <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p> */}
                </div>
              </Link>
              <Link href="https://martianverse.redastrowars.io/" passHref >
                <div className="flex flex-col items-center justify-center cursor-pointer" style={{padding:'10px 14px',marginLeft:'40px', background:'#db1537'}}>
                  <p
                    className={
                      "text-[20px]" + (url === "/" ? " activeLink" : " op0")
                    }
                  >
                    PLAY
                  </p>
                  {/* <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p> */}
                </div>
              </Link>
              {/* <Link href="/staking" passHref>
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-[16px]">
                                    STAKING
                                </p>
                                <p className="font-semibold text-red-500 uppercase text-[10px]">Coming Soon</p>
                            </div>
                        </Link> */}
            </div>
            <div></div>
          </div>
        </header>

        <style>{`
          .header {
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
          }
        `}</style>
      </>
    );
}

export default Navbar;