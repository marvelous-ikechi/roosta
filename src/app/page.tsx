import Hero from '@/components/Hero'; 
import CategoryButton from '@/components/CategoryButton'; 
import ActionBar from '@/components/ActionBar'; 
import HeroImagePlaceholder from '@/components/HeroImagePlaceholder';
import MainContentWrapper from '@/components/MainContentWrapper'; // Import the new component

export default function Home() {
  return (
    <main className="relative min-h-screen"> 
      
      {/* 1. Header/Utility Elements */}
      <CategoryButton />
      <ActionBar />
      
      {/* 2. Hero Image */}
      <HeroImagePlaceholder />
      
      {/* 3. Main Page Content (The rest of the sections) */}
      <MainContentWrapper /> 
      
      {/* The original <Hero /> component is not explicitly visible in this fixed layout,
          but if its content is required, it must be placed inside MainContentWrapper or
          positioned explicitly. We'll leave it commented out for now.
      */}
      {/* <Hero /> */}
      
    </main>
  );
}