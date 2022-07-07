import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../shared/components/layout';
import { storeData } from '../shared/helpers/localStorage';

const Page = () => {
  const cartData = useSelector((state: any) => state.cart?.data);

  useEffect(() => {
    storeData('cart', cartData)
  }, [cartData])

  return ( 
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
   );
}

export default Page;