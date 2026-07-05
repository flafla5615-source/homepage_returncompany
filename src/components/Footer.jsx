import { footerInfo, businessFields, contact } from '../data/site'

export default function Footer() {
  const infoLine = [
    footerInfo.ceo && `대표 ${footerInfo.ceo}`,
    footerInfo.businessNumber && `사업자등록번호 ${footerInfo.businessNumber}`,
    footerInfo.address,
  ].filter(Boolean)

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
            {/* 대표자·주소·사업자번호는 실제 정보가 입력되면 표시됩니다. */}
            {infoLine.length > 0 && <p>{infoLine.join(' · ')}</p>}
            {contact.email && <p>{contact.email}</p>}
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
