import Hero from '@/components/common/Hero';
import CheckoutDetailSection from '@/components/sections/checkout/CheckoutDetailSection';
import ShopBannerSection from '@/components/sections/shop/ShopBannerSection';
import {CheckoutBillingForm} from "@/components/form/CheckoutBillingForm";

const CheckoutPage = () => {
  return (
    <div>
      <Hero title={'Checkout'} />

      <div className={'mx-4 md:mx-[130px] flex gap-8 flex-col md:flex-row mt-[98px]'}>
        <CheckoutBillingForm />
        <CheckoutDetailSection />
      </div>

      <ShopBannerSection />
    </div>
  );
};

export default CheckoutPage;
