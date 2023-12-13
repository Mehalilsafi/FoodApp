import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import AddProduct from './AddProduct';
import AddTable from './AddTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Logout from './Logout';

const DropDown = () => {
    return (
        <>
            <DropdownMenu className=''>
                <DropdownMenuTrigger className='bg-gray-900 py-2 px-5 rounded-lg font-bold text-white'>
                    <FontAwesomeIcon icon={faCaretDown} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='p-2 space-y-2 flex flex-col'>
                    <DropdownMenuLabel>Action</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <AddProduct />
                    <AddTable />
                    <DropdownMenuSeparator />
                    <Logout />
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default DropDown;
