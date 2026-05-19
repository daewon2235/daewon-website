# (주)대원모빌랙 — Astro 웹사이트

> Astro + Decap CMS 기반의 정적 사이트 생성 프로젝트.
> 직원이 관리자 페이지에서 사례를 등록하면 자동으로 사이트에 반영됩니다.

---

## 🚀 처음 시작하기 (5분)

### 사전 준비
- ✅ Node.js v20 이상 설치 ([nodejs.org](https://nodejs.org/ko))
- ✅ 본 프로젝트 폴더가 컴퓨터에 압축 풀려 있음

### 1단계: 명령 프롬프트(또는 PowerShell) 열기
- **Windows**: 시작 → "cmd" 검색 → 실행
- **macOS**: Applications > Utilities > Terminal

### 2단계: 프로젝트 폴더로 이동
명령창에서 `cd` 명령으로 폴더 위치 이동. 예시:

```bash
cd Downloads\daewon-website
```

(폴더 위치에 따라 경로는 달라집니다. 압축 푼 폴더를 직접 찾아 그 안으로 이동하세요.)

### 3단계: 의존성 설치 (한 번만)
다음 명령을 입력하고 Enter:

```bash
npm install
```

- 약 1~3분 걸립니다 (인터넷 속도에 따라)
- 끝나면 `node_modules` 폴더가 생성됨 (이건 깃허브에 안 올라감)

### 4단계: 사이트 미리보기 띄우기
다음 명령 입력:

```bash
npm run dev
```

- 결과:
  ```
  astro  v5.x.x
  ┃ Local    http://localhost:4321/
  ┃ Network  use --host to expose
  ```
- 브라우저에서 **http://localhost:4321/** 접속
- 자동 새로고침: 코드 수정하면 브라우저가 자동으로 다시 그려줌

### 5단계: 박물관 사례 페이지 확인
- 브라우저에서 [http://localhost:4321/cases/museum](http://localhost:4321/cases/museum) 접속
- 국립공주박물관 사례가 정상적으로 표시되면 성공 ✅

### 사이트 끄기
명령창에서 **Ctrl + C** 누르기. 끝.

---

## 📂 프로젝트 구조

```
daewon-website/
├── public/                  ← 정적 파일 (그대로 사이트에 노출됨)
│   ├── logo.png
│   └── images/              ← 박물관/도서관 등 사례 사진들
│
├── src/
│   ├── content/
│   │   ├── config.ts        ← 데이터 구조 정의 (스키마)
│   │   └── cases/           ← 사례 데이터 (마크다운 파일들)
│   │       └── gongju-museum.md
│   │
│   ├── components/          ← 재사용 UI 부품들
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── CategoryTabs.astro
│   │   └── CaseBlock.astro
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro ← 공통 페이지 틀
│   │
│   ├── pages/               ← 실제 URL이 되는 페이지들
│   │   ├── index.astro      ← / (메인, 임시 placeholder)
│   │   └── cases/
│   │       └── [category].astro  ← /cases/museum, /cases/library, ...
│   │
│   └── styles/
│       └── global.css       ← 전역 디자인 시스템 (컬러·폰트)
│
├── astro.config.mjs         ← Astro 빌드 설정
├── package.json             ← 의존성 목록
├── tsconfig.json            ← TypeScript 설정
└── README.md                ← 이 파일
```

---

## 🌐 URL 구조

| URL | 페이지 |
|-----|--------|
| `/` | 메인 (현재 임시 placeholder) |
| `/cases/museum` | 박물관 설치 사례 |
| `/cases/library` | 도서관 설치 사례 |
| `/cases/education` | 교육기관 설치 사례 |
| `/cases/public` | 공공기관 설치 사례 |
| `/cases/warehouse` | 창고·물류 설치 사례 |

---

## ✏️ 사례 추가하는 법 (Decap CMS 셋업 전 임시)

지금은 Decap CMS 관리자 페이지가 아직 없으므로, **마크다운 파일을 직접 만들어** 사례를 추가합니다.

### 방법
1. `src/content/cases/` 폴더로 이동
2. 새 파일 만들기. 예: `gongju-museum-2.md`
3. 기존 `gongju-museum.md` 내용을 복사 → 새 파일에 붙여넣기
4. 내용 수정 (제목·연도·사진 경로 등)
5. 사진은 `public/images/`에 업로드, 경로는 `/images/파일명.jpg` 형식으로 참조
6. 저장 → 브라우저 자동 새로고침 → 적용 확인

> ⚠️ Decap CMS 셋업(5단계)이 끝나면 마크다운 직접 편집할 필요 없어요. 관리자 페이지의 폼에서 입력만 하면 됩니다.

---

## 🛠️ 명령어 요약

| 명령 | 동작 |
|------|------|
| `npm install` | 의존성 설치 (처음 한 번) |
| `npm run dev` | 로컬 개발 서버 (코드 수정 자동 반영) |
| `npm run build` | 배포용 파일 생성 (`dist/` 폴더에) |
| `npm run preview` | 빌드된 결과 미리보기 |

---

## 🔜 다음 단계 (앞으로 할 일)

- [ ] 메인 페이지(daewon_1.html) Astro로 이식
- [ ] Decap CMS 관리자 페이지 셋업 (`/admin`)
- [ ] Netlify 배포 + 도메인 연결 (`mobile-rack.co.kr`)
- [ ] 박물관 외 다른 카테고리 사례 데이터 입력
- [ ] 직원 교육 자료 작성

---

## 📞 문의

이 프로젝트 관련 문의: (주)대원모빌랙 (info@mobile-rack.co.kr)
