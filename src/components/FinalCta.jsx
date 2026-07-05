import { contact } from '../data/site'
import { useReveal } from '../hooks/useReveal'

export default function FinalCta() {
  const ref = useReveal()
  const hasChannel = contact.email || contact.phone || contact.kakaoChannel

  const CtaButton = ({ label, subject }) => {
    // 이메일이 확정되면 site.js 의 contact.email 만 채우면
    // 버튼이 자동으로 메일 링크로 전환됩니다.
    if (contact.email) {
      return (
        <a
          className="btn btn--gold btn--lg"
          href={`mailto:${contact.email}?subject=${encodeURIComponent(subject)}`}
        >
          {label}
        </a>
      )
    }
    return (
      <a className="btn btn--gold btn--lg" href="#contact-channels">
        {label}
      </a>
    )
  }

  return (
    <section id="contact" className="final section section--final" ref={ref}>
      <div className="container">
        <h2 className="final__title" data-reveal>
          공간을 만들고,
          <br />
          브랜드를 키우고,
          <br />
          사람의 삶을 움직입니다.
        </h2>
        <p className="final__brand" data-reveal>RETURNLIFE COMPANY</p>

        <div className="final__actions" data-reveal>
          <CtaButton label="회사소개 문의" subject="[리턴라이프컴퍼니] 회사소개 문의" />
          <CtaButton label="사업 제휴 문의" subject="[리턴라이프컴퍼니] 사업 제휴 문의" />
        </div>

        <div id="contact-channels" className="final__channels" data-reveal>
          {contact.email && (
            <a href={`mailto:${contact.email}`} className="final__channel">
              <span>EMAIL</span>{contact.email}
            </a>
          )}
          {contact.phone && (
            <a href={`tel:${contact.phone.replace(/-/g, '')}`} className="final__channel">
              <span>TEL</span>{contact.phone}
            </a>
          )}
          {contact.kakaoChannel && (
            <a href={contact.kakaoChannel} target="_blank" rel="noreferrer" className="final__channel">
              <span>KAKAO</span>카카오톡 채널
            </a>
          )}
          {!hasChannel && (
            <p className="final__pending">
              공식 문의 채널을 준비하고 있습니다. 채널이 확정되면 이 영역에 자동으로 표시됩니다.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
