import { processSteps } from '../data/process'
import { useReveal } from '../hooks/useReveal'

export default function Process() {
  const ref = useReveal()

  return (
    <section className="process section section--light" ref={ref}>
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="kicker">HOW WE WORK</p>
          <h2 className="h2">
            FROM SPACE
            <br />
            TO <em>GROWTH</em>
          </h2>
        </div>

        <ol className="process__grid">
          {processSteps.map((step, i) => (
            <li
              key={step.id}
              className="process__step"
              data-reveal
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="process__num">{step.number}</span>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__desc">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
