// Next.js
import NextLink from 'next/link';
// Config
import { titleFont } from '@/config';

export const Footer = () => {
  return (
    <div className='flex w-full justify-center text-xs mb-10'>
      <NextLink href='/'>
        <span className={ `${ titleFont.className } antialiased font-bold` }>Teslo </span>
        <span>| Shop </span>
        <span>© { new Date().getFullYear() }</span>
      </NextLink>
    </div>
  );
}
