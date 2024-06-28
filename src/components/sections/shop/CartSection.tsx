'use client';

import { Separator } from '@/components/ui/separator';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import MainButton from '@/components/common/MainButton';
import { useAtom } from 'jotai';
import { cartAtom } from '@/storage/jotai';

const CartSection = ({ toggleShowCart }: { toggleShowCart: () => void }) => {
  const [products, setProducts] = useAtom(cartAtom);
  const [subTotal, setSubTotal] = useState(0);
  const router = useRouter();

  const removeProductFromCart = (productId: number | string) => {
    const filterProducts = products.filter(product => product.id !== productId);
    setProducts(filterProducts);
  };

  const computeSubtitle = () => {
    let total = 0;
    for (const product of products) {
      total += product.quantity * product.unitPrice;
    }
    setSubTotal(total);
  };

  useEffect(() => {
    computeSubtitle();
  }, [products]);

  return (
    <div className={'w-[417px] h-[746px] bg-white p-[30px] flex justify-between flex-col'}>
      <div>
        <div className={'flex justify-between items-center mb-9'}>
          <p className={'font-semibold text-[24px]'}>Shopping Cart</p>
          <div className={'hover:cursor-pointer'} onClick={toggleShowCart}>
            <img src={'/images/cart_alt_icon.png'} alt='cart_icon' />
          </div>
        </div>

        <Separator />

        <div className={'mt-6 flex flex-col gap-5'}>
          {products.map(product => (
            <div key={product.id} className={'flex items-center gap-[32px] w-full justify-between'}>
              <div>
                <img
                  src={product.productImageUrl}
                  alt={product.productName}
                  className={'w-[108px] h-[105px] rounded-[1rem] object-cover'}
                />
              </div>

              <div>
                <p className={'text-normal'}>{product.productName}</p>

                <p>
                  {product.quantity} X{' '}
                  <span className={'text-primary font-medium text-sm'}>
                    {' '}
                    Rs. {product.unitPrice}
                  </span>
                </p>
              </div>

              <div className={'cursor-pointer'} onClick={() => removeProductFromCart(product.id)}>
                <img src={'/images/delete_icon.png'} alt='delete' />
              </div>
            </div>
          ))}

          {products.length === 0 && (
            <div className={'flex justify-center mt-8 text-gray-400'}>No product is cart</div>
          )}
        </div>
      </div>

      <div>
        <div className={'flex justify-between mb-[23px]'}>
          <p>Subtotal: </p>
          <p className={'text-primary text-normal font-semibold'}>Rs. {subTotal}</p>
        </div>

        {subTotal ? (
          <div>
            <Separator />
            <div className={'mt-8 flex justify-center'}>
              <MainButton
                text={'Checkout'}
                classes={
                  'bg-white hover:bg-white text-black  border border-black rounded-[50px] h-[40px] w-[150px]'
                }
                action={() => router.push('/checkout')}
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default CartSection;
