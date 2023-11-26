import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Assets from "../components/assets";
import Head from "next/head";

const AssetsPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=1024" />
            </Head>
            <div className="bg-black">
                <Navbar />
                <Assets />
                <Footer />
            </div>
        </>
    );
};

export default AssetsPage;
