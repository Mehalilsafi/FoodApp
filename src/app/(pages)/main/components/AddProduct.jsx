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
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { addProduct } from '../actions/createProduct';

const AddProduct = () => {
    const { toast } = useToast();
    const [productData, setProductData] = useState({
        name: '',
        price: '',
        imageUrl: '',
    });

    const handleAdd = async () => {
    
        if (
            productData.name != '' &&
            productData.price != '' &&
            productData.imageUrl != ''
        ) {
            await addProduct(productData);
            toast({
                description: 'Added Succefuly 😃',
            });
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
                <span>Add Product</span>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className=' flex justify-center w-full m-3'>
                        {' '}
                        New Product
                    </DialogTitle>
                    <DialogDescription className='flex flex-col space-y-5'>
                        <p>Pizza name</p>
                        <input
                            type='text'
                            className='w-full border p-2 rounded-md'
                            placeholder='Pizza simple'
                            value={productData.name}
                            onChange={(e) =>
                                setProductData((prev) => ({
                                    ...prev,
                                    name: e.target.value,
                                }))
                            }
                        />

                        <p>Pizza Price</p>
                        <input
                            type='number'
                            className='w-full border p-2 rounded-md'
                            placeholder='200 da'
                            value={productData.number}
                            onChange={(e) =>
                                setProductData((prev) => ({
                                    ...prev,
                                    price: e.target.value,
                                }))
                            }
                        />

                        <p>Pizza Image</p>
                        <input
                            type='text'
                            className='w-full border p-2 rounded-md'
                            placeholder='https://exemple.com/imge.png'
                            value={productData.imageUrl}
                            onChange={(e) =>
                                setProductData((prev) => ({
                                    ...prev,
                                    imageUrl: e.target.value,
                                }))
                            }
                        />

                        <Button
                            className='w-full'
                            onClick={handleAdd}
                        >
                            Submit
                        </Button>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default AddProduct;
