# 최우진 · 수학의 필연성 — 개인 홈페이지

비대면 1:1 수능 수학 지도 및 자체 제작 기출 해설서 안내를 위한 정적 에디토리얼 홈페이지입니다.

## 1. 내 컴퓨터에서 바로 미리보기
1. 이 폴더(`website`)에서 터미널(PowerShell)을 엽니다.
2. 아래 명령어를 실행합니다.
   - `npm.cmd run dev`
3. 브라우저에서 `http://localhost:4321` 로 접속합니다.

## 2. 나중에 내용 수정하는 곳 (파일 1개만 수정)
`src/data/site.ts` 파일을 열면 아래 항목을 한눈에 수정할 수 있습니다.
- `siteUrl`: 개인 도메인 구매 후 입력 (예: `https://math-necessity.kr`)
- `contact.email`: 공식 이메일 주소 입력
- `contact.kakaoOpenChatUrl`: 카카오톡 오픈채팅방 링크 입력
- `textbook.purchaseUrl`: 추후 교재 판매(스마트스토어·PDF) 링크 입력
- `media.*`: 실제 손풀이 캡처나 교재 내지 사진을 `public/images/` 폴더에 넣고 경로 입력

## 3. GitHub + Vercel 무료 배포 순서
1. GitHub에 새 저장소(Repository)를 만들고 `website` 폴더를 올립니다. (`node_modules`, `dist`는 `.gitignore`로 자동 제외됩니다.)
2. [Vercel](https://vercel.com)에 GitHub 계정으로 로그인 → `Add New Project` → 방금 만든 저장소 선택 → `Deploy` 클릭.
3. Astro 프로젝트로 자동 인식되며, 별도 설정 없이 1분 안에 무료 웹 주소(`*.vercel.app`)가 생성됩니다.
4. 추후 개인 도메인(`.kr` / `.com`)을 구매하시면 Vercel `Settings → Domains`에서 도메인만 연결하면 됩니다.

## 4. 비즈니스 프로필 등록 시 확인 사항
- 네이버·구글·당근 비즈니스 프로필에 홈페이지 URL을 등록할 때, 상호(`최우진 · 수학의 필연성`)와 전화번호(`010-2046-1197`)가 일치하도록 설정되어 있습니다.
- 페이지 소스 안에 검색엔진용 구조화 데이터(`JSON-LD`: WebSite, Person, Service, Book)와 `robots.txt`가 기본 포함되어 있습니다.
