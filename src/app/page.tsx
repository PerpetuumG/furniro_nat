import HeroSection from '@/components/sections/HeroSection';
import BrowseTheRangeSection from '@/components/sections/BrowseTheRangeSection';
import OurProductSection from '@/components/sections/OurProductSection';
import RoomSection from '@/components/sections/RoomSection';
import ShareSetupSection from '@/components/sections/ShareSetupSection';

export default function HomePage() {
  return (
    <main className={'bg-white'}>
      <HeroSection />

      <div className={'flex flex-col gap-[56px] mx-4 md:mx-[130px]'}>
        <BrowseTheRangeSection />
        <OurProductSection />
      </div>

      <div className={'mt-14'}>
        <RoomSection />
        <ShareSetupSection />
      </div>
    </main>
  );
}
