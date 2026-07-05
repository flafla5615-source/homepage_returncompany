import { stats } from '../data/stats'
import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'

function StatItem({ stat }) {
  const isPending = typeof stat.value !== 'number'
  const [ref, value] = useCountUp(isPending ? 0 : stat.value)
  return (
    <div className="about__stat" data-reveal ref={ref}>
      <div className="about__stat-value">
        {isPending ? (
          // 확정되지 않은 수치는 임의로 쓰지 않고 상태로 표시 — stats.js 에서 value 입력 시 자동 전환
          <span className="about__stat-pending">UPDATE SOON</span>
        ) : (
          value
        )}
        <span className="about__stat-suffix">{stat.suffix}</span>
      </div>
      <p className="about__stat-label">
        {stat.label}
        {isPending && <em className="about__stat-note">수치 입력 대기</em>}
      </p>
    </div>
  )
}

export default function About() {
  const ref = useReveal()

  return (
    <section id="company" className="about section section--panel" ref={ref}>
      <div className="container">
        <div className="about__grid">
          <div className="about__head">
            <p className="kicker" data-reveal>COMPANY</p>
            <h2 className="h2" data-reveal>
              운동시설을 운영하는
              <br />
              회사를 넘어,
              <br />
              <em>운동 산업의 구조</em>를
              <br />
              만듭니다.
            </h2>
          </div>
          <div className="about__body">
            <p data-reveal>
              리턴라이프컴퍼니는 현장에서 시작했습니다.
              <br />
              회원이 무엇을 원하는지, 센터가 왜 성장하거나 멈추는지,
              <br />
              브랜드가 어떻게 선택받는지를 직접 운영하며 배웠습니다.
            </p>
            <p data-reveal>
              그 경험을 바탕으로 시설 운영, 브랜드, 공간, 마케팅, 교육,
              제품을 하나의 사업 구조로 연결합니다.
            </p>
            <p className="about__statement" data-reveal>
              시설을 운영하는 데서 끝나지 않습니다.
              <br />
              브랜드를 만들고, 공간을 완성하고,
              <br />
              성장하는 시스템을 설계합니다.
            </p>
          </div>
        </div>

        <div className="about__stats">
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
