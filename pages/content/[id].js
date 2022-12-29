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
            <h1>details</h1>
        </div>
    );
};

export default Details;