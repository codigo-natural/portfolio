import { useRef } from "react"
import { curve } from "../assets"
// import { ScrollParallax } from "react-just-parallax"
// import { heroFloats } from "../constants"
import { BackgroundCircles } from "./design/Hero"
import { contactSocialMedia } from "../constants"

export const Hero = () => {
  const parallaxRef = useRef(null)
  return (
    <div className="container relative" id="home" ref={parallaxRef}>
      <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem] grid justify-items-center">
        <h1 className="h1 mb-6">
          Ivan Camilo creando cosas para internet desde 2019  {" "}
          <span className="inline-block relative">
            Web Developer
            <img
              src={curve}
              className="absolute top-full left-0 w-full xl:-mt-2"
              width={624}
              height={28}
              alt="Curve"
            />
          </span>
        </h1>
        <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">¡Bienvenido al portafolio de camilo_dev, donde las ideas y la creatividad cobran vida en línea!</p>
        <div className="group relative w-[320px] h-[200px] bg-gray-300 rounded-[30px] overflow-hidden shadow-lg transition-all duration-1000 ease-in-out border-2 border-white hover:scale-110">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4158D0] via-[#C850C0] to-[#FFCC70]"></div>

          <div className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 transition-all duration-600 ease-in-out text-lg font-semibold text-white tracking-[3px] group-hover:translate-x-[70px] group-hover:-translate-y-[52px] group-hover:tracking-[0px]">
            Socials
          </div>
          <a href={contactSocialMedia.github.url} className="block">
            <div className="absolute w-[70%] h-[70%] -bottom-[70%] -left-[70%] p-2.5 text-right bg-white/40 border-t-2 border-r border-white rounded-[10%_13%_42%_0%/10%_12%_75%_0%] shadow-[-7px_7px_29px_0px_rgba(100,100,111,0.364)] origin-bottom-left transition-all duration-1000 ease-in-out group-hover:-bottom-[1px] group-hover:-left-[1px] hover:bg-gradient-to-br hover:from-[#fdf497] hover:via-[#ff53d4] hover:to-[#62c2fe]">
              <span className="inline-block w-5 h-5">
                <img
                  src={contactSocialMedia.github.icon}
                  alt={contactSocialMedia.github.title}
                />
              </span>
            </div>
          </a>

          <a href={contactSocialMedia.linkedin.url} className="block">
            <div className="absolute w-1/2 h-1/2 -bottom-1/2 -left-1/2 p-2.5 text-right bg-white/40 border-t-2 border-r border-white rounded-[10%_13%_42%_0%/10%_12%_75%_0%] shadow-[-7px_7px_29px_0px_rgba(100,100,111,0.364)] origin-bottom-left transition-all duration-1000 ease-in-out delay-200 group-hover:-bottom-[1px] group-hover:-left-[1px] hover:bg-gradient-to-br hover:from-[#91e9ff] hover:to-[#00ACEE]">
              <span className="inline-block w-5 h-5">
                <img
                  src={contactSocialMedia.linkedin.icon}
                  alt={contactSocialMedia.linkedin.title}
                />
              </span>
            </div>
          </a>

          <a href={contactSocialMedia.linkedin.url} className="block">
            <div
              className="absolute w-[30%] h-[30%] -bottom-[30%] -left-[30%] p-2.5 text-right bg-white/40 border-t-2 border-r border-white rounded-[10%_13%_42%_0%/10%_12%_75%_0%] shadow-[-7px_7px_29px_0px_rgba(100,100,111,0.364)] origin-bottom-left transition-all duration-1000 ease-in-out delay-400 group-hover:-bottom-[1px] group-hover:-left-[1px] hover:bg-gradient-to-br hover:from-[#969fff] hover:to-[#b349ff]">
              <span className="inline-block w-5 h-5">
                <img
                  src={contactSocialMedia.instagram.icon}
                  alt={contactSocialMedia.instagram.title}
                />
              </span>
            </div>
          </a>

          <div className="absolute w-[10%] h-[10%] -bottom-[10%] -left-[10%] p-2.5 text-right bg-white/40 border-t-2 border-r border-white rounded-[10%_13%_42%_0%/10%_12%_75%_0%] shadow-[-7px_7px_29px_0px_rgba(100,100,111,0.364)] origin-bottom-left transition-all duration-1000 ease-in-out delay-600 group-hover:-bottom-[1px] group-hover:-left-[1px]"></div>
        </div>
      </div>
      <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">

        <BackgroundCircles />
      </div>

    </div >
  )
}
