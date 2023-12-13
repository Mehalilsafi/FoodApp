'use server';
import { client } from '@/utils/db.connection';

export const addTable = async (data) => {
    console.log('Hit Again');
    try {
        await client.connect();
        const database = client.db('foodapp-db');
        const collection = database.collection('tables');
        await collection.insertOne({ ...data });
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
};
