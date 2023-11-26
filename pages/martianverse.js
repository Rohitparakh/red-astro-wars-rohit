import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MartianVerse from "../components/martianverse";
import Head from "next/head";

const Martianverse = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=1024" />
            </Head>
            <div className="bg-black">
                <Navbar />
                <MartianVerse page="martianverse" />
                <Footer />
            </div>
        </>
    );
};

export default Martianverse;
