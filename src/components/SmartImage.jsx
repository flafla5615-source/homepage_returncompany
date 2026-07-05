import { useState } from 'react'

// 실제 이미지가 /public/images/... 에 존재하면 그대로 표시하고,
// 없으면(로드 실패) 세련된 로컬 플레이스홀더를 표시합니다.
// 이미지 교체는 데이터 파일의 image 경로에 맞춰 파일만 넣으면 됩니다.
export default function SmartImage({ src, alt = '', label = '', tone = 'dark', className = '' }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div className={`ph ph--${tone} ${className}`} role="img" aria-label={alt || label}>
        <span className="ph__grid" aria-hidden="true" />
        <span className="ph__mark" aria-hidden="true">RL</span>
        {label && <span className="ph__label">{label}</span>}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt || label}
      loading="lazy"
      className={className}
      onError={() => setFailed(true)}
    />
  )
}
