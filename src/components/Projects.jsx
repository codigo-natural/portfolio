import { github, grid } from "../assets"
import { projects } from "../constants"

export const Projects = () => {
  return (
    <section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <div className="max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center">

          <h2 className="h2">Projects</h2>
        </div>
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {projects.map((item) => {
            return (
              <div className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
                key={item.id}>
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    </div>

                    <div className="mb-10 -my-10 -mx-15 flex items-center justify-center">
                      <img
                        className=""
                        src={item.imageUrl}
                        width={528}
                        height={426}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                    <a
                      className="body-2 flex gap-4 select-none text-color-2"
                      target="_blank"
                      rel="noreferrer"
                      href={item.url}>
                      Github
                      <img
                        src={github}
                        alt="github icon"
                        width={24}
                        height={24}
                      />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
