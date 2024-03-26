'use client';
// React
import { useState } from 'react';
// Next.js
import Image from 'next/image';
import NextLink from 'next/link';
import { Product } from '@/interfaces';

interface Props {
  product: Product
}

export const ProductGridItem = ({ product }: Props) => {
  const [ displayImage, setDisplayImage ] = useState( product.images[0] );

  return (
    <div className='rounded-md overflow-hidden fade-in'>
      <NextLink href={ `/product/${ product.slug }` }>
        <Image
          src={ `/products/${ displayImage }` }
          alt={ product.title }
          className='w-full object-cover rounded'
          width={ 500 }
          height={ 500 }
          onMouseEnter={ () => setDisplayImage( product.images[1] ) }
          onMouseLeave={ () => setDisplayImage( product.images[0] ) }
        />
      </NextLink>
      
      <div className='p-4 flex flex-col'>
        <NextLink
          href={ `/product/${ product.slug }` }
          className='hover:text-blue-600 transition-all'
        >
          { product.title }
        </NextLink>

        <span className='font-bold'>${ product.price }</span>
      </div>
    </div>
  );
}
