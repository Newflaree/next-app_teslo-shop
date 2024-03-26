// Next.js
import NextLink from 'next/link';
import {
  IoCartOutline,
  IoSearchOutline
} from 'react-icons/io5';
import { titleFont } from '@/config';

export const TopMenu = () => {
  return (
    <nav className='flex px-5 justify-between items-center w-full'>
      <div>
        <NextLink href='/'>
          <span className={ `${ titleFont.className } antialiased font-bold` }>
            Teslo
          </span>
          <span> | Shop</span>
        </NextLink>
      </div>

      <div className='hidden sm:block'>
        <NextLink
          href='/category/men'
          className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
        >
          Hombres
        </NextLink>
        <NextLink
          href='/category/women'
          className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
        >
          Mujeres
        </NextLink>
        <NextLink
          href='/category/kids'
          className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
        >
          Niños
        </NextLink>
      </div>

      <div className='flex items-center'>
        <NextLink
          href='/search'
          className='mx-2'
        >
          <IoSearchOutline
            className='w-5 h-5'
          />
        </NextLink>

        <NextLink
          href='/cart'
          className='mx-2'
        >
          <div className='relative'>
            <span
              className={`
                absolute
                text-xs
                rounded-full
                px-1
                font-bold
                -top-2
                -right-2
                bg-blue-700
                text-white
              `}
            >
              3
            </span>

            <IoCartOutline
              className='w-5 h-5'
            />
          </div>
        </NextLink>

        <button
          className='m-2 p-2 rounded-md transition-all hover:bg-gray-100'
        >
          Menú
        </button>
      </div>
    </nav>
  );
}
