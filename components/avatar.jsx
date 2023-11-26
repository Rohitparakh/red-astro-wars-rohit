import AvatarCard from "./avatarCard";
import AdvancedApes from "./advancedApes";
import EnhancedHumans from "./enhancedHumans";
import Genesis from "../public/avatar/genesis.svg"
import Gen1 from "../public/avatar/gen1.svg"
import CompanionDog from "../public/avatar/companionDog.svg"
import Image from "next/image";
import advancedApes from "../public/svg/advancedApes.svg"
import enhancedHumans from "../public/svg/enhancedHumans.png"
import companionDog from "../public/avatar/companionDogName.svg"
import Link from "next/link";

const Avatar = ({ page }) => {
    const avatarCardData = [
        {
            avatar: Genesis,
            name: "Genesis",
            desc: "These 1-of-1 Avatars inherit special powers, higher staking rewards & voting rights"
        },
        {
            avatar: Gen1,
            name: "Gen 1",
            desc: "Gen 1 Avatars provides full access to the MartianVerse, P2E Games & token's benefits"
        },
        {
            avatar: CompanionDog,
            name: "Companion Dog",
            desc: "Boosts your Avatar’s abilities and provides staking boost"
        }
    ];

    const pageCheck = (page) => {
        if (page === "home") {
            return (
                <>
                    <div className="container mx-auto text-white mt-20 space-y-10">
                        <div className="space-y-3 text-center">
                            <h1 className="heading text-[24px] md:text-[56px] uppercase font-bold md:pb-3">
                                Avatars
                            </h1>
                            <hr className="mx-auto w-[228px] md:w-[384px] border-2" />
                            <h5 className="font-medium text-[14px] md:text-[24px] text-red-500 md:pt-2">
                                Choose Your Faction
                            </h5>
                        </div>
                        <AdvancedApes page="home" />
                        <EnhancedHumans page="home" />
                    </div>
                </>
            )
        }
        else if (page === "avatar") {
            return (
              <>
                <div
                  id="season-1"
                  className="container mx-auto text-white mt-20 space-y-10 mb-24"
                >
                  <h1 className="heading text-center text-5xl font-semibold mb-60">
                    Avatars
                  </h1>
                  <div className="avatarCardContainer align-center flex flex-col md:flex-row justify-between">
                    {avatarCardData.map((avatarCard, index) => (
                      <AvatarCard
                        key={index}
                        avatar={avatarCard.avatar}
                        name={avatarCard.name}
                        desc={avatarCard.desc}
                      />
                    ))}
                  </div>
                  <div className="flex flex-col justify-center">
                    {/* <p className="text-center text-xl leading-2">
                                Acquiring a <b>Season 1 Avatar</b> or <b>Companion Dog</b> provides additional benefits like <b>free $RAW token airdrop, land plot</b> and <b> higher staking rewards.</b> Additionally, holding a
                                Season 1 Avatar entitles you to <b>part ownership in the Community Vault</b> and <b>voting rights in the [RAW] DAO.</b> It also
                                provides <b>guaranteed spot to mint a Season 2 Avatar.</b>
                            </p> */}
                    {/* <div className="mx-auto my-14">
                                <button className="font-bold bg-red-600 py-1 px-20 hover:text-black">
                                    COLLECT NOW
                                </button>
                            </div> */}
                    <hr className="w-1/2 mx-auto mt-14 mb-10" />
                  </div>
                  <div className="space-y-4 text-center">
                    <h1 className="heading text-5xl uppercase">Warriors</h1>
                    <p className="text-xl">
                      <b>[RAW] Warriors</b> is your access inside the{" "}
                      <b>MartianVerse.</b> Become a part of the{" "}
                      <b>Advanced Ape Army</b> or{" "}
                      <b>Enhanced Human Resistance.</b> Your{" "}
                      <b>Avatar’s rare traits</b> are your{" "}
                      <b>special powers inside the [RAW] Ecosystem.</b>
                    </p>
                  </div>
                  {/* human */}
                  <div className="flex flex-row">
                    <div
                      id="enhanced-human"
                      className="humanFrame relative flex flex-row justify-between w-[1000px] h-[1020px] -mt-20"
                    >
                      <div className="flex flex-col space-y-24 mt-24 pl-24 pt-24 w-1/2">
                        <div className="w-full space-y-7 flex flex-col items-start">
                          <div className="flex flex-col w-full items-start w-1/2">
                            <Image
                              src={enhancedHumans}
                              alt="Enhanced Humans"
                              width={221}
                              height={80}
                            />
                          </div>
                          <p className="text-left text-xl">
                            Enhanced Humans are the resistance against the Ape
                            Army, fighting to restore order in the MartianVerse.
                            They are the last survivors of humanity.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="absolute -right-0 top-[257px]">
                          <Image
                            src="/avatar/human.png"
                            alt="enhanced humans"
                            width={550}
                            height={650}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center -mt-20">
                      <div
                        className="w-[120px] h-[265px] flex justify-center items-center btn-rt-curv"
                        style={{
                          background:
                            "linear-gradient(192.33deg, rgba(11, 7, 58, 0.81) -0.32%, #FF3737 160.6%)",
                        }}
                      >
                        <div className="rotate-90 uppercase text-xs text-center">
                          <Link href="#enhanced-human">Enhanced Humans</Link>
                        </div>
                      </div>
                      <div
                        className="w-[120px] h-[265px] flex justify-center items-center"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(11, 8, 52, 0.7) 0%, rgba(7, 35, 47, 0.7) 100%)",
                        }}
                      >
                        <div className="rotate-90 uppercase text-xs text-center">
                          <Link href="#advanced-apes">Advanced Apes</Link>
                        </div>
                      </div>
                      <div
                        className="w-[120px] h-[265px] flex justify-center items-center btn-rt-btm-curv"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(11, 8, 52, 0.7) 0%, rgba(7, 35, 47, 0.7) 100%)",
                        }}
                      >
                        <div className="rotate-90 uppercase text-xs text-center">
                          <Link href="#companion-dog">Companion Dog</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* ape */}
                  <div className="flex flex-row">
                    <div
                      id="advanced-apes"
                      className="apeFrame relative flex flex-row justify-between w-[1000px] h-[1020px] -mt-52"
                    >
                      <div className="flex">
                        <div className="absolute left-0 top-[250px]">
                          <Image
                            src="/avatar/ape.png"
                            alt="advanced apes"
                            width={550}
                            height={650}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col space-y-24 mt-28 pr-24 pt-24 w-1/2">
                        <div className="w-full space-y-7 flex flex-col items-end">
                          <div className="flex flex-col w-full items-end w-1/2">
                            <Image
                              src={advancedApes}
                              width={241}
                              height={80}
                              alt="Advaned Apes"
                            />
                          </div>
                          <p className="text-right text-xl">
                            Advanced Apes are the first settlers of the
                            MartianVerse. They were created in lab to setup a
                            colony for human survival, but turned against their
                            creators.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center -mt-52">
                      <div
                        className="w-[120px] h-[265px] flex justify-center items-center btn-rt-curv"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(11, 8, 52, 0.7) 0%, rgba(7, 35, 47, 0.7) 100%)",
                        }}
                      >
                        <div className="rotate-90 uppercase text-xs text-center">
                          <Link href="#enhanced-human">Enhanced Humans</Link>
                        </div>
                      </div>
                      <div
                        className="w-[120px] h-[265px] flex justify-center items-center"
                        style={{
                          background:
                            "linear-gradient(192.33deg, rgba(11, 7, 58, 0.81) -0.32%, #FF3737 160.6%)",
                        }}
                      >
                        <div className="rotate-90 uppercase text-xs text-center">
                          <Link href="#advanced-apes">Advanced Apes</Link>
                        </div>
                      </div>
                      <div
                        className="w-[120px] h-[265px] flex justify-center items-center btn-rt-btm-curv"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(11, 8, 52, 0.7) 0%, rgba(7, 35, 47, 0.7) 100%)",
                        }}
                      >
                        <div className="rotate-90 uppercase text-xs text-center">
                          <Link href="#companion-dog">Companion Dog</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* dog */}
                  <div className="flex flex-row">
                    <div
                      id="companion-dog"
                      className="dogFrame relative flex flex-row justify-between w-[1000px] h-[1020px] -mt-52"
                    >
                      <div className="flex flex-col space-y-24 mt-24 pl-24 pt-24 w-1/2 pt-24">
                        <div className="w-full space-y-7 flex flex-col items-start">
                          <div className="flex flex-col w-full items-start w-1/2">
                            <Image
                              src={companionDog}
                              alt="Enhanced Humans"
                              width={221}
                              height={80}
                            />
                          </div>
                          <p className="text-left text-xl">
                            These are companions for your Avatars to boost their
                            abilities in different missions. Their utility will
                            be revealed through roadmap activation.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="absolute -right-0 top-[250px]">
                          <Image
                            src="/avatar/dog.png"
                            alt="companion dog"
                            width={550}
                            height={650}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center -mt-52">
                      <div
                        className="w-[120px] h-[265px] flex justify-center items-center btn-rt-curv"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(11, 8, 52, 0.7) 0%, rgba(7, 35, 47, 0.7) 100%)",
                        }}
                      >
                        <div className="rotate-90 uppercase text-xs text-center">
                          <Link href="#enhanced-human">Enhanced Humans</Link>
                        </div>
                      </div>
                      <div
                        className="w-[120px] h-[265px] flex justify-center items-center"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(11, 8, 52, 0.7) 0%, rgba(7, 35, 47, 0.7) 100%)",
                        }}
                      >
                        <div className="rotate-90 uppercase text-xs text-center">
                          <Link href="#advanced-apes">Advanced Apes</Link>
                        </div>
                      </div>
                      <div
                        className="w-[120px] h-[265px] flex justify-center items-center btn-rt-btm-curv"
                        style={{
                          background:
                            "linear-gradient(192.33deg, rgba(11, 7, 58, 0.81) -0.32%, #FF3737 160.6%)",
                        }}
                      >
                        <div className="rotate-90 uppercase text-xs text-center">
                          <Link href="#companion-dog">Companion Dog</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <style jsx>{`
                  .humanFrame {
                    background-image: url("/avatar/humanFrame.png");
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                  }

                  .apeFrame {
                    background-image: url("/avatar/apeFrame.png");
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                  }

                  .dogFrame {
                    background-image: url("/avatar/dogFrame.png");
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                  }
                `}</style>
              </>
            );
        }
    }

    return (
        pageCheck(page)
    )
}

export default Avatar;