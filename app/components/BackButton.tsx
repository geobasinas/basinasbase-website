'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function BackButton() {
  const router = useRouter();

  return (
    <Button 
      onClick={() => router.back()}
      variant="ghost" 
      className="flex items-center gap-2 transition-colors hover:bg-accent"
    >
      Back
    </Button>
  );
}