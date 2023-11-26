import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";
// import chooseYourFaction from "../public/svg/chooseYourFaction.svg";
import { BsChevronDoubleDown } from "react-icons/bs";

import Avatar from "../components/avatar";
import Head from "next/head";

const Avatars = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=1024" />
            </Head>
            <div className="bg-black">
                <Navbar />
                <div className="min-h-screen">
                    
                </div>
                <div className="absolute leftright bottom-10 mx-auto left-1/2 flex justify-center mx-auto items-center">
                <div className="animate-bounce heading text-white font-bold">
                    Scroll Down
                </div>
            </div>
                <Avatar page="avatar" />
                <Footer />
            </div>
        </>
    );
};

export default Avatars;
