import { businessAreas } from '../data/business'
import { useReveal } from '../hooks/useReveal'
import SmartImage from './SmartImage'

export default function Business() {
  const ref = useReveal()

  return (
    <section id="business" className="business section section--dark" ref={ref}>
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="kicker kicker--lime">WHAT WE DO</p>
          <h2 className="h2">OUR BUSINESS</h2>
        </div>

        <div className="business__list">
          {businessAreas.map((area, i) => (
            <article
              key={area.id}
              className={`business__item ${i % 2 === 1 ? 'business__item--flip' : ''}`}
              data-reveal
            >
              <div className="business__media">
                <SmartImage src={area.image} alt={area.subtitle} label={area.title} />
              </div>
              <div className="business__content">
                <span className="business__number">{area.number}</span>
                <h3 className="business__title">{area.title}</h3>
                <p className="business__subtitle">{area.subtitle}</p>
                <p className="business__desc">{area.description}</p>
                <div className="business__items">
                  <span className="business__items-label">{area.itemsLabel}</span>
                  <ul>
                    {area.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
