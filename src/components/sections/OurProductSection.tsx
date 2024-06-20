import { PRODUCTS } from '@/lib/constants';
import ProductCard from '@/components/cards/ProductCard';
import MainButton from '@/components/common/MainButton';

const OurProductSection = () => {
  return (
    <section className={'w-full overflow-x-hidden'}>
      <div className={''}>
        <p className={'text-32 font-bold text-center'}>Our Products</p>
      </div>

      <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-[30px]'}>
        {PRODUCTS.map((item, index) => (
          <ProductCard {...item} key={index} />
        ))}
      </div>

      <div className={'flex justify-center items-center mt-8'}>
        <MainButton
          text={'Show More'}
          classes={
            'bg-transparent hover:bg-transparent text-primary font-bold border border-primary h-[48px]'
          }
        />
      </div>
    </section>
  );
};

export default OurProductSection;
