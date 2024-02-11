import Image from "next/image"
// import LaunchPass from "../public/launchPass.svg";
// import RedBox from "../public/redBox.svg";
const Passes = () => {
    return (
        <>
            <div className="passMainDiv flex flex-col justify-around p-5 md:p-14">                
                <div className="md:w-full mx-auto redBox flex flex-col-reverse md:flex-row justify-center md:justify-between p-5 md:py-10 md:px-14 mt-10">
                    <div className="text-center md:text-left md:w-1/2 mt-5 md:mt-0 space-y-5 md:space-y-10">
                        <h1 className="heading text-[24px] md:text-[48px] uppercase text-white">
                            Red
                            <span className="text-red-500">
                                Box
                            </span>
                        </h1>
                        <p className="text-white text-[11px] md:text-[20px]">
                        These are limited edition Boxes that will be only available once during the entirety of the road map. Holding one of these will allow holders to claim Power-Ups, In-Game Assets and Collectibles inside the MartianVerse.
                        </p>
                    </div>
                    <div className="h-[230px] md:w-[332px] md:h-[291px]">
                        <Image
                            src='/redBox.png'
                            alt="Red Box"
                            width={332}
                            height={291}
                            className="rounded-xl"
                        />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .passMainDiv {
                    border: 1px solid;
                    border-image-source: linear-gradient(152.65deg, #FFFFFF -40.92%, rgba(255, 255, 255, 0) 17.99%),
                    linear-gradient(319.15deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 17.61%);
                    background: #131313;
                    box-shadow: 0px 0px 34px 5px rgba(255, 255, 255, 0.15);
                    border-radius: 32px;
                }

                .launchPass {
                    border: 1px solid;
                    border-image-source: linear-gradient(293.35deg, #FFFFFF -4.37%, rgba(255, 255, 255, 0) 28.46%),
                    linear-gradient(117.23deg, rgba(255, 255, 255, 0.2) 0.5%, rgba(255, 255, 255, 0) 32.94%);
                    background: linear-gradient(282.9deg, #011A26 34.94%, rgba(0, 0, 0, 0) 112.36%);
                    border-radius: 24px;
                }

                .redBox {
                    border: 1px solid;
                    border-image-source: linear-gradient(288.7deg, #FFFFFF -4.16%, rgba(255, 255, 255, 0) 30.89%),
                    linear-gradient(117.23deg, rgba(255, 255, 255, 0.2) 0.5%, rgba(255, 255, 255, 0) 32.94%);
                    background: linear-gradient(284.49deg, #DB1537 -35.92%, rgba(0, 0, 0, 0) 108.19%);
                    border-radius: 24px;
                }
            `}</style>
        </>
    )
}

export default Passes;