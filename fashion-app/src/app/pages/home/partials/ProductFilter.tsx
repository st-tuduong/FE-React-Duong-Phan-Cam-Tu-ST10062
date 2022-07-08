import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

interface IProductFilterProps {
  checked: any,
  setChecked: any
};

const ProductFilter = ({checked, setChecked} :IProductFilterProps) => {
  const categories = useSelector((state: any) => state.categories.dataCategory);
  const [searchParams, setSearchParams] = useSearchParams();
  const handleCheckbox = (e: any) => {
    const valueCheck = e.target.value;
    const newChecked = [...checked];
    const index = newChecked.findIndex((item: any) => item === valueCheck);
    
    if (index === -1) {
      newChecked.push(valueCheck);
    } else {
      newChecked.splice(index, 1);
    }

    const queryParamStr = newChecked.join(',');
    setSearchParams({ category: queryParamStr });
    setChecked(newChecked);
  }
  
  useEffect(() => {
    const categoryValue = searchParams.get('category');
    if (categoryValue) {
      let checkedArray = [] as any[];
      checkedArray = categoryValue.split(',');
      setChecked(checkedArray);
    } else if (categoryValue === '') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    }
  }, [searchParams])

  const checkDefaultCheck = (arr: any, value: any) => {
    return arr.includes(value.toString());
  };

  return (
    <div className="checkbox-category">
      {categories.map((item: any) => {
        return (
          <label className="form-control" key={item.id}>
            <input type="checkbox" value={item.id} onChange={handleCheckbox} checked={checkDefaultCheck(checked, item.id)}/>
            {item.name}
          </label>
        );
      })}
    </div>
  );
};

export default ProductFilter;
