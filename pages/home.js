import Navbar from "../components/navbar";
import Footer from "../components/footer";
import HomeLanding from "../components/homeLanding";
import Passes from "../components/passes";
import Avatar from "../components/avatar";
import Martianverse from "../components/martianverse";
import Marketplace from "../components/marketplace";
import Roadmap from "../components/roadmap";
import Team from "../components/team";
import Tokenomics from "../components/tokenomics";
import Funding from "../components/funding";

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
                            src="https://www.youtube.com/embed/nPaLF-gmYPI" 
                            title="Red Astro Wars ($RAW) - Trailer" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    
                    </div>
                </div>                
                <Avatar page="home" />
                <Passes />
                <Martianverse page="home" />
                <Tokenomics />
                <Marketplace />
                <Team />
                <Roadmap page="home" />
                <Funding />
                <Footer />
            </div>
        </>
    );
};

export default Home;
