'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { getUser } from './actions/signin';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { useRouter } from 'next/navigation';
const LoginPage = () => {
    const { toast } = useToast();
    const router = useRouter();
    const [userData, setUserData] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = async () => {
        if (userData.username != '' && userData.password.length > 7) {
            const isDefined = await getUser({ ...userData });

            if (isDefined != null) {
                localStorage.setItem('userInfo', JSON.stringify(isDefined));
                localStorage.setItem('isLogedIn', true);
                router.push('/main');
            } else {
                toast({
                    variant: 'destructive',
                    title: 'Uh oh! Something went wrong.',
                    description: 'Bro provide correct data 😒',
                });
            }
        } else {
            toast({
                variant: 'destructive',
                title: 'Uh oh! Something went wrong.',
                description: 'Bro Fill All The Fields 😒',
            });
        }

        setUserData({
            username: '',
            password: '',
        });
    };

    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className='bg-orange-200 p-5 rounded shadow-md w-[500px] space-y-3'>
                <h1 className='text-3xl font-semibold mb-4 flex items-center justify-center h-full'>
                    {' '}
                    Login{' '}
                </h1>

                <div className='space-y-2 w-full'>
                    <p className='font-bold'>Username:</p>
                    <Input
                        type='text'
                        id='username'
                        value={userData.username}
                        onChange={(e) =>
                            setUserData((prev) => ({
                                ...prev,
                                username: e.target.value,
                            }))
                        }
                        placeholder='Elliot Alderson '
                        required
                    />
                </div>
                <div className='text-sm space-y-2 '>
                    <p className='font-bold'>Password:</p>
                    <Input
                        type='password'
                        id='password'
                        value={userData.password}
                        onChange={(e) =>
                            setUserData((prev) => ({
                                ...prev,
                                password: e.target.value,
                            }))
                        }
                        placeholder='********'
                        required
                    />
                </div>
                <div>
                    <Button
                        type='submit'
                        className='bg-orange-500 text-white py-2 px-4 rounded-md w-full mt-4'
                        onClick={handleSubmit}
                    >
                        Login
                    </Button>
                </div>

                <div className='text-center mt-5'>
                    <span>I dont have account yaw : </span>
                    <Link
                        href='/signup'
                        className='text-blue-600 font-bold'
                    >
                        Signup
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
