import React from 'react';
import { InstagramButton } from '../components/InstagramButton';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <InstagramButton />
    </div>
  );
}