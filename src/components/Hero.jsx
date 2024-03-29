import { useRef } from "react"
import { bgHero, curve, meAbout, profile } from "../assets"
import { ScrollParallax } from "react-just-parallax"
import { heroFloats } from "../constants"
import { BackgroundCircles, Gradient } from "./design/Hero"

export const Hero = () => {
  const parallaxRef = useRef(null)
  return (
    <div className="container relative" id="home" ref={parallaxRef}>
      <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
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
      </div>
      <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
        <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
          <div className="relative bg-n-8 rounded-[1rem]">
            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
              <img
                src={bgHero}
                className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[10%]"
                width={1024}
                height={490}
                alt="me about"
              />

              {/* <ScrollParallax isAbsolutelyPositioned>
                <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                  {heroFloats.map((icon, index) => (
                    <li className="p-5" key={index}>
                      <img src={icon} width={24} height={25} alt={icon} />
                    </li>
                  ))}
                </ul>
              </ScrollParallax> */}
            </div>
          </div>

          <Gradient />

        </div>
        {/* <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
          <img
            src={bgHero}
            className="w-full opacity-25"
            alt="hero"
            width={1440}
          />
        </div> */}

        <BackgroundCircles />
      </div>
    </div>
  )
}
