import { useRef } from 'react'
import { projects } from '../data/projects'
import { useReveal } from '../hooks/useReveal'
import SmartImage from './SmartImage'

export default function Projects() {
  const ref = useReveal()
  const trackRef = useRef(null)

  const scrollBy = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.project-card')
    const step = card ? card.offsetWidth + 24 : 480
    track.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section id="projects" className="projects section section--dark" ref={ref}>
      <div className="container">
        <div className="section-head section-head--split" data-reveal>
          <div>
            <p className="kicker kicker--lime">KEY PROJECTS</p>
            <h2 className="h2">
              WE BUILD
              <br />
              THE <em>NEXT.</em>
            </h2>
          </div>
          <div className="projects__nav">
            <button onClick={() => scrollBy(-1)} aria-label="이전 프로젝트">←</button>
            <button onClick={() => scrollBy(1)} aria-label="다음 프로젝트">→</button>
          </div>
        </div>
      </div>

      <div className="projects__track" ref={trackRef} data-reveal>
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-card__media">
              <SmartImage src={project.image} alt={project.title} label={project.keyword} />
              <span className="project-card__status">{project.status}</span>
            </div>
            <div className="project-card__body">
              <p className="project-card__keyword">{project.keyword}</p>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
        <div className="projects__spacer" aria-hidden="true" />
      </div>
    </section>
  )
}
