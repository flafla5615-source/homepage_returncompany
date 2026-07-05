# 이미지 교체 가이드

이 폴더에 실제 사진을 넣으면 사이트에 자동으로 표시됩니다.
파일이 없는 동안은 세련된 플레이스홀더가 대신 표시됩니다.

## 폴더 구조와 필요한 파일

```
images/
├── og-cover.jpg              # 카톡/SNS 공유 썸네일 (1200x630 권장)
├── hero/                     # 히어로 슬라이드 (가로형, 1920px 이상 권장)
│   ├── fitness.jpg           # 헬스 현장
│   ├── hyrox.jpg             # 하이록스/퍼포먼스 트레이닝
│   ├── barre.jpg             # 바레 수업
│   ├── pilates.jpg           # 필라테스 수업
│   └── space.jpg             # 인테리어/공간
├── business/                 # 사업 영역 (16:10)
│   ├── fitness.jpg
│   ├── boutique.jpg
│   ├── space.jpg
│   ├── brand.jpg
│   └── lab.jpg
├── brands/                   # 브랜드 카드 (4:3)
│   ├── musclefactory24.jpg
│   ├── oldgym.jpg
│   ├── urbangym.jpg
│   ├── gymflix.jpg
│   ├── boldgym.jpg
│   ├── teamapple.jpg
│   ├── wooapilates.jpg
│   ├── bellobarre.jpg
│   ├── urbanyoga.jpg
│   └── hantongssok.jpg
├── projects/                 # 프로젝트 카드 (16:10)
│   ├── subscription.jpg
│   ├── multibrand.jpg
│   ├── wooa-expansion.jpg
│   └── bello-education.jpg
├── history/                  # 연혁 타임라인 (16:9)
│   └── (연혁 데이터의 image 경로와 파일명을 맞추면 됩니다)
└── culture/                  # 문화·콘텐츠 카드 (4:3)
    ├── monthly-meeting.jpg
    ├── education.jpg
    ├── event.jpg
    ├── project-log.jpg
    ├── interview.jpg
    └── company-news.jpg
```

파일명을 바꾸고 싶으면 `src/data/` 안의 해당 데이터 파일에서
`image` 경로만 함께 수정하면 됩니다.
