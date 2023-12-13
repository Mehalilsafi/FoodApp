'use client';

import React, { useState } from 'react';
import Nav from './components/nav';
import Hero from './components/Hero';
import Side from './components/Side';
const page = () => {
    const [refresh, setRefresh] = useState(false);

    const [showSideBar, setShowSideBar] = useState(false);

    return (
        <div className='flex w-full gap-3'>
            <div className='w-full m-5 '>
                <Nav setRefresh={setRefresh} />
                <Hero setRefresh={setRefresh} />
            </div>
            <div
                className={
                    'border-solid h-screen w-[350px] fixed  top-0 ' +
                    `${showSideBar ? 'right-0' : 'right-[-350px]'}`
                }
            >
                <Side
                    setRefresh={setRefresh}
                    setShowSideBar={setShowSideBar}
                />
            </div>
        </div>
    );
};

export default page;
