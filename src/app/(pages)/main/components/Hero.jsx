'use client';
import React, { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from '@/components/ui/card';

import Image from 'next/image';
import CounterBox from './CounterBox';
import { getProducts } from '../actions/getProducts';

export default function Hero({ setRefresh }) {
    const addToBucket = (item = {}, counter) => {
        const otherOrders =
            JSON.parse(localStorage.getItem('currentOrder')) || [];

        localStorage.setItem(
            'currentOrder',
            JSON.stringify([...otherOrders, { ...item , price : `${item.price}`, quantity: counter }])
        );

        setRefresh((prev) => !prev);
    };

    // const fake data

    const [productsData, setProductData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            
            const data = await getProducts();

            console.log('====================================');
            console.log(data);
            console.log('====================================');
            setProductData(data);
        };
        fetchData();
    }, []);

    return (
        <div className='p-6'>
            <h1 className='text-xl font-bold mb-5'>pizza</h1>
            <div className='grid grid-cols-3 lg:grid-cols-4 gap-4'>
                {productsData.map((el, index) => (
                    <Card
                        className='p-2 bg-[#FFD099]'
                        key={index}
                    >
                        <CardHeader className='h-[150px] relative rounded-md overflow-hidden'>
                            <Image
                                src={el.imageUrl}
                                fill
                                alt='image'
                                cover
                            />
                        </CardHeader>
                        <CardContent className='w-full p-0 space-y-2 py-2'>
                            <p className='font-bold'>{el.name}</p>
                            <p className='text-gray-500'>{el.price}.da</p>
                        </CardContent>
                        <CardFooter className='flex rounded-md p-0 gap-2 border bg-white'>
                            <CounterBox
                                addToBucket={addToBucket}
                                product={{
                                    name: el.name,
                                    price: el.price,
                                    id: el.id,
                                }}
                            />
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
