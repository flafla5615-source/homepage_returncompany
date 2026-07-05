// ─────────────────────────────────────────────────────────────
// 회사 소개 숫자 영역
// value 가 null 인 항목은 화면에 표시되지 않습니다.
// 정확한 수치가 확인되면 value 만 숫자로 채우면 자동 노출됩니다.
// (확인되지 않은 숫자는 임의로 작성하지 않는다는 원칙)
// ─────────────────────────────────────────────────────────────
import { brands } from './brands'

export const stats = [
  {
    id: 'years',
    value: 14,
    suffix: 'YEARS',
    label: '운동시설 직접 운영 경력',
  },
  {
    id: 'brands',
    // 브랜드 수는 brands.js 데이터에서 자동 계산됩니다.
    value: brands.length,
    suffix: 'BRANDS',
    label: '운영 중인 계열 브랜드',
  },
  {
    id: 'locations',
    value: null, // TODO: 운영 지점 수 확인 후 입력 (예: 12)
    suffix: 'LOCATIONS',
    label: '운영 지점',
  },
  {
    id: 'spaceProjects',
    value: null, // TODO: 인테리어 프로젝트 수 확인 후 입력 (예: 20)
    suffix: 'PROJECTS',
    label: '공간 기획·인테리어 프로젝트',
  },
]
