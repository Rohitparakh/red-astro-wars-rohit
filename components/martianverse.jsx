import Image from "next/image";
// import styles from "./martianverse.module.css";
import SliderCard from "./sliderCard";

const Martianverse = ({ page }) => {
    const hoverData = [
        {
            url: "/hoverImages/battleArena.png",
            name: "Battle Arena"
        },
        {
            url: "/hoverImages/roverRacing.png",
            name: "Rover Racing"
        },
        {
            url: "/hoverImages/communalSpace.png",
            name: "Communal Spaces"
        }
    ]

    const sliderData = {
        name: "Rover Racing",
        img: "/martianverse/roverRacing.svg",
        sliderImg: [
            {
                url: "/hoverImages/battleArena.jpg",
                name: "Battle Arena",
            },
            {
                url: "/hoverImages/roverRacing.jpg",
                name: "Rover Racing",
            },
            {
                url: "/hoverImages/communalSpace.jpg",
                name: "Communal Spaces",
            }
        ],
        desc: "Response team of Enhanced Humans are genetically adapted to withstand the harsh conditions on Mars, resisting the Apes."
    }

    const pageCheck = (page) => {
        if (page === "home") {
            return (
              <>
                <div className="container mx-auto py-10 md:py-20">
                  {/* <div className="martianverseDiv pt-10"> */}
                  <div className="md:pt-10">
                    <div
                      className="text-white md:space-y-5 mx-10 my-10"
                      style={{ textAlign: "start" }}
                    >
                      <h2 className="text-[20px] md:text-[40px]">Enter The</h2>
                      <h1 className="heading text-[24px] md:text-[56px] uppercase">
                        Martian<span className="text-red-500">Verse</span>
                      </h1>
                    </div>
                    <div className="flex justify-center">
                      <div className="martianverseCard rounded-[14px] md:rounded-[32px] w-[327px] h-[486px] md:w-full md:h-[1512px]">
                        <div className="martianverseOverlay rounded-[14px] md:rounded-[32px] w-[327px] h-[486px] md:w-full md:h-[1512px] flex flex-col justify-end">
                          <hr className="mx-5 md:mx-10 w-40 md:w-80 border-2" />
                          <p className="m-5 md:m-10 text-[11px] md:text-[18px] text-white">
                            Explore the MartianVerse and it’s{" "}
                            <b>open world experience.</b>
                            This is where your Avatars come to life. You can
                            choose to battle other players in the{" "}
                            <b>Battle Arena</b>, race in the <b>Dirt Tracks</b>{" "}
                            or terraform your land plot to build whatever you
                            like. Wishing to socialise? Come hangout at one of
                            the communal spaces and meet other players. You can
                            also wandering in the <b>Outer Lands</b> to discover
                            rare elements & fossils to trade in the{" "}
                            <b>MarketPlace.</b>
                          </p>
                          <div className="hoverContainer md:w-11/12 md:mx-auto flex flex-row justify-around my-5 md:my-10">
                            <div className="hoverDiv">
                              <div className="hoverImage1 w-[100px] h-[100px] md:w-[350px] md:h-[300px] rounded-[8px] md:rounded-[20px]"></div>
                              <h3 className="h3 text-[8px] md:text-[24px]">
                                Battle Arena
                              </h3>
                            </div>
                            <div className="hoverDiv">
                              <div className="hoverImage2 w-[100px] h-[100px] md:w-[350px] md:h-[300px] rounded-[8px] md:rounded-[20px]"></div>
                              <h3 className="h3 text-[8px] md:text-[24px]">
                                Rover Racing
                              </h3>
                            </div>
                            <div className="hoverDiv">
                              <div className="hoverImage3 w-[100px] h-[100px] md:w-[350px] md:h-[300px] rounded-[8px] md:rounded-[20px]"></div>
                              <h3 className="h3 text-[8px] md:text-[24px]">
                                Communal Spaces
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style jsx>{`
                  .martianverseDiv {
                    border: 1px solid;
                    border-image-source: linear-gradient(
                        152.65deg,
                        #ffffff -40.92%,
                        rgba(255, 255, 255, 0) 17.99%
                      ),
                      linear-gradient(
                        319.15deg,
                        rgba(255, 255, 255, 0.2) 0%,
                        rgba(255, 255, 255, 0) 17.61%
                      );
                    background: #131313;
                    box-shadow: 0px 0px 34px 5px rgba(255, 255, 255, 0.15);
                    // border-radius: 32px;
                  }

                  .martianverseCard {
                    background-image: url("/martianverse.png");
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    // width: 100%;
                    // height: 1512px;
                    // border-radius: 32px;
                  }

                  .martianverseOverlay {
                    background-image: url("/martianverseOverlay.png");
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    // width: 100%;
                    // height: 1512px;
                    // border-radius: 32px;
                  }

                  .hoverContainer {
                    text-align: center;
                    transition: transform 500ms;
                    // overflow-y: hidden;
                    // -ms-overflow-style: none;
                    // scrollbar-width: none;
                  }

                  // .hoverContainer::-webkit-scrollbar {
                  //     display: none;
                  // }

                  .h3 {
                    color: gray;
                    // font-size: 1.5em;
                    text-align: center;
                    margin-top: 10px;
                  }

                  .hoverDiv:hover .h3 {
                    color: white;
                    font-weight: 600;
                  }

                  .hoverImage1,
                  .hoverImage2,
                  .hoverImage3 {
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    // width: 350px;
                    // height: 300px;
                    // border-radius: 20px;
                  }

                  .hoverImage1 {
                    background-image: url("/hoverImages/battleArena.png");
                  }

                  .hoverImage2 {
                    background-image: url("/hoverImages/roverRacing.png");
                  }

                  .hoverImage3 {
                    background-image: url("/hoverImages/communalSpace.png");
                  }

                  .hoverDiv:hover div {
                    width: 500px !important;
                    height: 300px !important;
                    margin: 0 10px;
                  }

                  .hoverDiv div,
                  .hoverDiv:hover div {
                    transition: 0.5s;
                  }

                  @media screen and (max-width: 768px) {
                    .hoverDiv:hover div {
                      width: 144px !important;
                      height: 106px !important;
                    }
                  }
                `}</style>
              </>
            );
        }
        else if (page === "martianverse") {
            return (
              <>
                <div className="container mx-auto py-20 mb-24">
                  <div className="martianverseDiv pt-10">
                    <div className="flex flex-col justify-center mx-auto text-center text-white space-y-5 my-10">
                      <h2 className="text-4xl">Enter The</h2>
                      <h1 className="heading text-5xl uppercase">
                        Martian<span className="text-red-500">Verse</span>
                      </h1>
                    </div>

                    <div className="martianverseCard">
                      <div className="martianverseOverlay flex flex-col justify-end items-end">
                        <p className="mx-10 text-2xl text-white my-10">
                          Explore the MartianVerse and it’s open world
                          experience. This is where your Avatars come to life.
                          You can choose to battle other players in the Battle
                          Arena, race in the Dirt Tracks or terraform your land
                          plot to build whatever you like. Wishing to socialise?
                          Come hangout at one of the communal spaces and meet
                          other players. You can also wandering in the Outer
                          Lands to discover rare elements & fossils to trade in
                          the MarketPlace.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="container mx-auto my-28">
                    <div className="flex justify-center my-24">
                      <iframe
                        width="1000"
                        height="650"
                        src="https://www.youtube.com/embed/4ptJ4wehSJU?si=uA6RavIvwSEKcSNl"
                        title="Red Astro Wars ($RAW) - Martianverse"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="container mx-auto flex justify-center">
                    <div className="roverFrame flex flex-row justify-between w-[1000px] h-[1020px] -mt-20">
                      <SliderCard data={sliderData} />
                    </div>
                  </div>
                </div>
                <style jsx>{`
                  .roverFrame {
                    background-image: url("/martianverse/roverFrame.png");
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                  }

                  .martianverseDiv {
                    border: 1px solid;
                    border-image-source: linear-gradient(
                        152.65deg,
                        #ffffff -40.92%,
                        rgba(255, 255, 255, 0) 17.99%
                      ),
                      linear-gradient(
                        319.15deg,
                        rgba(255, 255, 255, 0.2) 0%,
                        rgba(255, 255, 255, 0) 17.61%
                      );
                    background: #131313;
                    box-shadow: 0px 0px 34px 5px rgba(255, 255, 255, 0.15);
                    border-radius: 32px;
                  }

                  .martianverseCard {
                    background-image: url("/martianverse.png");
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    width: 100%;
                    height: 893px;
                    border-radius: 32px;
                  }

                  .martianverseOverlay {
                    background-image: url("/martianverseOverlay.png");
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    width: 100%;
                    height: 893px;
                    border-radius: 32px;
                  }

                  .hoverContainer {
                    text-align: center;
                    transition: transform 500ms;
                    // overflow-y: hidden;
                    // -ms-overflow-style: none;
                    // scrollbar-width: none;
                  }

                  // .hoverContainer::-webkit-scrollbar {
                  //     display: none;
                  // }

                  .h3 {
                    color: gray;
                    font-size: 1.5em;
                    text-align: center;
                    margin-top: 10px;
                  }

                  .hoverDiv:hover .h3 {
                    color: white;
                  }

                  .hoverImage1,
                  .hoverImage2,
                  .hoverImage3 {
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    width: 350px;
                    height: 300px;
                    border-radius: 20px;
                  }

                  .hoverImage1 {
                    background-image: url("/hoverImages/battleArena.png");
                  }

                  .hoverImage2 {
                    background-image: url("/hoverImages/roverRacing.png");
                  }

                  .hoverImage3 {
                    background-image: url("/hoverImages/communalSpace.png");
                  }

                  .hoverDiv:hover div {
                    width: 500px !important;
                    height: 300px !important;
                    margin: 0 10px;
                  }

                  .hoverDiv div,
                  .hoverDiv:hover div {
                    transition: 0.5s;
                  }
                `}</style>
              </>
            );
        }
    }
    return (
        (pageCheck(page))
    )
}

export default Martianverse;