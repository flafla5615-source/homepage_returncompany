import { useState } from 'react'
import { brands, brandCategories } from '../data/brands'
import { useReveal } from '../hooks/useReveal'
import SmartImage from './SmartImage'

function BrandCard({ brand }) {
  const inner = (
    <>
      <div className="brand-card__media">
        <SmartImage src={brand.image} alt={brand.name} label={brand.nameEn} />
        <span className="brand-card__cat">{brand.categories.join(' / ')}</span>
      </div>
      <div className="brand-card__body">
        <p className="brand-card__en">{brand.nameEn}</p>
        <h3 className="brand-card__name">{brand.name}</h3>
        <p className="brand-card__line">{brand.oneLiner}</p>
        <div className="brand-card__fields">
          {brand.fields.map((f) => (
            <span key={f}>{f}</span>
          ))}
        </div>
      </div>
      <span className="brand-card__arrow" aria-hidden="true">
        {brand.url ? '→' : '상세 준비 중'}
      </span>
    </>
  )

  // 상세 페이지 URL 이 없으면 링크로 렌더링하지 않아 깨진 이동을 방지
  if (brand.url) {
    return (
      <a className="brand-card" href={brand.url} target="_blank" rel="noreferrer">
        {inner}
      </a>
    )
  }
  return <div className="brand-card brand-card--static">{inner}</div>
}

export default function Brands() {
  const ref = useReveal()
  const [filter, setFilter] = useState('ALL')

  const filtered =
    filter === 'ALL' ? brands : brands.filter((b) => b.categories.includes(filter))

  return (
    <section id="brands" className="brands section section--light" ref={ref}>
      <div className="container">
        <div className="section-head section-head--split" data-reveal>
          <div>
            <p className="kicker">BRAND PORTFOLIO</p>
            <h2 className="h2">
              ONE COMPANY,
              <br />
              DIFFERENT <em>IDENTITIES.</em>
            </h2>
          </div>
          <p className="section-head__desc">
            모든 브랜드를 똑같이 만들지 않습니다.
            <br />
            지역과 고객, 운동 목적에 따라 각각의 브랜드가
            <br />
            자신만의 이유로 선택받도록 설계합니다.
          </p>
        </div>

        <div className="brands__filter" data-reveal role="group" aria-label="브랜드 카테고리 필터">
          {brandCategories.map((cat) => (
            <button
              key={cat}
              className={`brands__filter-btn ${filter === cat ? 'is-active' : ''}`}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="brands__grid">
          {filtered.map((brand) => (
            <div key={brand.id} data-reveal className="is-visible">
              <BrandCard brand={brand} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
