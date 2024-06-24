import { PRODUCTS } from '@/lib/constants';
import ProductCard from '@/components/cards/ProductCard';

const ShopProductSection = () => {
  return (
    <section className={''}>
      <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-[46px]'}>
        {PRODUCTS.map((item, index) => (
          <ProductCard {...item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default ShopProductSection;
