# GitHub & Vercel 학습 가이드

> GitHub 계정: **awbs33** | Vercel 계정: 미생성 (Step 7에서 생성)

---

## Phase 1 — Git & GitHub 기본 워크플로우

### Step 1. 로컬 Git 초기화
```bash
cd ~/projects/vercel_github_study
git init
git config user.name "awbs33"
git config user.email "fft6804@gmail.com"
```
**배우는 것:** 로컬 저장소 개념, git init

---

### Step 2. 첫 파일 생성 & 첫 커밋
```bash
# 파일이 이미 있다면 그대로 사용
git add .
git commit -m "first commit: add index.html"
```
**배우는 것:** `add` (스테이징), `commit` (스냅샷 저장), commit message 작성법

---

### Step 3. GitHub 원격 저장소 생성 & Push
```bash
# GitHub에서 새 repository 생성 (이름: vercel-github-study)
gh repo create vercel-github-study --public --source=. --remote=origin --push
# 또는 웹에서 생성 후:
git remote add origin https://github.com/awbs33/vercel-github-study.git
git push -u origin main
```
**배우는 것:** remote, push, origin 개념, 로컬 ↔ 원격 연결

---

### Step 4. 파일 수정 → 재 Push (핵심 반복 사이클)
```bash
# index.html 수정 후
git status          # 변경 파일 확인
git diff            # 변경 내용 확인
git add index.html
git commit -m "update: change heading text"
git push
```
**배우는 것:** 기본 사이클 `수정 → add → commit → push`, status/diff 읽는 법

---

### Step 5. Branch 만들기 & Merge
```bash
git checkout -b feature/new-style   # 브랜치 생성 + 이동
# style.css 수정
git add .
git commit -m "add: new button style"
git push origin feature/new-style

# GitHub에서 Pull Request 생성 → Merge
# 또는 로컬에서:
git checkout main
git merge feature/new-style
git push
```
**배우는 것:** branch, checkout, merge, Pull Request 개념

---

### Step 6. .gitignore 설정
```bash
# .gitignore 파일 생성
echo "*.log" >> .gitignore
echo ".DS_Store" >> .gitignore
echo "node_modules/" >> .gitignore
git add .gitignore
git commit -m "add: .gitignore"
git push
```
**배우는 것:** 추적하지 않을 파일 지정, gitignore 패턴

---

## Phase 2 — Vercel 연동 & 자동 배포

### Step 7. Vercel 계정 생성 ← **지금 해야 할 것**
1. https://vercel.com 접속
2. **"Continue with GitHub"** 클릭 → awbs33 계정으로 연결
3. 이메일 인증 완료

---

### Step 8. GitHub 저장소 → Vercel 배포
1. Vercel 대시보드 → **"Add New Project"**
2. GitHub에서 `vercel-github-study` 저장소 선택
3. Framework: **Other** (정적 HTML이므로)
4. Root Directory: `/` (기본값)
5. **Deploy** 클릭
→ 몇 초 후 `https://vercel-github-study-xxxx.vercel.app` URL 생성됨

**배우는 것:** Vercel 프로젝트 연결, 첫 배포

---

### Step 9. Push → 자동 배포 체험
```bash
# index.html 내용 수정 후
git add .
git commit -m "update: change page title"
git push
```
→ Vercel 대시보드에서 자동으로 재배포되는 것 확인
→ URL을 새로고침하면 변경사항 반영됨

**배우는 것:** CI/CD 개념, push = 자동 배포

---

### Step 10. Preview Deployment (브랜치 배포)
```bash
git checkout -b feature/about-page
# about.html 생성 후
git add .
git commit -m "add: about page"
git push origin feature/about-page
```
→ Vercel이 자동으로 **별도 Preview URL** 생성
→ main이 아닌 브랜치는 preview로만 배포됨 (production 영향 없음)

**배우는 것:** Production vs Preview 배포, 안전한 테스트 환경

---

### Step 11. 환경변수 설정 (선택)
1. Vercel 대시보드 → Project Settings → **Environment Variables**
2. Key: `SITE_TITLE`, Value: `My Study App`
3. Redeploy 후 적용 확인

**배우는 것:** 비밀값/설정값을 코드 밖에서 관리하는 법

---

## 빠른 참조: 자주 쓰는 Git 명령어

| 명령어 | 설명 |
|--------|------|
| `git status` | 현재 변경 상태 확인 |
| `git diff` | 변경 내용 상세 확인 |
| `git add <파일>` | 스테이징 |
| `git add .` | 모든 변경 스테이징 |
| `git commit -m "msg"` | 커밋 |
| `git push` | 원격에 업로드 |
| `git pull` | 원격에서 가져오기 |
| `git log --oneline` | 커밋 히스토리 확인 |
| `git checkout -b <이름>` | 브랜치 생성 + 이동 |
| `git branch` | 브랜치 목록 확인 |

---

## 현재 진행 상황

- [x] 프로젝트 디렉토리 생성
- [x] 학습 가이드 작성
- [ ] Step 1: git init
- [ ] Step 2: 첫 커밋
- [ ] Step 3: GitHub push
- [ ] Step 4: 수정 → push 사이클
- [ ] Step 5: Branch & Merge
- [ ] Step 6: .gitignore
- [ ] Step 7: Vercel 계정 생성
- [ ] Step 8: Vercel 연동 배포
- [ ] Step 9: 자동 배포 체험
- [ ] Step 10: Preview Deployment
