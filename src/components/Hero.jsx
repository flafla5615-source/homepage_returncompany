import { useEffect, useState } from 'react'
import SmartImage from './SmartImage'

// 히어로 배경 슬라이드 — /public/images/hero/ 에 같은 이름의 파일을 넣으면
// 실제 이미지(또는 추후 영상 프레임)로 교체됩니다.
const slides = [
  { id: 'fitness', label: 'FITNESS', image: '/images/hero/fitness.jpg' },
  { id: 'hyrox', label: 'HYROX', image: '/images/hero/hyrox.jpg' },
  { id: 'barre', label: 'BARRE', image: '/images/hero/barre.jpg' },
  { id: 'pilates', label: 'PILATES', image: '/images/hero/pilates.jpg' },
  { id: 'space', label: 'SPACE', image: '/images/hero/space.jpg' },
]

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, 4200)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero__bg" aria-hidden="true">
        {slides.map((slide, i) => (
          <div key={slide.id} className={`hero__slide ${i === active ? 'is-active' : ''}`}>
            <SmartImage src={slide.image} alt="" label={slide.label} className="hero__img" />
          </div>
        ))}
        <div className="hero__scrim" />
      </div>

      <div className="hero__inner">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-line" />
          14 YEARS OF EXPERIENCE
        </p>
        <h1 className="hero__title">
          14년의 운영 경험으로,
          <br />
          운동 산업의 <em>다음 장면</em>을
          <br />
          만듭니다.
        </h1>
        <p className="hero__fields">FITNESS · BOUTIQUE · SPACE · BRAND · COMMERCE</p>
        <div className="hero__actions">
          <button className="btn btn--lime" onClick={() => scrollToSection('company')}>
            리턴라이프컴퍼니 보기
          </button>
          <button className="btn btn--ghost" onClick={() => scrollToSection('brands')}>
            브랜드 포트폴리오
          </button>
        </div>
      </div>

      <div className="hero__foot">
        <div className="hero__dots" role="tablist" aria-label="히어로 이미지 전환">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              className={`hero__dot ${i === active ? 'is-active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`${slide.label} 이미지 보기`}
            >
              <span>{slide.label}</span>
            </button>
          ))}
        </div>
        <span className="hero__scroll" aria-hidden="true">SCROLL</span>
      </div>
    </section>
  )
}
