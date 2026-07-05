// ─────────────────────────────────────────────────────────────
// 사이트 공통 데이터
// 실제 회사 정보(주소, 대표자, 사업자번호, 연락처, SNS)가 확정되면
// 아래 contact / footer 항목만 채우면 됩니다. 비어 있는 항목은
// 화면에 렌더링되지 않습니다.
// ─────────────────────────────────────────────────────────────

export const nav = [
  { id: 'company', label: 'COMPANY' },
  { id: 'business', label: 'BUSINESS' },
  { id: 'brands', label: 'BRANDS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'history', label: 'HISTORY' },
  { id: 'culture', label: 'CULTURE' },
  { id: 'recruit', label: 'RECRUIT' },
  { id: 'contact', label: 'CONTACT' },
]

export const contact = {
  // 예: 'partner@returnlife.co.kr' — 입력 시 문의 버튼이 메일 링크로 전환됩니다.
  email: '',
  // 예: '055-000-0000'
  phone: '',
  // 예: 'https://pf.kakao.com/_xxxxx'
  kakaoChannel: '',
  // 예: 'https://www.instagram.com/returnlife_company'
  instagram: '',
}

export const footerInfo = {
  companyName: 'RETURNLIFE COMPANY',
  companyNameKo: '리턴라이프컴퍼니',
  // 아래 항목은 실제 정보 확인 전까지 비워둡니다. (임의 생성 금지)
  ceo: '',
  address: '',
  businessNumber: '',
  copyrightYear: new Date().getFullYear(),
}

export const businessFields = ['FITNESS', 'BOUTIQUE', 'SPACE', 'BRAND', 'COMMERCE']
