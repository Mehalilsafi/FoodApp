import React, { useEffect, useState } from 'react';
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
import {
    faBoxesPacking,
    faPizzaSlice,
} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import TableImage from '@/assets/images/table.png';
import DropDown from './DropDown';
import { getTables } from '../actions/getTable';
import { generate } from '@/seeds/createFakeData';

// =======
export default function nav({ setRefresh }) {
    const [clicked, setClicked] = useState(false);

    const addToTable = (tabelName) => {
        const currentOrder = localStorage.getItem('currentOrder');

        const tableData = {
            [tabelName]: currentOrder,
        };

        const otherTableOrders =
            JSON.parse(localStorage.getItem('tablesOrder')) || [];

        localStorage.setItem(
            'tablesOrder',
            JSON.stringify([...otherTableOrders, tableData])
        );

        localStorage.removeItem('currentOrder');

        setClicked((prev) => !prev);

        setRefresh((prev) => !prev);
    };

    const orderedTable = JSON.parse(localStorage.getItem('tablesOrder')) || [];

    let alreadyOrdered = orderedTable.map((el) => Object.keys(el)[0]);

    const isCurrentOrders = localStorage.getItem('currentOrder') || false;

    // orderedTable.map((el) => {
    //     alreadyOrdered.push(Object.keys(el)[0]);
    // });

    const [tables, setTables] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getTables();
            setTables(data);
        };
        fetchData();
    }, []);

    return (
        <div className='flex w-full gap-x-11 m-5 justify-between items-center pr-12'>
            <div className='flex gap-2 items-center text-2xl'>
                <FontAwesomeIcon icon={faPizzaSlice} />
                <h1 className=' font-bold '> Pizza Swift </h1>
           
            </div>

            <div className='space-x-5'>
                <DropDown />
                <Dialog>
                    <DialogTrigger className='bg-[#FFD099] rounded-md py-2 px-5 font-medium space-x-2'>
                        <FontAwesomeIcon icon={faBoxesPacking} />
                        <span>To Tables</span>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className=' flex justify-center w-full m-3'>
                                {' '}
                                Available Tables
                            </DialogTitle>
                            <DialogDescription className='grid grid-cols-3 gap-2 '>
                                {tables.map((e, index) => {
                                    return (
                                        !alreadyOrdered.includes(
                                            `${e.tableName}`
                                        ) && (
                                            <div
                                                className=' flex items-center flex-col pb-1 rounded-xl border-[#FFD099] border-2'
                                                key={index}
                                                onClick={() =>
                                                    isCurrentOrders
                                                        ? addToTable(
                                                              e.tableName
                                                          )
                                                        : null
                                                }
                                            >
                                                <Image
                                                    src={TableImage}
                                                    alt='Picture of the author'
                                                    width={100}
                                                    height={100}
                                                />

                                                <p className='text-md font-bold'>
                                                    {e.tableName}
                                                </p>
                                            </div>
                                        )
                                    );
                                })}
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
