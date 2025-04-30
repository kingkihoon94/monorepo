# Day 1 – app1 프로젝트 시작 및 SSR 구조 이해

## 🏗️ 프로젝트 세팅

- `my-monorepo`라는 이름의 모노레포 구조 생성
- `apps/app1`에 **Next.js 기반 SSR 앱** 생성
  - `npx create-next-app@latest app1`
  - TypeScript / Tailwind / App Router 사용

## ⚙️ 모노레포 설정

- 루트 `package.json`에 `workspaces` 설정

```json
{
  "private": true,
  "workspaces": [
    "apps/*",
    "packages/*"
  ]
}
```

## 🧠 Next.js SSR 동작 이해

- Next.js는 내부적으로 Node.js 서버를 띄워 SSR 처리함

- page.tsx는 서버에서 HTML로 렌더링되어 응답됨

- 클라이언트 컴포넌트('use client')는 hydration 대상이 됨

  - HTML이 먼저 렌더링되지만 JS 이벤트(onClick 등)는 hydration 이후 동작 → 잠깐의 비반응 시간 존재 가능

## 🧩 페이지 라우팅 및 버튼 이동

- src/app/about/page.tsx 페이지 생성

- 홈에서 버튼 클릭 시 /about으로 이동하는 컴포넌트 구현

- useRouter().push('/about') 사용

- onClick은 부모가 제어, 버튼 컴포넌트는 dumb하게 유지

## 📁 주요 구조

my-monorepo/
├── apps/
│   └── app1/
│       ├── src/
│       │   ├── app/
│       │   │   ├── page.tsx
│       │   │   └── about/
│       │   │       └── page.tsx
│       │   └── components/
│       │       └── Button.tsx
├── package.json (workspaces 설정)
└── README.md


