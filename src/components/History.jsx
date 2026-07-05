import { historyItems } from '../data/history'
import { useReveal } from '../hooks/useReveal'
import SmartImage from './SmartImage'

export default function History() {
  const ref = useReveal()
  const hasSample = historyItems.some((item) => item.isSample)

  return (
    <section id="history" className="history section section--dark" ref={ref}>
      <div className="container">
        <div className="section-head section-head--split" data-reveal>
          <div>
            <p className="kicker kicker--lime">HISTORY</p>
            <h2 className="h2">
              14 YEARS,
              <br />
              STILL <em>MOVING.</em>
            </h2>
          </div>
          {hasSample && (
            <p className="section-head__desc history__notice">
              아래 타임라인은 화면 구조 확인용 샘플입니다.
              <br />
              실제 연혁이 확정되면 데이터 파일에서 교체됩니다.
            </p>
          )}
        </div>

        <ol className="history__timeline">
          {historyItems.map((item, i) => (
            <li
              key={`${item.year}-${item.title}`}
              className={`history__item ${i % 2 === 1 ? 'history__item--flip' : ''}`}
              data-reveal
            >
              <div className="history__meta">
                <span className="history__year">
                  {item.year}
                  {item.isSample && <em className="history__sample">SAMPLE</em>}
                </span>
                <h3 className="history__title">{item.title}</h3>
                {item.description && <p className="history__desc">{item.description}</p>}
              </div>
              <div className="history__media">
                <SmartImage src={item.image} alt={item.title} label={item.title} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
