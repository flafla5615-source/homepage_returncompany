import { useEffect, useRef } from 'react'

// 스크롤 진입 시 .is-visible 클래스를 부여하는 IntersectionObserver 훅.
// 대상 요소(또는 컨테이너 내부의 [data-reveal] 요소들)에 적용됩니다.
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const targets = root.hasAttribute('data-reveal')
      ? [root]
      : Array.from(root.querySelectorAll('[data-reveal]'))
    if (targets.length === 0) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}
