'use server';
import { client } from '@/utils/db.connection';
import { cookies } from 'next/headers';

export async function getUser({ username, password }) {
    console.log(username, password);

    try {
        await client.connect();
        const database = client.db('foodapp-db'); // Choose a name for your database

        const collection = database.collection('users'); // Choose a name for your collection
        if (collection) {
            cookies().set('isLogedin', true);
        }
        return await collection.findOne({ username, password });
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    } finally {
        await client.close();
    }
}
