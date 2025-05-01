# DAY2: About Page - SSG 적용 이유 및 동작 방식

## ✅ 목표
- `/about` 페이지를 **정적 사이트 생성(SSG)** 방식으로 만들기
- 정적인 텍스트로 구성된 페이지를 미리 렌더링하여 빠른 응답과 SEO 최적화 달성

---

## ✅ 적용한 방식

- `app/about/page.tsx` 파일을 생성
- 별도의 `fetch()` 호출 없이 순수 JSX 구성
- Next.js의 app 디렉토리 구조에서, **데이터 요청이 없으면 자동으로 SSG 처리됨**

```tsx
// app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">About Page</h1>
      <p>This page is statically generated at build time using SSG.</p>
    </main>
  );
}
```

## ✅ 빌드 로그 확인

```tsx
Route (app)                                 Size  First Load JS
┌ ○ /about                                 137 B         102 kB
○  (Static)  prerendered as static content
```

○: 해당 페이지는 정적으로 사전 렌더링됨 (SSG 성공)
137 B: 생성된 HTML 용량 (정적 텍스트만 존재하므로 작음)

## ❓ 버튼이 있어도 왜 SSG가 될까?
빌드 로그를 확인하던중 기존 app/page.tsx 컴포넌트는 왜 SSG 처리가 되었는지가 궁금해짐

버튼(onClick)은 브라우저에서만 실행되는 클라이언트 로직

Next.js는 빌드 타임에 정적 HTML을 만들 수 있으면 SSG로 처리

즉, use client나 버튼 유무는 SSG 여부에 직접적인 영향을 주지 않음

```tsx
'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const handleGoToAbout = () => router.push('/about');

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Home Page</h1>
      <button onClick={handleGoToAbout}>Go to About</button>
    </main>
  );
}
```

위 컴포넌트는 use client와 버튼이 있음에도 / 경로는 ○ (Static)으로 처리됨

## ✅ 결론

fetch 없이 작성된 app/about/page.tsx는 자동으로 SSG 처리된다

버튼이나 use client가 있어도 정적 HTML 생성에는 영향 없음

SSG를 통해 성능 최적화 및 SEO 향상을 기대할 수 있음

## 추후 실험해볼 것

SSG 처리가 불가한 컴포넌트의 경우 SSR 과 CSR 임을 구분하는 방법에 대해 구체적으로 알아보자.