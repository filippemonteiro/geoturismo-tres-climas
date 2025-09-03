import React from 'react';
import { InstagramButton } from '../components/InstagramButton';
import { Header } from '../components/Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <InstagramButton />
    </div>
  );
}