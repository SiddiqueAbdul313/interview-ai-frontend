import BGImage from "../assets/images/bg-image.jpg";
import PlantImage from "../assets/images/aglaonema.png";
import { Ecllipse, Polygon } from "./Icons";
import Navbar from "./Navbar";
import ReviewCard from "./ReviewCard";

const w = 420;
const r = 60;

const topY = 100;
const dipY = 255;
const dipX = w / 2;

const d = `
  M 0 ${topY + r}
  A ${r} ${r} 0 0 1 ${r} ${topY}
  Q ${dipX} ${dipY} ${w - r} ${topY}
  A ${r} ${r} 0 0 1 ${w} ${topY + r}
  L ${w} 560
  A ${r} ${r} 0 0 1 ${w - r} 620
  L ${r} 620
  A ${r} ${r} 0 0 1 0 560
  Z
`;

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0">
        <img
          src={BGImage}
          alt="FloraVision Background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="relative z-50">
        <Navbar />
      </div>

      <div className="relative z-10 mx-auto lg:max-w-9xl px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="relative flex min-h-[calc(100vh-153px)] flex-col items-start justify-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 py-10 lg:py-14">
          <div className="w-full max-w-2xl">
            <h1 className="text-white/85 font-inter font-semibold leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              Earth’s Exhale
            </h1>

            <p className="mt-5 text-white/80 font-inter font-medium leading-relaxed text-base sm:text-lg md:text-xl max-w-xl">
              "Earth Exhale" symbolizes the purity and vitality of the Earth's
              natural environment and its essential role in sustaining life.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button className="h-14 px-8 rounded-xl border-2 border-white text-white font-inter font-normal text-xl sm:text-2xl hover:bg-white hover:text-black transition-all duration-300">
                Buy Now
              </button>

              <div className="flex items-center gap-3 cursor-pointer">
                <div className="relative flex items-center justify-center">
                  <Ecllipse className="w-[64px] h-[64px] sm:w-[70px] sm:h-[70px]" />
                  <Polygon className="w-[26px] h-[26px] sm:w-[28px] sm:h-[28px] absolute" />
                </div>
                <span className="font-indie-flower text-white font-normal text-[22px] sm:text-[25px] leading-[100%]">
                  Live Demo...
                </span>
              </div>
            </div>

            <div className="mt-10 lg:hidden w-full max-w-md">
              <ReviewCard className="w-full" />
            </div>
          </div>

          <div className="hidden lg:flex relative w-full max-w-[420px] h-[620px] shrink-0">
            <svg
              viewBox="0 0 420 620"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full z-0 pointer-events-none drop-shadow-2xl"
              preserveAspectRatio="none"
              style={{
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
              }}
            >
              <path
                d={d}
                fill="rgba(255, 255, 255, 0.08)"
                stroke="rgba(255, 255, 255, 0.22)"
                strokeWidth="1.5"
              />
              <path
                d="
                  M 18 170
                  A 46 46 0 0 1 64 124
                  Q 210 242 356 124
                  A 46 46 0 0 1 402 170
                  L 402 548
                  A 46 46 0 0 1 356 594
                  L 64 594
                  A 46 46 0 0 1 18 548
                  Z
                "
                fill="url(#glassShine)"
                opacity="0.35"
              />
              <defs>
                <linearGradient id="glassShine" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="white" stopOpacity="0.45" />
                  <stop offset="55%" stopColor="white" stopOpacity="0" />
                  <stop offset="100%" stopColor="white" stopOpacity="0.12" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute inset-0 flex flex-col items-center pt-12 pb-6 px-6 z-10">
              <div className="relative w-full h-[340px] flex items-start justify-center -mt-8">
                <img
                  src={PlantImage}
                  alt="Aglaonema Indoor Plant"
                  className="object-contain h-full drop-shadow-2xl scale-110"
                />
              </div>

              <div className="w-full mt-auto space-y-5">
                <div className="space-y-1">
                  <p className="text-gray-300 text-sm font-medium tracking-wide uppercase text-center">
                    Indoor Plant
                  </p>

                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-white text-3xl font-semibold tracking-tight">
                      Aglaonema plant
                    </h2>

                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white/80"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>
                </div>

                <button className="w-full py-3.5 rounded-xl border border-white/40 text-white font-medium text-lg hover:bg-white/10 transition-colors duration-300">
                  Buy Now
                </button>

                <div className="flex items-center justify-center gap-2 pt-2">
                  <div className="w-6 h-1.5 rounded-full bg-white" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute -bottom-8 z-20">
            <ReviewCard className="w-[360px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
