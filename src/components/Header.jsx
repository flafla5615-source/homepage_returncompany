import { useEffect, useState } from 'react'
import { nav } from '../data/site'

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 모바일 메뉴가 열리면 배경 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const go = (id) => {
    setMenuOpen(false)
    // 메뉴 닫힘 애니메이션 이후 스크롤
    requestAnimationFrame(() => scrollToSection(id))
  }

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="header__inner">
          <a
            className="header__logo"
            href="#hero"
            onClick={(e) => { e.preventDefault(); go('hero') }}
            aria-label="리턴라이프컴퍼니 홈으로"
          >
            RETURNLIFE<span> COMPANY</span>
          </a>

          <nav className="header__nav" aria-label="주요 메뉴">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); go(item.id) }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header__right">
            <a
              className="header__cta"
              href="#contact"
              onClick={(e) => { e.preventDefault(); go('contact') }}
            >
              사업·제휴 문의
            </a>
            <button
              className={`header__burger ${menuOpen ? 'is-open' : ''}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            >
              <span /><span />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`mmenu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="mmenu__nav" aria-label="모바일 메뉴">
          {nav.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{ transitionDelay: menuOpen ? `${80 + i * 40}ms` : '0ms' }}
              onClick={(e) => { e.preventDefault(); go(item.id) }}
            >
              <span className="mmenu__num">{String(i + 1).padStart(2, '0')}</span>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="mmenu__cta"
          href="#contact"
          onClick={(e) => { e.preventDefault(); go('contact') }}
        >
          사업·제휴 문의
        </a>
      </div>
    </>
  )
}
