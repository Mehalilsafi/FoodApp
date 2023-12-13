'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { createUser } from '../(login)/actions/signup';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import Link from 'next/link';
const LoginPage = () => {
    const { toast } = useToast();
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        repeatPassword: '',
    });

    const handleSubmit = async () => {
        if (
            userData.password === userData.repeatPassword &&
            userData.username != '' &&
            userData.password.length > 7
        ) {
            await createUser({
                password: userData.password,
                username: userData.username,
            });
            toast({
                description: 'Created Succefuly 😃',
            });
        } else {
            toast({
                variant: 'destructive',
                title: 'Uh oh! Something went wrong.',
                description: 'Bro Fill All The Fields 😒',
            });
        }

        setUserData({ username: '', password: '', repeatPassword: '' });
    };

    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className='bg-orange-200 p-5 rounded shadow-md w-[500px] space-y-3'>
                <h1 className='text-3xl font-semibold mb-4 flex items-center justify-center h-full'>
                    {' '}
                    Sign up{' '}
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
                        placeholder='Elliot Alderson'
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
                <div className='text-sm space-y-2 '>
                    <p className='font-bold'>Repeate Password:</p>
                    <Input
                        type='password'
                        id='password'
                        value={userData.repeatPassword}
                        onChange={(e) =>
                            setUserData((prev) => ({
                                ...prev,
                                repeatPassword: e.target.value,
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
                        Signup
                    </Button>
                </div>

                <div className='text-center mt-5'>
                    <span>I Have Account 😏 : </span>
                    <Link
                        href='/'
                        className='text-blue-600 font-bold'
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
