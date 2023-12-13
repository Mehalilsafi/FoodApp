'use server';
import { client } from '@/utils/db.connection';
export const addProduct = async (data) => {
    try {
        await client.connect();
        const database = client.db('foodapp-db');
        const collection = database.collection('products');
        await collection.insertOne({ ...data });
    
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
};
