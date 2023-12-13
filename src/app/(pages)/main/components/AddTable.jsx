import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { addTable } from '../actions/addTable';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';

const AddTable = () => {
    const { toast } = useToast();
    const [tableName, setTableName] = useState('');

    const handleSubmit = async () => {
        if (tableName != '') {
            await addTable({ tableName: tableName.replace(' ', '_') });
            toast({
                description: 'Added Succefuly 😃',
            });
            setTableName('');
        } else {
            toast({
                variant: 'destructive',
                title: 'Uh oh! Something went wrong.',
                description: 'Bro Fill All The Fields 😒',
            });
        }
    };

    return (
        <Dialog>
            <DialogTrigger className='bg-[#FFD099] rounded-md py-2 px-5 font-medium space-x-2'>
                <span>Add Table</span>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className=' flex justify-center w-full m-3'>
                        {' '}
                        New Table
                    </DialogTitle>
                    <DialogDescription className='flex flex-col space-y-5'>
                        <p className='font-bold'>Table name (number)</p>
                        <input
                            type='text'
                            className='w-full border p-2 rounded-md'
                            placeholder='Table 1'
                            value={tableName}
                            onChange={(e) => setTableName(e.target.value)}
                        />

                        <Button
                            className='w-full'
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default AddTable;
