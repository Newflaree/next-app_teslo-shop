// Components
import {
  ProductGrid,
  Title
} from '@/components';
// Data
import { initialData } from '@/seed/seed';


const products = initialData.products;

export default function Home() {

  return (
    <div className="">
      <Title
        title='Tienda'
        subtitle='Todos los productos'
        className='mb-2'
      />

      <ProductGrid products={ products } />
    </div>
  );
}
