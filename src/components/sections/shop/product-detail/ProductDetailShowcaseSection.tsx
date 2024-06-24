'use client';

import ReactStars from 'react-stars';
import { Separator } from '@/components/ui/separator';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/pagination';
import MainButton from '@/components/common/MainButton';
import {useEffect, useState} from 'react';
import { MinusIcon, PlusIcon } from 'lucide-react';

const ProductDetailShowcaseSection = ({ productId }: { productId: string }) => {
  const MAX_QUANTITY = 5;

  const mini = [
    '/images/sofa_mini.png',
    '/images/sofa_mini.png',
    '/images/sofa_mini.png',
    '/images/sofa_mini.png',
  ];

  const extraDetailsData = [
    {
      item: 'SKU',
      value: 'SS001',
    },
    {
      item: 'Category',
      value: 'Sofas',
    },
    {
      item: 'Tags',
      value: 'Sofa, Chair, Home, Shop',
    },
    {
      item: 'Share',
      value: (
        <div className='flex gap-[23px]'>
          <div>
            <img src='/images/facebook.png' alt='facebook' />
          </div>
          <div>
            <img src='/images/linkedin.png' alt='linkedin' />
          </div>
          <div>
            <img src='/images/twitter.png' alt='twitter' />
          </div>
        </div>
      ),
    },
  ];

  const [quantity, setQuantity] = useState<number>(1);
  const [isMounted, setIsMounted] = useState(false);

  const handleQuantityIncrement = () => {
    if (quantity === MAX_QUANTITY) return;
    setQuantity(quantity + 1);
  };

  const handleQuantityDecrement = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className={'grid grid-cols-1 md:grid-cols-2 gap-8'}>
      {/* Left */}
      <div className={'flex gap-8'}>
        <div className={'hidden md:inline-flex flex-col gap-8'}>
          {mini.map((item, index) => (
            <div
              key={index}
              className={'bg-primary-light h-[80px] rounded-[8px] inline-flex items-center px-2'}
            >
              <img src={item} alt='product mini' />
            </div>
          ))}
        </div>

        <div
          className={
            'flex flex-col bg-primary-light  rounded-[8px] h-[500px] justify-center items-center'
          }
        >
          <img
            src={'/images/sofa.png'}
            alt='product'
            className={'w-[425px] h-[500px] object-contain rounded-[10px]'}
          />
        </div>
      </div>

      {/* Right */}
      <div>
        <p className={'text-[42px]'}>Asgaard sofa</p>
        <p className={'text-customGray text-24 font-medium'}>Rs. 250.000.000</p>

        <div className={'flex items-center gap-[22px]'}>
          {/* don't work stars */}
          {/*<ReactStars count={5} color1='#FFC700' size={24} color2={'#FFC700'} />*/}
          <div>stars</div>
          <Separator orientation={'vertical'} className={'h-[40px] border border-[#9f9f9f]'} />
          <p>5 Customer Review</p>
        </div>

        <p className={'mt-4'}>
          Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
          stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound.
        </p>

        <div>
          <p className={'text-customGray text-[14px] mb-[12px] mt-[22px]'}>Size</p>
          <Pagination className='flex !justify-start'>
            <PaginationContent className='flex gap-[38px]'>
              <PaginationItem>
                <PaginationLink href='' isActive>
                  L
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href=''>XL</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href=''>XS</PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>

        <div className={'flex items-center gap-[18px] mt-32'}>
          <div
            className={
              'inline-flex h-16 px-4 items-center gap-[35px] border border-customGray2 rounded-[15px]'
            }
          >
            <MinusIcon className={'cursor-pointer'} onClick={handleQuantityDecrement} />
            <p className={'font-semibold text-normal select-none'}>{quantity}</p>
            <PlusIcon className={'cursor-pointer'} onClick={handleQuantityIncrement} />
          </div>
          <div>
            <MainButton
              text={'Add to Cart'}
              classes={
                'h-16 bg-white text-black border border-black rounded-[15px] hover:cursor-pointer hover:bg-white'
              }
            />
          </div>
        </div>

        <div className='my-[41px]'>
          <Separator className='border border-[#D9D9D9]' />
        </div>

        <div className={'flex flex-col gap-4'}>
          {extraDetailsData.map((item, index) => (
            <div key={index} className={'flex gap-4'}>
              <p className={'w-[75px]'}>{item.item}</p>
              <p>:</p>
              <div>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailShowcaseSection;
