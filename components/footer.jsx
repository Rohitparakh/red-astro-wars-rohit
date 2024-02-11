import Link from "next/link";
import Image from "next/image";
// import FooterMars from "../public/footerMars.png"
const Footer = () => {
    return (
        <>
            <div className="footerDiv container mx-auto text-white flex flex-col">
                <div className="flex flex-col space-y-10 md:mx-48 py-10">
                    <div className="flex flex-col md:flex-row justify-around items-center space-y-10 md:space-y-0">
                        {/* <div>
                            <Link href="www.discord.com">
                                DISCORD
                            </Link>
                        </div>
                        <div>
                            <Link href="www.twitter.com">
                                TWITTER
                            </Link>
                        </div> */}
                        <div>
                            <Link href="/" passHref>
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={80}
                                    height={80}
                                    className="logo"
                                />
                            </Link>
                        </div>
                        {/* <div>
                            <Link href="/support">
                                SUPPORT
                            </Link>
                        </div>
                        <div>
                            <Link href="/about">
                                ABOUT
                            </Link>
                        </div> */}
                    </div>
                    <div className="mx-auto">
                        {/* <div className="rounded-full bg-slate-500 uppercase text-white font-semibold py-2 px-4">
                            <Link href="/terms">
                                Whitepaper
                            </Link>
                        </div> */}
                    </div>
                    <div className="text-gray-500 text-center text-[14px] md:text-[24px]">
                        Copyright © 2023 Red Astro Wars - All rights reserved.
                    </div>
                </div>
                <Image
                    src="/footerMars.png"
                    alt="Mars"
                    width={1200}
                    height={300}
                    className="footerMars"
                />
            </div>
            {/* <style jsx>{`
            .footerDiv {
                height: 507px;
                background-image: url("/footerMars.png");
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
            }
            `}</style> */}
        </>
    )
}

export default Footer;