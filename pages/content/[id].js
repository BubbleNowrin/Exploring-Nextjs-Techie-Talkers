import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Details = () => {

    const router = useRouter();
    // console.log();
    const id = router.query.id;
    const [loadingData, setLoadingData] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        setLoadingData(true);
        fetch(`http://localhost:3000/api/content/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoadingData(false);
            })
    }, [id])

    return (
        <div>
            <div class="bg-white py-6 sm:py-8 lg:py-12">
                <div class="max-w-screen-md px-4 md:px-8 mx-auto">
                    <h1 class="text-gray-800 sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6">{data?.product?.title}</h1>

                    <p className='font-semibold italic mb-6'>{data?.product?.writer}</p>

                    <div class="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8">
                        <img src={data?.product?.img} loading="lazy" alt="Photo by Minh Pham" class="w-full h-full object-cover object-center" />
                    </div>

                    <h2 class="text-gray-800 text-xl sm:text-2xl font-semibold mb-2 md:mb-4">Details</h2>

                    <p class="text-gray-500 sm:text-lg">{data?.product?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;