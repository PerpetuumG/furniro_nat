import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = ({ title }: { title: string }) => {
  return (
    <section className={'bg-shop-hero h-[316px] flex flex-col justify-center items-center'}>
      <p className={'font-medium text-[48px]'}>{title}</p>

      <div className={'flex gap-2'}>
        <p className={'font-bold'}>Home</p>
        <ChevronRight />
        <p>{title}</p>
      </div>
    </section>
  );
};

export default Hero;
