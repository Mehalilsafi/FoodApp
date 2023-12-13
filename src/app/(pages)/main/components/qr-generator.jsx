import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import { Button } from '@/components/ui/button';
const QrGenerator = ({ data, setRefresh }) => {
    const [tableCounter, setTableCounter] = useState(0);
    const currentOrders = JSON.parse(localStorage.getItem('tablesOrder'));

    const deleteTableFromReceived = (tableName) => {
        localStorage.setItem(
            'tablesOrder',
            JSON.stringify(
                currentOrders.filter((el) => Object.keys(el)[0] != tableName)
            )
        );

        setRefresh((prev) => !prev);
    };
    return (
        <div>
            {Object.keys(data[tableCounter] ?? []).length ? (
                <>
                    <QRCode
                        size={150}
                        style={{
                            height: 'auto',
                            maxWidth: '100%',
                            width: '100%',
                        }}
                        value={
                            JSON.stringify(currentOrders[tableCounter]) + ';'
                        }
                        viewBox={`0 0 150 150`}
                    />

                    <Button
                        onClick={() => {
                            deleteTableFromReceived(data[tableCounter]);

                            return tableCounter != data.length - 1
                                ? setTableCounter((prev) => prev + 1)
                                : null;
                        }}
                        className='w-full mt-5'
                    >
                        Done
                    </Button>
                </>
            ) : (
                <p className='text-center text-3xl'>Orders Complete</p>
            )}
        </div>
    );
};

export default QrGenerator;
