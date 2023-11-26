import Image from "next/image"
import advancedApes from "../public/svg/advancedApes.svg"
import advancedApesAv from "../public/svg/advancedApesAv.png"
import Ape1 from "../public/advancedApes/ape1.png"
import Ape2 from "../public/advancedApes/ape2.png"
import Ape3 from "../public/advancedApes/ape3.png"
import AdvancedApesImg from "../public/advancedApes/advancedApes.png"

const AdvancedApes = ({ page }) => {
    const data = [
        Ape1,
        Ape2,
        Ape3
    ]

    const pageCheck = (page) => {
        if (page === "home") {
            return (
                <>
                    <div className="container mx-auto hidden md:flex flex-row justify-between">
                        <div className="flex items-end w-1/2">
                            <Image
                                src={AdvancedApesImg}
                                alt="advanced apes"
                                width={326}
                                height={541}
                            />
                        </div>
                        <div className="flex flex-col space-y-24 pt-16">
                            <div className="w-full space-y-7 flex flex-col items-end">
                                <div className="flex flex-col w-full items-end w-1/2">
                                    <Image src={advancedApes} width={241} height={80} alt="Advaned Apes" />
                                </div>
                                <p className="text-right text-xl">
                                    They are tough, ruthless and highly trained.
                                    They are Advanced Apes of the MartianVerse,
                                    battling to take over.
                                </p>
                            </div>
                            <div className="flex flex-row justify-between">
                                {data.map((image, index) => {
                                    return (
                                        <div key={index} className="hover:ease-in ease-out duration-200 hover:scale-105 br-rd">
                                            <Image
                                                src={image}
                                                alt="advanced ape"
                                                width={205}
                                                height={254}
                                                key={index}
                                                className="hover:shadow-3xl"
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden container mx-auto flex flex-col justify-between">
                        <div className="flex flex-row justify-between mx-5 pb-5">
                            <Image
                                src={AdvancedApesImg}
                                alt="advanced apes"
                                width={165}
                                height={262}
                            />
                            <div className="w-full space-y-3 flex flex-col justify-center items-end w-[183px]">
                                <div className="flex flex-col w-full items-end w-1/2">
                                    <Image src={advancedApes} width={106} height={42} alt="Advaned Apes" />
                                </div>
                                <p className="text-right text-[11px]">
                                    They are tough, ruthless and highly trained.
                                    They are Advanced Apes of the MartianVerse,
                                    battling to take over.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-around">
                            {data.map((image, index) => {
                                return (
                                    <div key={index} className="hover:ease-in ease-out duration-200 hover:scale-105 br-rd">
                                        <Image
                                            src={image}
                                            alt="advanced ape"
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
                    {/* <style jsx>{`
                    .
                    `}</style> */}
                </>
            )
        }
        else if (page === "avatar") {
            return (
                <>
                    <div className="container mx-auto">
                        <div>
                            <Image src="/avatar/advancedApesBg.png" width={1216} height={831} alt="Advanced Apes Background" />
                        </div>
                        <div className="w-full -mt-96">
                            <Image src={advancedApesAv} alt="Advanced Apes Avatar" />
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

export default AdvancedApes;