// ─────────────────────────────────────────────────────────────
// 주요 프로젝트 데이터 (WE BUILD THE NEXT.)
// status: '진행 프로젝트' | '확장 프로젝트'
//   → 완료되지 않은 프로젝트를 성공 사례처럼 표현하지 않습니다.
// keyword: 카드 상단에 크게 표시되는 핵심 키워드
// ─────────────────────────────────────────────────────────────

export const projects = [
  {
    id: 'subscription',
    status: '진행 프로젝트',
    keyword: 'SUBSCRIPTION',
    title: '구독형 피트니스 프로젝트',
    description:
      '시청점과 신진주역점을 중심으로 기존 회원권 구조를 구독형 피트니스 경험으로 전환하는 프로젝트',
    tags: ['시청점', '신진주역점', '멤버십 전환'],
    image: '/images/projects/subscription.jpg',
  },
  {
    id: 'multibrand',
    status: '진행 프로젝트',
    keyword: 'MULTI-BRAND',
    title: '진주 극동 멀티브랜드 프로젝트',
    description:
      '볼드짐, 벨로바레, 우아필라테스가 각자의 전문성을 가지고 하나의 운동 목적지를 만드는 프로젝트',
    tags: ['볼드짐', '벨로바레', '우아필라테스'],
    image: '/images/projects/multibrand.jpg',
  },
  {
    id: 'wooa-expansion',
    status: '확장 프로젝트',
    keyword: 'EXPANSION',
    title: '우아필라테스 지역 확장',
    description:
      '거제에서 쌓은 운영 경험과 회원 관리 기준을 진주로 확장하는 부티크 브랜드 프로젝트',
    tags: ['거제 → 진주', '부티크'],
    image: '/images/projects/wooa-expansion.jpg',
  },
  {
    id: 'bello-education',
    status: '확장 프로젝트',
    keyword: 'EDUCATION',
    title: '벨로바레 브랜드·교육 프로젝트',
    description:
      '바레 스튜디오를 넘어 프로그램, 강사교육, 향후 브랜드 확장까지 설계하는 프로젝트',
    tags: ['프로그램', '강사교육', '브랜드 확장'],
    image: '/images/projects/bello-education.jpg',
  },
]
