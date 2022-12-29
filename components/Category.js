import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Category = ({ category }) => {
    return (

        <div className="card bg-base-100 shadow-xl image-full mb-20">
            <figure><Image src={category?.img} width={200} height={100} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{category?.title}</h2>
                <p>{category?.description.length > 100 ? category?.description.slice(0, 100) : category?.description}</p>
                <div className="card-actions justify-end">
                    <Link href={`/content/${category.id}`} className="btn btn-primary" >Show details</Link>
                </div>
            </div>
        </div>
    );
};

export default Category;