// ─────────────────────────────────────────────────────────────
// 회사 문화·콘텐츠 데이터 (THE PEOPLE BEHIND THE BRAND)
// 새 게시물은 posts 배열 맨 앞에 추가하면 됩니다.
// category 는 cultureCategories 중 하나를 사용합니다.
// ─────────────────────────────────────────────────────────────

export const cultureCategories = [
  'COMPANY NEWS',
  'INTERVIEW',
  'EDUCATION',
  'MONTHLY MEETING',
  'EVENT',
  'PROJECT LOG',
]

export const culturePosts = [
  {
    id: 'monthly-meeting',
    category: 'MONTHLY MEETING',
    title: '전 지점이 한자리에 모이는 월례회의',
    excerpt: '지점별 운영 현황을 공유하고 다음 달의 방향을 함께 정합니다.',
    image: '/images/culture/monthly-meeting.jpg',
    url: null,
  },
  {
    id: 'education',
    category: 'EDUCATION',
    title: '현장을 바꾸는 사내 교육',
    excerpt: '상담, 회원관리, 프로그램 운영까지 — 현장에서 바로 쓰는 교육을 진행합니다.',
    image: '/images/culture/education.jpg',
    url: null,
  },
  {
    id: 'event',
    category: 'EVENT',
    title: '회원과 함께 만드는 행사',
    excerpt: '가을 운동회부터 지점 이벤트까지, 운동이 문화가 되는 순간들.',
    image: '/images/culture/event.jpg',
    url: null,
  },
  {
    id: 'project-log',
    category: 'PROJECT LOG',
    title: '공간이 완성되기까지의 기록',
    excerpt: '인테리어 전과 후, 하나의 공간이 브랜드가 되는 과정을 기록합니다.',
    image: '/images/culture/project-log.jpg',
    url: null,
  },
  {
    id: 'interview',
    category: 'INTERVIEW',
    title: '현장의 사람들을 만나다',
    excerpt: '트레이너와 강사, 운영 매니저가 이야기하는 일과 성장.',
    image: '/images/culture/interview.jpg',
    url: null,
  },
  {
    id: 'company-news',
    category: 'COMPANY NEWS',
    title: '리턴라이프컴퍼니의 새로운 소식',
    excerpt: '브랜드와 지점, 프로젝트의 최신 소식을 전합니다.',
    image: '/images/culture/company-news.jpg',
    url: null,
  },
]
