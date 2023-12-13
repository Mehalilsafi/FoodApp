'use server';
import { client } from '@/utils/db.connection';

export const createUser = async (data) => {
    try {
        await client.connect();
        const database = client.db('foodapp-db');
        const collection = database.collection('users');
        await collection.insertOne({ ...data });
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
};
