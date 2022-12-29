import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch('/api/hello')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
                setLoading(false);
            })

    }, [])

    return (
        <div className='grid grid-cols-3 gap-6'>
            {
                loading ? <h1>hello</h1> : categories.map(category => <Category
                    key={category.id}
                    category={category}
                ></Category>)
            }
        </div>
    );
};

export default Categories;