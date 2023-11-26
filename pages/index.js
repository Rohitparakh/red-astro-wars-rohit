import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Index = () => {
  const [btn, showbtn] = useState(false);
  const [logo, hideLogo] = useState(true);

  useEffect( () =>{
    setTimeout(() => {
      showbtn(true);
      hideLogo(false);
    }, 2500);
  })
    
    return (
      <>
        <div className="bg-landing zoom">
          <div className="landingOverlay min-h-screen flex flex-col justify-center items-center space-y-7">
            <h1 className="heading text-2xl md:text-4xl text-white font-bold uppercase">
              Red Astro Wars
            </h1>
            {logo &&
              <Image src="/logo-loading-unscreen.gif" alt="logo-astro-wars" height={200} width={340}/>
            }
            {btn &&
              <button
                className="bg-white btn-c font-semibold text-[12px] md:text-[18px] px-5 md:px-7 py-1 hover:bg-black hover:text-white hover:border-white border-2 uppercase"
                // onClick={() => {
                //     setLoading(true);
                // }}
              >
                <Link href="/home">Enter now</Link>
              </button>
            }
          </div>
        </div>
        <style jsx>{`
          // .landing {
          //     background-image: url("/landing.gif");
          //     background-size: cover;
          //     background-position: center;
          //     background-repeat: no-repeat;
          // }

          .landingOverlay {
            background-image: url("/landingOverlay.png");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          }
        `}</style>
      </>
    );
};
export default Index;
