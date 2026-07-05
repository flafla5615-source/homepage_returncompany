import { useEffect, useState } from 'react'

// 모바일 하단 고정 문의 버튼 — 히어로를 지나면 나타나고,
// 최종 CTA(contact) 섹션에 도달하면 사라집니다.
export default function MobileCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const contactEl = document.getElementById('contact')
      const passedHero = window.scrollY > window.innerHeight * 0.8
      const beforeContact = contactEl
        ? contactEl.getBoundingClientRect().top > window.innerHeight
        : true
      setVisible(passedHero && beforeContact)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <button
      className={`mobile-cta ${visible ? 'is-visible' : ''}`}
      onClick={go}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      사업·제휴 문의 <span aria-hidden="true">→</span>
    </button>
  )
}
