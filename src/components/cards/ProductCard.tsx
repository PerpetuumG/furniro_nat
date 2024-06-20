import { cn } from '@/lib/utils';

interface IProps {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  otherPrice: string;
  type: string;
  typeValue: string;
}

const ProductCard = ({
  imageUrl,
  title,
  description,
  price,
  otherPrice,
  type,
  typeValue,
}: IProps) => {
  return (
    <div className={'border border-black'}>
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
    </div>
  );
};

export default ProductCard;
