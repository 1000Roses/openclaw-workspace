import type { ReactNode } from 'react';
import { Header } from './Header';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <main className="main">{children}</main>
      <footer className="footer">
        <p>🍎 2026 FruitShop - Fresh fruits, delivered daily!</p>
      </footer>
    </div>
  );
}
