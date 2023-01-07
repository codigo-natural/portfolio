import React from "react"
import "./portfolio.css"
import IMG1 from "../../assets/portfolio-1.png"
import IMG2 from "../../assets/portfolio-2.png"
import IMG3 from "../../assets/portfolio-3.png"
import IMG4 from "../../assets/portfolio-4.png"
import IMG5 from "../../assets/portfolio-5.png"
import IMG6 from "../../assets/portfolio-6.png"

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Parallax calculator',
    github: 'https://github.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Glassmorphism watch',
    github: 'https://github.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Game three in stripe',
    github: 'https://github.com'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Contact form',
    github: 'https://github.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Cripto Dashboard',
    github: 'https://github.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Cofee shop website',
    github: 'https://github.com'
  }
]

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} target="_blank" rel="noreferrer" className="btn">Github</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  );
}

export default Portfolio