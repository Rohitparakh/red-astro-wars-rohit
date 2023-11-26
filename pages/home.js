import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HomeLanding from "../components/homeLanding";
import Passes from "../components/passes";
import Avatar from "../components/avatar";
import Martianverse from "../components/martianverse";
import Marketplace from "../components/marketplace";
import Roadmap from "../components/roadmap";
import Team from "../components/team";

const Home = () => {
    return (
        <>
            <div className="bg-black">
                <Navbar />
                <HomeLanding />
                <div className="container mx-auto my-28">
                    
                    <div className="flex justify-center my-24">
                        <iframe
                            width="800"
                            height="400"
                            src="https://youtu.be/nPaLF-gmYPI"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>                
                <Avatar page="home" />
                <Passes />
                <Martianverse page="home" />
                <Marketplace />
                <Team />
                <Roadmap page="home" />
                <Footer />
            </div>
        </>
    );
};

export default Home;
