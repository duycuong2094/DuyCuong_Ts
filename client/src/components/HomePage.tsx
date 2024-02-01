import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../redux/reducer/reducer';
import { fetchAnwser } from '../redux/reducer/reducerAnwser';
import { fetchQuestion } from '../redux/reducer/reducerQuestion';
import { detaliQuestion } from '../redux/reducer/detailQuestion';
import { useNavigate } from 'react-router-dom';
export interface Res{
    categoryId:number,
    level:number

}
function HomePage() {
    const store: any = useSelector((store) => store);
    const dispatch = useDispatch();
    const navigate=useNavigate()

    // State để lưu giá trị được chọn từ select danh mục
    const [res,setRes]=useState<Res>({
        categoryId:1,
        level:1
    })
    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchAnwser());
        dispatch(fetchQuestion());
    }, [dispatch]);

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRes({...res,[e.target.name]:e.target.value})
    };

    const handleOtherSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRes({...res,[e.target.name]:e.target.value})
    };
    const clickHome=()=>{
        dispatch(detaliQuestion(res))
        navigate("/details")
    }

    return (
        <div className='homePage'>
            <h1>Home Page</h1>
            
            {/* Select cho danh mục */}
            <select name="categoryId" id='category' value={res.categoryId} onChange={handleCategoryChange}>
                {store &&
                    store.categorySlice &&
                    store.categorySlice.entiensCategory.map((item: any) => (
                        <option key={item.idCategory} value={item.idCategory}>
                            {item.nameCategory}
                        </option>
                    ))}
            </select>

            {/* Select khác */}
            <select name="level"  value={res.level} onChange={handleOtherSelectChange}> 
                <option value="1">Dễ </option>
                <option value="2">Trung Bình</option>
                <option value="3">Khó</option>
            </select>
            <br />
            <button onClick={clickHome}>Bắt Đầu</button>
        </div>
    );
}

export default HomePage;
