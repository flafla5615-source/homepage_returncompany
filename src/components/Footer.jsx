import { footerInfo, businessFields, contact } from '../data/site'

export default function Footer() {
  // 실제 정보가 site.js 에 입력되기 전까지 임의 생성하지 않고
  // '정보 입력 필요' 상태로 표시합니다.
  const infoItems = [
    { label: '대표', value: footerInfo.ceo },
    { label: '주소', value: footerInfo.address },
    { label: '사업자등록번호', value: footerInfo.businessNumber },
    { label: '문의', value: contact.email },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <p className="footer__logo">
            RETURNLIFE
            <br />
            COMPANY
          </p>
          <ul className="footer__fields" aria-label="사업 영역">
            {businessFields.map((field) => (
              <li key={field}>{field}</li>
            ))}
          </ul>
        </div>

        <div className="footer__bottom">
          <div className="footer__info">
            <p>{footerInfo.companyNameKo}</p>
            <ul className="footer__meta">
              {infoItems.map((item) => (
                <li key={item.label}>
                  <span>{item.label}</span>
                  {item.value || <em className="footer__pending">정보 입력 필요</em>}
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__sns">
            {contact.instagram && (
              <a href={contact.instagram} target="_blank" rel="noreferrer">INSTAGRAM</a>
            )}
            {contact.kakaoChannel && (
              <a href={contact.kakaoChannel} target="_blank" rel="noreferrer">KAKAO</a>
            )}
          </div>
          <p className="footer__copy">
            © {footerInfo.copyrightYear} {footerInfo.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
