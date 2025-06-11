# TrendVibe - 혁신적인 앱 개발 전문 기업

> **"트렌드를 감지하고, 미래를 진동시키다"** - Feel the Trend, Vibrate the Future

## 🚀 프로젝트 소개

TrendVibe는 최첨단 기술과 창의적 아이디어로 사용자의 일상을 변화시키는 혁신적인 모바일 애플리케이션을 개발하는 전문 기업입니다. 이 웹사이트는 대기업 수준의 현대적이고 세련된 디자인으로 구축되었습니다.

## ✨ 주요 특징

### 🎨 디자인 & UI/UX
- **현대적 그라데이션**: 보라색-핑크 계열의 트렌디한 색상 조합
- **반응형 디자인**: 모든 디바이스에서 완벽한 사용자 경험
- **부드러운 애니메이션**: CSS3 및 JavaScript 기반 인터랙티브 효과
- **접근성 준수**: WCAG 가이드라인을 따른 접근 가능한 웹사이트

### 🛠 기술 스택
- **HTML5**: 시맨틱 마크업
- **CSS3**: 현대적 스타일링, Flexbox, Grid, 애니메이션
- **Vanilla JavaScript**: 경량화된 인터랙티브 기능
- **Font Awesome**: 아이콘 라이브러리
- **Pretendard 폰트**: 한국어 최적화 폰트

### 💫 핵심 기능
- **스무스 스크롤**: 부드러운 네비게이션 경험
- **모바일 메뉴**: 햄버거 메뉴 토글
- **폼 처리**: 연락처 폼 제출 및 알림 시스템
- **스크롤 진행률**: 페이지 읽기 진행도 표시
- **플로팅 버튼**: 빠른 연락처 접근
- **카운터 애니메이션**: 통계 수치 애니메이션
- **패럴랙스 효과**: 히어로 섹션 시각적 효과

## 📁 프로젝트 구조

```
trendvibe/
├── index.html          # 메인 HTML 파일
├── styles.css          # CSS 스타일시트
├── script.js           # JavaScript 기능
└── README.md          # 프로젝트 문서
```

## 🎯 페이지 섹션

1. **Hero Section**: 회사 슬로건과 핵심 메시지
2. **Services**: 제공 서비스 (모바일 앱 개발, 클라우드, AI, 디지털 전환)
3. **About**: 회사 소개 및 기술 스택
4. **Team**: 핵심 팀 멤버 소개
5. **Contact**: 연락처 정보 및 문의 폼
6. **Footer**: 사이트맵 및 추가 링크

## 🚀 실행 방법

### 1. 파일 다운로드
```bash
# 터미널에서 프로젝트 폴더로 이동
cd /Users/sungminsuh/Desktop/trendvibe
```

### 2. 로컬 서버 실행
다음 중 하나의 방법을 선택하여 실행:

#### Python 서버 (Python 설치되어 있는 경우)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Node.js 서버 (Node.js 설치되어 있는 경우)
```bash
# 전역 설치
npm install -g http-server

# 서버 실행
http-server
```

#### Live Server (VS Code 사용자)
1. VS Code에서 Live Server 확장 프로그램 설치
2. `index.html` 파일을 우클릭
3. "Open with Live Server" 선택

### 3. 브라우저에서 확인
- `http://localhost:8000` (Python 서버)
- `http://127.0.0.1:8080` (http-server)

## 📱 반응형 브레이크포인트

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎨 색상 팔레트

```css
--primary-color: #667eea     /* 메인 보라색 */
--secondary-color: #764ba2   /* 진한 보라색 */
--accent-color: #f093fb      /* 핑크색 */
--dark-color: #2d3748        /* 다크 그레이 */
--light-color: #f7fafc       /* 라이트 그레이 */
```

## 🔧 커스터마이징

### 색상 변경
`styles.css` 파일의 `:root` 섹션에서 CSS 변수를 수정하여 색상을 변경할 수 있습니다.

### 콘텐츠 수정
`index.html` 파일에서 텍스트 내용을 직접 수정할 수 있습니다.

### 애니메이션 조정
`script.js` 파일에서 애니메이션 타이밍과 효과를 조정할 수 있습니다.

## 📧 연락처 폼 설정

현재 연락처 폼은 데모 목적으로 설정되어 있습니다. 실제 서버에 연결하려면:

1. `script.js`의 폼 핸들러 수정
2. 백엔드 API 엔드포인트 연결
3. 이메일 서비스 통합 (예: EmailJS, Netlify Forms)

## 🌟 주요 슬로건

**한국어**: "트렌드를 감지하고, 미래를 진동시키다"
**English**: "Feel the Trend, Vibrate the Future"

## 📈 성능 최적화

- **이미지 최적화**: WebP 형식 지원
- **CSS 압축**: 중요 스타일 인라인화
- **JavaScript 지연 로딩**: 비필수 스크립트 지연 로딩
- **브라우저 캐싱**: 정적 자원 캐싱 설정

## 🔍 SEO 최적화

- 시맨틱 HTML5 마크업
- 메타 태그 최적화
- Open Graph 태그 (추가 가능)
- 구조화된 데이터 (Schema.org)

## 📄 라이선스

이 프로젝트는 개인/상업적 사용이 가능합니다.

## 🙋‍♂️ 지원

문의사항이나 기술 지원이 필요한 경우:
- 이메일: hello@trendvibe.co.kr
- 전화: +82-2-1234-5678

---

**TrendVibe** - 혁신을 현실로, 미래를 선도하는 앱 개발 🚀 