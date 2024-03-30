import clsx from 'clsx';
// Interfaces
import type { Size } from '@/interfaces';


interface Props {
  selectedSize: Size;
  availableSizes: Size[];
}

export const SizeSelector = ({ selectedSize, availableSizes }: Props) => {
  return (
    <div className='my-3'>
      <h3 className='font-bold mb-4'>
        Tallas Disponibles
      </h3>

      <div className='flex'>
        {
          availableSizes.map( size => (
            <button
              key={ size }
              className={
                clsx(
                  `mx-2 hover:underline text-lg`,
                  {
                    'underline': size === selectedSize
                  }
                )
              }
            >
              { size }
            </button>
          ))
        }
      </div>
    </div>
  );
}
