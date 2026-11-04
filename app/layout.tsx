import type { ReactNode } from 'react';
import './globals.css';
export const metadata = { title: 'Forge Application', description: 'Generated small application' };
export default function Layout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
