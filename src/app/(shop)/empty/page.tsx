// Next.js
import NextLink from 'next/link';
// React Icons
import { IoCartOutline } from 'react-icons/io5';

export default function() {

  return (
    <div className='flex justify-center items-center h-[800px]'>
      <IoCartOutline
        size={ 80 }
        className='mx-5'
      />

      <div
        className='flex flex-col items-center'
      >
        <h1 className='text-xl font-semibold'>
          Tu carrito está vacío
        </h1>

        <NextLink
          href='/'
          className='text-blue-500 mt-2 text-4xl'
        >
          Regresar
        </NextLink>
      </div>
    </div>
  );
}
