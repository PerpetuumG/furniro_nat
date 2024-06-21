import { ChevronRight } from 'lucide-react';

const ShopHeroSection = () => {
  return (
    <section className={'bg-shop-hero h-[316px] flex flex-col justify-center items-center'}>
      <p className={'font-medium text-[48px]'}>Shop</p>

      <div className={'flex gap-2'}>
        <p className={'font-bold'}>Home</p>
        <ChevronRight />
        <p>Shop</p>
      </div>
    </section>
  );
};

export default ShopHeroSection;
