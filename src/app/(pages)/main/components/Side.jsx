'use client';

import React from 'react';
import Image from 'next/image';
import TableImage from '@/assets/images/table.png';
import QrGenerator from './qr-generator';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';

export default function Side({ setRefresh, setShowSideBar }) {
    const orderedTable = (
        JSON.parse(localStorage.getItem('tablesOrder')) || []
    ).map((el) => Object.keys(el)[0]);

    return (
        <div className='bg-[#FFD099] h-full p-6 space-y-5 relative'>
            <Button
                className='p-5 bg-[#FFD099] top-[40px] left-[-40px] absolute'
                onClick={() => setShowSideBar((prev) => !prev)}
            >
                <FontAwesomeIcon
                    icon={faQrcode}
                    color='black'
                />
            </Button>

            {/*  */}
            <p className='font-bold text-lg mt-5'>Table Orders : </p>

            {/*  */}

            <div className='grid grid-cols-3 gap-5'>
                {orderedTable.map((el) => (
                    <div
                        className='rounded-md p-1 bg-white border-gray border-2'
                        key={el}
                    >
                        <div className='h-[70px] relative rounded-md overflow-hidden'>
                            <Image
                                src={TableImage}
                                fill
                                alt='image'
                                cover
                            />
                        </div>
                        {/*  */}
                        <p className='text-center'>{el}</p>
                    </div>
                ))}
            </div>

            {/*  */}

            <div className='pr-12 absolute bottom-[10px] w-full'>
                <Dialog>
                    <DialogTrigger className='w-full bg-gray-900 p-2 rounded-md cursor-pointer text-white'>
                        Generate Qr's
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className='text-center mb-5 '>
                                Table Orders
                            </DialogTitle>
                            <DialogDescription>
                                <QrGenerator
                                    data={orderedTable}
                                    setRefresh={setRefresh}
                                />
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
