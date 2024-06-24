import ShopHeroSection from '@/components/sections/shop/ShopHeroSection';
import ShopFilterSection from '@/components/sections/shop/ShopFilterSection';
import ShopProductSection from '@/components/sections/shop/ShopProductSection';
import ShopPaginationSection from '@/components/sections/shop/ShopPaginationSection';
import ShopBannerSection from '@/components/sections/shop/ShopBannerSection';

const ShopPage = () => {
  return (
    <div>
      <ShopHeroSection />
      <ShopFilterSection />
      <ShopProductSection />
      <div className={'my-[70px]'}>
        <ShopPaginationSection />
      </div>
      <ShopBannerSection />
    </div>
  );
};

export default ShopPage;
