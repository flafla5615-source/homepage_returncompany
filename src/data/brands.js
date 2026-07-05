// ─────────────────────────────────────────────────────────────
// 브랜드 포트폴리오 데이터
// - categories: 'FITNESS' | 'PERFORMANCE' | 'BOUTIQUE' | 'WELLNESS'
//   (복수 지정 가능 — 필터에서 하나라도 일치하면 노출)
// - url: 브랜드 상세/외부 페이지가 준비되면 입력. null 이면 카드가
//   링크로 동작하지 않고 '상세 페이지 준비 중' 상태로 표시됩니다.
// - image: /public/images/brands/ 폴더에 같은 이름의 파일을 넣으면
//   자동으로 표시되고, 없으면 세련된 플레이스홀더가 표시됩니다.
// ─────────────────────────────────────────────────────────────

export const brandCategories = ['ALL', 'FITNESS', 'PERFORMANCE', 'BOUTIQUE', 'WELLNESS']

export const brands = [
  {
    id: 'musclefactory24',
    name: '머슬팩토리24',
    nameEn: 'MUSCLE FACTORY 24',
    categories: ['FITNESS'],
    oneLiner: '24시간, 일상에 가장 가까운 헬스 공간',
    fields: ['헬스', '24시간 운영'],
    image: '/images/brands/musclefactory24.jpg',
    url: null,
  },
  {
    id: 'oldgym',
    name: '올드짐',
    nameEn: 'OLD GYM',
    categories: ['FITNESS'],
    oneLiner: '운동의 본질에 집중하는 클래식 짐',
    fields: ['헬스'],
    image: '/images/brands/oldgym.jpg',
    url: null,
  },
  {
    id: 'urbangym',
    name: '어반짐',
    nameEn: 'URBAN GYM',
    categories: ['FITNESS'],
    oneLiner: '도심의 생활 동선 안에서 만나는 피트니스',
    fields: ['헬스'],
    image: '/images/brands/urbangym.jpg',
    url: null,
  },
  {
    id: 'gymflix',
    name: '짐플릭스',
    nameEn: 'GYMFLIX',
    categories: ['FITNESS'],
    oneLiner: '운동을 콘텐츠처럼 즐기는 피트니스 공간',
    fields: ['헬스'],
    image: '/images/brands/gymflix.jpg',
    url: null,
  },
  {
    id: 'boldgym',
    name: '볼드짐',
    nameEn: 'BOLD GYM',
    categories: ['FITNESS', 'PERFORMANCE'],
    oneLiner: '더 강한 트레이닝을 위한 퍼포먼스 짐',
    fields: ['헬스', '퍼포먼스 트레이닝'],
    image: '/images/brands/boldgym.jpg',
    url: null,
  },
  {
    id: 'teamapple',
    name: '팀애플',
    nameEn: 'TEAM APPLE',
    categories: ['FITNESS', 'PERFORMANCE'],
    oneLiner: '함께 훈련하며 성장하는 트레이닝 팀',
    fields: ['트레이닝', '커뮤니티'],
    image: '/images/brands/teamapple.jpg',
    url: null,
  },
  {
    id: 'wooapilates',
    name: '우아필라테스',
    nameEn: 'WOOA PILATES',
    categories: ['BOUTIQUE'],
    oneLiner: '몸의 결을 다듬는 부티크 필라테스',
    fields: ['필라테스'],
    image: '/images/brands/wooapilates.jpg',
    url: null,
  },
  {
    id: 'bellobarre',
    name: '벨로바레',
    nameEn: 'BELLO BARRE',
    categories: ['BOUTIQUE'],
    oneLiner: '음악과 리듬 위에서 완성되는 바레 스튜디오',
    fields: ['바레', '프로그램·교육'],
    image: '/images/brands/bellobarre.jpg',
    url: null,
  },
  {
    id: 'urbanyoga',
    name: '어반요가',
    nameEn: 'URBAN YOGA',
    categories: ['BOUTIQUE'],
    oneLiner: '도시의 속도에서 벗어나는 요가 스튜디오',
    fields: ['요가'],
    image: '/images/brands/urbanyoga.jpg',
    url: null,
  },
  {
    id: 'hantongssok',
    name: '한통쏙',
    nameEn: 'HANTONG SSOK',
    categories: ['WELLNESS'],
    oneLiner: '운동하는 사람들의 일상을 더 편리하게 만드는 웰니스 제품 프로젝트',
    fields: ['웰니스', '커머스'],
    image: '/images/brands/hantongssok.jpg',
    url: null,
  },
]
