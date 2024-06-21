import ShopHeroSection from '@/components/sections/shop/ShopHeroSection';
import ShopFilterSection from '@/components/sections/shop/ShopFilterSection';
import ShopProductSection from '@/components/sections/shop/ShopProductSection';
import ShopBannerSection from '@/components/sections/shop/ShopBannerSection';

const ShopPage = () => {
  return (
    <div>
      <ShopHeroSection />
      <ShopFilterSection />
      <ShopProductSection />
      <ShopBannerSection />
    </div>
  );
};

export default ShopPage;
