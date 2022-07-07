import { useState } from "react";
import { useSelector } from "react-redux";

interface IProductFilterProps {
  checked: any,
  setChecked: any
}

const ProductFilter = ({checked, setChecked} :IProductFilterProps) => {
  const categories = useSelector((state: any) => state.categories.dataCategory);

  const handleCheckbox = (e: any) => {
    const valueCheck = e.target.value;
    const newChecked = [...checked];
    const index = newChecked.findIndex((item: any) => item === valueCheck)
    if(index == -1) {
      newChecked.push(valueCheck);
    }else {
      newChecked.splice(index, 1);
    }
    setChecked(newChecked);
  }

  return (
    <div className="checkbox-category">
      {categories.map((item: any) => {
        return (
          <label className="form-control" key={item.id}>
            <input type="checkbox" value={item.id} onChange={handleCheckbox}/>
            {item.name}
          </label>
        );
      })}
    </div>
  );
};

export default ProductFilter;
