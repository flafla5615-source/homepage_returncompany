import { useReveal } from '../hooks/useReveal'

function scrollToContact() {
  const el = document.getElementById('contact')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const recruitLinks = [
  { id: 'jobs', label: '채용정보 보기' },
  { id: 'trainer', label: '강사·트레이너 지원' },
  { id: 'partner', label: '사업·브랜드 제휴' },
  { id: 'interior', label: '인테리어 문의' },
]

export default function Recruit() {
  const ref = useReveal()

  return (
    <section id="recruit" className="recruit section section--black" ref={ref}>
      <div className="container">
        <p className="kicker kicker--lime" data-reveal>RECRUIT & PARTNERSHIP</p>
        <h2 className="recruit__title" data-reveal>
          같은 공간에서 일하는 것을 넘어,
          <br />
          같은 <em>방향</em>을 만들어갈
          <br />
          사람을 찾습니다.
        </h2>
        <div className="recruit__actions" data-reveal>
          {recruitLinks.map((link) => (
            <button key={link.id} className="recruit__btn" onClick={scrollToContact}>
              <span>{link.label}</span>
              <span className="recruit__btn-arrow" aria-hidden="true">→</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
