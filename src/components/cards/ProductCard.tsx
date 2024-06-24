'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import MainButton from '@/components/common/MainButton';
import { useRouter } from 'next/navigation';

interface IProps {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  otherPrice: string;
  type: string;
  typeValue: string;
}

const ProductCard = ({
  id,
  imageUrl,
  title,
  description,
  price,
  otherPrice,
  type,
  typeValue,
}: IProps) => {
  const router = useRouter();
  const icons = [
    {
      iconUrl: '/images/share_icon.png',
      title: 'Share',
      action: () => {},
    },
    {
      iconUrl: '/images/compare_icon.png',
      title: 'View',

      action: () => {
        router.push(`/shop/product/${id}`);
      },
    },
    {
      iconUrl: '/images/like_icon.png',
      title: 'Like',
      action: () => {},
    },
  ];

  const cardVariant = {
    initial: { opacity: 0, x: 120, scale: 0.5 },
    animate: { opacity: 1, x: 0, scale: 1 },
  };

  return (
    <motion.div
      initial={'initial'}
      animate={'initial'}
      whileHover={'animate'}
      viewport={{ once: false }}
      transition={{ duration: 0.4 }}
      className={'relative border border-black'}
    >
      <div className={'relative'}>
        <img src={imageUrl} alt={title} className={'h-[301px] w-full object-contain'} />

        {typeValue && (
          <div
            className={cn(
              'absolute top-[24px] right-[24px] w-[48px] h-[48px] rounded-full text-normal font-medium px-2 text-white flex justify-center items-center',
              type === 'DISCOUNTED' ? 'bg-error' : type === 'NEW' ? 'bg-success' : '',
            )}
          >
            {typeValue}
          </div>
        )}
      </div>

      <div className={'bg-[#f4f5f7] p-4'}>
        <p className={'text-customBlack text-24 font-semibold'}>{title}</p>
        <p className={'text-customGray font-medium text-normal py-[8px]'}>{description}</p>

        <div className={'flex justify-between items-center'}>
          <p className={'text-customBlack text-20 font-semibold'}>{price}</p>
          {otherPrice && <p className={'line-through text-customGray'}>{otherPrice}</p>}
        </div>
      </div>

      {/* Overlay start */}
      <motion.div
        className={cn('absolute p-4 left-0 right-0 top-0 bottom-0 bg-[#3a3a3a]/80')}
        variants={cardVariant}
      >
        <div className={'pt-[30%]'}>
          <div className={'flex justify-center'}>
            <MainButton
              text={'Add to cart'}
              classes={'bg-white text-primary font-bold hover:bg-white'}
            />
          </div>

          <div className={'flex justify-between mt-6'}>
            {icons.map((icon, index) => (
              <div
                key={index}
                className={'flex gap-1 items-center hover:cursor-pointer'}
                onClick={icon.action}
              >
                <div>
                  <img src={icon.iconUrl} alt={icon.title} />
                </div>
                <p className={'text-white'}>{icon.title}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
