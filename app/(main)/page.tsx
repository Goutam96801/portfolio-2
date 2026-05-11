'use client';

import { useClickSound } from '@/hooks/useClickSound';
import HeroSection from '../../components/home/hero-section';
import { BestProjects } from '../../components/home/best-projects';
import { MySkills } from '@/components/home/skills';
import { AboutMe } from '@/components/home/about';

export default function Home() {
  const playSound = useClickSound();

  return (
    <main className="min-h-screen mx-auto px-4 md:px-6 lg:px-8 relative ">
      <HeroSection />
      <BestProjects />
      <MySkills />
      <AboutMe/>
    </main>
  );
}
