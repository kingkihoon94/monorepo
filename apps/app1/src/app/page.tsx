'use client';

import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleGoToAbout = () => {
    router.push('/about');
  };

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Home Page</h1>
      <Button onClick={handleGoToAbout}>Go to About</Button>
    </main>
  );
}
