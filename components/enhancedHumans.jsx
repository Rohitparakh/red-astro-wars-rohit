import Image from "next/image"
import enhancedHumans from "../public/svg/enhancedHumans.png"
import enhancedHumansAv from "../public/svg/enhancedHumansAv.png"
import Human1 from "../public/enhancedHumans/human1.png"
import Human2 from "../public/enhancedHumans/human2.png"
import Human3 from "../public/enhancedHumans/human3.png"
import EnhancedHumansImg from "../public/enhancedHumans/enhancedHumans.png"

const EnhancedHumans = ({ page }) => {
    const data = [
        Human1,
        Human2,
        Human3
    ]

    const pageCheck = (page) => {
        if (page === "home") {
            return (
                <>
                    <div className="container mx-auto hidden md:flex flex-row justify-between py-24">
                        <div className="flex flex-col space-y-24 pt-24">
                            <div className="w-full space-y-7 flex flex-col items-start">
                                <div className="flex flex-col w-full items-start w-1/2">
                                    <Image src={enhancedHumans} alt="Enhanced Humans" width={221} height={80} />
                                </div>
                                <p className="text-left text-xl">
                                    Response team of Enhanced Humans are genetically
                                    adapted to withstand the harsh conditions on Mars,
                                    resisting the Apes.
                                </p>
                            </div>
                            <div className="flex flex-row justify-between">
                                {data.map((image, index) => {
                                    return (
                                        <div key={index} className="hover:ease-in ease-out duration-200 hover:scale-105 br-rd">
                                            <Image
                                                src={image}
                                                alt="enhanced human"
                                                width={207}
                                                height={256}
                                                key={index}
                                                className="hover:shadow-3xl"
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex justify-end items-end w-1/2">
                            <Image
                                src={EnhancedHumansImg}
                                alt="enhanced humans"
                                width={306}
                                height={582}
                            />
                        </div>
                    </div>
                    <div className="md:hidden container mx-auto flex flex-col justify-between py-12">

                        <div className="flex justify-between mx-5 pb-5">
                            <div className="w-[164px] space-y-3 flex flex-col justify-center items-start">
                                <div className="flex flex-col w-full items-start w-1/2">
                                    <Image src={enhancedHumans} alt="Enhanced Humans" width={116} height={42} />
                                </div>
                                <p className="text-left text-[11px]">
                                    Response team of Enhanced Humans are genetically
                                    adapted to withstand the harsh conditions on Mars,
                                    resisting the Apes.
                                </p>
                            </div>
                            <Image
                                src={EnhancedHumansImg}
                                alt="enhanced humans"
                                width={146}
                                height={269}
                            />
                        </div>
                        <div className="flex flex-row justify-around">
                            {data.map((image, index) => {
                                return (
                                    <div key={index} className="hover:ease-in ease-out duration-200 hover:scale-105 br-rd">
                                        <Image
                                            src={image}
                                            alt="enhanced human"
                                            width={103}
                                            height={126}
                                            key={index}
                                            className="hover:shadow-3xl"
                                        />
                                    </div>
                                )
                            })}
                        </div>


                    </div>
                </>
            )
        }
        else if (page === "avatar") {
            return (
                <>
                    <div className="container mx-auto">
                        <div>
                            <Image src="/avatar/enhancedHumansBg.png" width={1216} height={831} alt="Enhanced Humans Background" />
                        </div>
                        <div className="w-full flex justify-end -mt-96">
                            <Image src={enhancedHumansAv} alt="Enhanced Humans Avatar" />
                        </div>
                    </div>
                </>
            )
        }
    }
    return (
        pageCheck(page)
    )
}

export default EnhancedHumans;