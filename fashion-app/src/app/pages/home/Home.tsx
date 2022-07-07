import {
  Banner,
  CollectionList,
  SectionProduct,
  SectionShopify,
  Subscribe,
} from './partials';
import collections from '../../shared/constant/collection';
import { useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from './home.actions';

const Home = () => {
  const {data, isLoading} = useSelector((state: any) => state.home)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getPosts());
  }, [])

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return isLoading ? (
    <div className="spinner-container">
      <p className="spinner-text">Loading...</p>
      <div className="loading-spinner"></div>
    </div>
  ) : (
    <main>
      <Banner />
      <CollectionList collections={collections} />
      <SectionProduct
        products = {data}
        title="Selected just for you"
        hasButton
      />
      <SectionShopify />
      <SectionProduct 
        products = {data} 
        title="Products in today" />
      <Subscribe />
    </main>
  );
};

export default Home;
