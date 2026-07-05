# RETURNLIFE COMPANY — 공식 홈페이지

14년의 운영 경험으로 운동 산업의 다음 장면을 만드는
리턴라이프컴퍼니 본사 랜딩페이지입니다.

## 기술 스택

- React 18 + Vite 5 (외부 UI 라이브러리 없음)
- 순수 CSS 디자인 시스템 (`src/styles/global.css`)
- 폰트: Archivo (영문 디스플레이) + Pretendard (한글 본문)

## 로컬 실행

```bash
npm install
npm run dev        # http://localhost:5180
```

## 배포 빌드

```bash
npm run build      # dist/ 폴더 생성
npm run preview    # 빌드 결과 로컬 확인
```

## 콘텐츠 수정 방법 (코드 수정 불필요)

모든 콘텐츠는 `src/data/` 폴더의 데이터 파일에서 관리합니다.

| 파일 | 내용 |
| --- | --- |
| `site.js` | 메뉴, 연락처(이메일/전화/카카오/SNS), 푸터 회사 정보 |
| `stats.js` | 회사 소개 숫자 (지점 수 등 미확정 수치는 `null` → 자동 숨김) |
| `brands.js` | 브랜드 포트폴리오 (카테고리, 한 줄 정의, 상세 URL) |
| `business.js` | 5개 사업 영역 |
| `projects.js` | 주요 프로젝트 (진행/확장 상태 표시) |
| `history.js` | 연혁 타임라인 (현재 샘플 — 실제 연혁으로 교체) |
| `culture.js` | 문화·콘텐츠 게시물 |
| `process.js` | 운영 방식 6단계 |

## 이미지 교체

`public/images/README.md` 참고 — 지정된 파일명으로 사진만 넣으면
플레이스홀더가 실제 이미지로 자동 전환됩니다.

## 입력 대기 중인 실제 정보

- 운영 지점 수, 인테리어 프로젝트 수 (`stats.js`)
- 실제 연혁 (`history.js`)
- 회사 주소, 대표자, 사업자번호, 연락처, SNS (`site.js`)
- 브랜드별 상세 페이지 URL (`brands.js`)
