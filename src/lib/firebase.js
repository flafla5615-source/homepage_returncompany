// ─────────────────────────────────────────────────────────────
// Firebase 초기화
// - Analytics 는 프로덕션 빌드 + 지원 브라우저에서만 활성화됩니다.
//   (개발 서버, 광고 차단 환경 등에서 에러가 나지 않도록 가드)
// - 추후 Firestore, Auth 등이 필요하면 여기서 export 를 추가하세요.
// ─────────────────────────────────────────────────────────────
import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyC7ahQO_QD6M6ROunTGOuQTcEpnvTgX7Is',
  authDomain: 'homepagereturncompany.firebaseapp.com',
  projectId: 'homepagereturncompany',
  storageBucket: 'homepagereturncompany.firebasestorage.app',
  messagingSenderId: '890343029527',
  appId: '1:890343029527:web:1863941806b432d05c5552',
  measurementId: 'G-ZCXX31Z6VY',
}

export const app = initializeApp(firebaseConfig)

export let analytics = null

if (import.meta.env.PROD) {
  isSupported()
    .then((supported) => {
      if (supported) analytics = getAnalytics(app)
    })
    .catch(() => {
      // Analytics 미지원 환경 — 사이트 동작에는 영향 없음
    })
}
