import ProductDetailTopSection from '@/components/sections/shop/product-detail/ProductDetailTopSection';
import ProductDetailShowcaseSection from '@/components/sections/shop/product-detail/ProductDetailShowcaseSection';
import ProductDetailExtraInfoSection from '@/components/sections/shop/product-detail/ProductDetailExtraInfoSection';
import ProductDetailRelatedSection from '@/components/sections/shop/product-detail/ProductDetailRelatedSection';

const ProductDetailPage = ({ params }: { params: { product_id: string } }) => {
  return (
    <div>
      <ProductDetailTopSection product_id={params.product_id} />
      <ProductDetailShowcaseSection />
      <ProductDetailExtraInfoSection />
      <ProductDetailRelatedSection />
    </div>
  );
};

export default ProductDetailPage;
