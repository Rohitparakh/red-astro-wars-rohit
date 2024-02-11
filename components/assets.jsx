import AssetsSliderCard from "./assetsSliderCard";
import Link from "next/link";

const Assets = () => {
    const assets1 = {
        name: "Open World Assets",
        desc: "Interchangeable wearables to customise & upgrade your [RAW] Avatar inside the MartianVerse.",
        img: "/assetsPage/assets1.svg",
        sliderImg: [
            {
                url: "/assetsPage/assets1_1.png",
                name: "Armageddon Armour",
                desc: "This armour provider the player with the ultimate attack power. A gatling gun attached to it fires annihilating 3000 rounds a minute!",
            },
            {
                url: "/assetsPage/assets1_2.png",
                name: "Magneto Visor",
                desc: "It can manipulate the electro-magnetic fields in battle field. it unleashes a brutal tele-kinetic attack on your opponent.",
            },
            {
                url: "/assetsPage/assets1_3.png",
                name: "All Vision Helmet",
                desc: "It is the one of the greatest asset in your inventory that lets you see through walls alongside protecting your head with carbon fibre infused with titanium.",
            },
        ],
    }

    const assets2 = {
        name: "Battle Arena Assets",
        desc: "Weapons & Power-Ups to defeat your opponents in a battle. Acquire & upgrade different class of weapons to unlock it's respective battle mode.",
        img: "/assetsPage/assets2.svg",
        sliderImg: [
            {
                url: "/assetsPage/assets2_1.png",
                name: "TRMNTR - 07",
                desc: "With the damage that crazy paired with accuracy, It can perish the enemy to dust like no other weapon.",
            },
            {
                url: "/assetsPage/assets2_2.png",
                name: "Granades",
                desc: "With the explosive rate of fire if you do not wanna be  the one in the aim of fire.",
            },
            {
                url: "/assetsPage/assets2_3.png",
                name: "HRVSTR26",
                desc: "This is not your average rifle, but this ultimate killing machinery. It got named harvester for a reason.",
            },
        ],
    }

    const assets3 = {
        name: "Rover Racing",
        desc: "These are vehicles & parts to leave your opponents in the dust. Upgrade your rover to maximise it's performance.",
        img: "/assetsPage/assets3.svg",
        sliderImg: [
            {
                url: "/assetsPage/assets3_1.png",
                name: "Plasma Vial",
                desc: "It is the nuclear nitro for your rover. It gives you short boosts of overwhelming power for a quick dash.",
            },
            {
                url: "/assetsPage/assets3_2.png",
                name: "Rover 1.0",
                desc: "It  is made for all the terrains that red planet can throw at you. Zapping past your opponents like a bullet.",
            },
            {
                url: "/assetsPage/assets3_3.png",
                name: "Thunderbolt",
                desc: "It is an attack drone that can be attached to your attack rover. Lock, Release and DESTROY!",
            },
        ],
    }


    return (
      <>
        <div className="assetsBg w-full">
          <div className="w-full pt-28 flex justify-center items-center">
            <div className="mt-7 flex flex-col text-center justify-center text-white">
              <h1 className="heading text-5xl text-white uppercase">Assets</h1>
              <p className="w-2/3 text-xl mx-auto my-5">
                Assets are created by [RAW] Industries, [RAW] Motors & [RAW]
                Forgery and can be airdropped by looting the RedBox or traded in
                the MarketPlace.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto my-28">
          <div className="flex justify-center my-24">
            <iframe width="1000" height="650" src="https://www.youtube.com/embed/xT9XZuXPIME?si=CceQme7AGCuo3tpO" title="Red Astro Wars ($RAW) - RedBox" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
        <div className="container mx-auto my-14">
          <div className="flex flex-row">
            <div
              id="assets1"
              className="assets1Frame flex flex-row justify-between w-[1000px] h-[1020px] -mt-20"
            >
              <AssetsSliderCard data={assets1} />
            </div>
            <div className="flex flex-col items-center justify-center -mt-28 text-white">
              <div
                className="w-[120px] h-[230px] flex justify-center items-center btn-rt-curv"
                style={{
                  background:
                    "linear-gradient(192.33deg, rgba(11, 7, 58, 0.81) -0.32%, #FF3737 160.6%)",
                }}
              >
                <div className="rotate-90 uppercase text-xs text-center">
                  <Link href="#assets1">Open World Assets</Link>
                </div>
              </div>
              <div
                className="w-[120px] h-[220px] flex justify-center items-center"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(11, 8, 52, 0.7) 0%, rgba(7, 35, 47, 0.7) 100%)",
                }}
              >
                <div className="rotate-90 uppercase text-xs text-center">
                  <Link href="#assets2">Battle Arena Assets</Link>
                </div>
              </div>
              <div
                className="w-[120px] h-[220px] flex justify-center items-center btn-rt-btm-curv"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(11, 8, 52, 0.7) 0%, rgba(7, 35, 47, 0.7) 100%)",
                }}
              >
                <div className="rotate-90 uppercase text-xs text-center">
                  <Link href="#assets3">Rover Racing</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div
              id="assets2"
              className="assets2Frame flex flex-row justify-between w-[1000px] h-[1020px] -mt-20"
            >
              <AssetsSliderCard data={assets2} />
            </div>
            <div className="flex flex-col items-center justify-center -mt-28 text-white">
              <div
                className="w-[120px] h-[230px] flex justify-center items-center btn-rt-curv"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(11, 8, 52, 0.7) 0%, rgba(7, 35, 47, 0.7) 100%)",
                }}
              >
                <div className="rotate-90 uppercase text-xs text-center">
                  <Link href="#assets1">Open World Assets</Link>
                </div>
              </div>
              <div
                className="w-[120px] h-[220px] flex justify-center items-center"
                style={{
                  background:
                    "linear-gradient(192.33deg, rgba(11, 7, 58, 0.81) -0.32%, #FF3737 160.6%)",
                }}
              >
                <div className="rotate-90 uppercase text-xs text-center">
                  <Link href="#assets2">Battle Arena Assets</Link>
                </div>
              </div>
              <div
                className="w-[120px] h-[220px] flex justify-center items-center btn-rt-btm-curv"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(11, 8, 52, 0.7) 0%, rgba(7, 35, 47, 0.7) 100%)",
                }}
              >
                <div className="rotate-90 uppercase text-xs text-center">
                  <Link href="#assets3">Rover Racing</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div
              id="assets3"
              className="assets3Frame flex flex-row justify-between w-[1000px] h-[1020px] -mt-20"
            >
              <AssetsSliderCard data={assets3} />
            </div>
            <div className="flex flex-col items-center justify-center -mt-28 text-white">
              <div
                className="w-[120px] h-[230px] flex justify-center items-center btn-rt-curv"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(11, 8, 52, 0.7) 0%, rgba(7, 35, 47, 0.7) 100%)",
                }}
              >
                <div className="rotate-90 uppercase text-xs text-center">
                  <Link href="#assets1">Open World Assets</Link>
                </div>
              </div>
              <div
                className="w-[120px] h-[220px] flex justify-center items-center"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(11, 8, 52, 0.7) 0%, rgba(7, 35, 47, 0.7) 100%)",
                }}
              >
                <div className="rotate-90 uppercase text-xs text-center">
                  <Link href="#assets2">Battle Arena Assets</Link>
                </div>
              </div>
              <div
                className="w-[120px] h-[220px] flex justify-center items-center btn-rt-btm-curv"
                style={{
                  background:
                    "linear-gradient(192.33deg, rgba(11, 7, 58, 0.81) -0.32%, #FF3737 160.6%)",
                }}
              >
                <div className="rotate-90 uppercase text-xs text-center">
                  <Link href="#assets3">Rover Racing</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .assetsBg {
            background-image: url("/assets/assetsBg.svg");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 280px;
          }

          .assets1Frame {
            background-image: url("/assetsPage/assets1Bg.png");
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
          }

          .assets2Frame {
            background-image: url("/assetsPage/assets2Bg.png");
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
          }

          .assets3Frame {
            background-image: url("/assetsPage/assets3Bg.png");
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
          }
        `}</style>
      </>
    );
}

export default Assets;