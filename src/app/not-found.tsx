import Link from 'next/link';

import { Button } from '~/components/ui/button';
import { createMetadata } from '~/lib/create-metadata';

export const metadata = createMetadata({
  description: 'The requested content was not found',
  noIndex: true,
  path: '/404',
  title: '404',
});

export default function NotFoundPage() {
  return (
    <main className="grid h-full min-h-screen place-items-center">
      <div className="flex flex-col items-center gap-8 text-center">
        <div>
          <h1 className="text-6xl font-bold">404</h1>
          <p className="text-lg">The requested content was not found</p>
        </div>

        <Button asChild className="w-fit" size="lg">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </main>
  );
}
