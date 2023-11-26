import Image from "next/image";
import Link from "next/link";
import MintNowBtn from "../public/mint-now-btn.png";

const HomeLanding = () => {
    return (
      <>
        <div className="bg-home">
          <div className="homeLandingOverlay min-h-screen flex flex-col justify-end">
            <div className="container px-5 mx-auto pb-24 space-y-10">
              <div style={{ position: "relative", top: "-100px" }}>
                <h1 className="heading main-head-text md:text-[60px] uppercase text-white">
                ENter The 
                </h1>
                <h1 className="heading main-head-text md:text-[60px] uppercase text-white" style={{color:"#DB1537"}}>
                MARTIANVERSE
                </h1>
  
                <p className="text-white text-[10px] md:text-[18px]">
                Our world is falling apart. Life on earth is coming to an end. Our last chance of survival is to colonise Mars and save whatever life is left. An Advanced Species of Apes is sent to setup Martian Base Camp to prepare for human arrival. But the Apes go rogue destroying they worked for. To restore order on Mars, an army of Enhanced Humans is deployed from Earth. 
 Choose your faction and battle for survival.
                </p>
              </div>
              <Link href="https://martianverse.redastrowars.io/" passHref>
              <button style={{height:'65px',marginTop:"-10px", width:'350px',  fontSize:'30px', backgroundColor:"#DB1537", color:"#FFFFFF"}}> PLAY NOW</button>
              </Link>
            
              <div className="mint-btn" style={{position:'relative', top: '-100px'}}>
               
              </div>
            </div>
          </div>
        </div>
        <style>{`
          // .homeLanding {
          //     background-image: url("/home.gif");
          //     background-size: cover;
          //     background-position: center;
          //     background-repeat: no-repeat;
          // }

          .homeLandingOverlay {
            background-image: url("/homeOverlay.png");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
        `}</style>
      </>
    );
}

export default HomeLanding;