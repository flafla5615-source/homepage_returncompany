import { culturePosts } from '../data/culture'
import { useReveal } from '../hooks/useReveal'
import SmartImage from './SmartImage'

export default function Culture() {
  const ref = useReveal()

  return (
    <section id="culture" className="culture section section--panel" ref={ref}>
      <div className="container">
        <div className="section-head section-head--split" data-reveal>
          <div>
            <p className="kicker">CULTURE & CONTENTS</p>
            <h2 className="h2">
              THE PEOPLE
              <br />
              BEHIND THE <em>BRAND</em>
            </h2>
          </div>
          <p className="section-head__desc">
            리턴라이프컴퍼니는 시설만 운영하는 회사가 아닙니다.
            <br />
            교육하고, 기록하고, 함께 모이는 —
            <br />
            사람과 문화를 만드는 회사입니다.
          </p>
        </div>

        <div className="culture__grid">
          {culturePosts.map((post, i) => (
            <article
              key={post.id}
              className="culture-card"
              data-reveal
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="culture-card__media">
                <SmartImage src={post.image} alt={post.title} label={post.category} />
              </div>
              <div className="culture-card__body">
                <span className="culture-card__cat">{post.category}</span>
                <h3 className="culture-card__title">{post.title}</h3>
                <p className="culture-card__excerpt">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
