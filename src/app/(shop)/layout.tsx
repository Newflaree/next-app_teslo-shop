// Components
import {
  Sidebar,
  TopMenu
} from '@/components';

export default function ShopLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen'>
      <TopMenu />
      <Sidebar />

      <div className='px-5'>
        { children }
      </div>
    </div>
  );
}
