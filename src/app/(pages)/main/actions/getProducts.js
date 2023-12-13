'use server';
import { client } from '@/utils/db.connection';

export async function getProducts() {
    console.log('====================================');
    console.log('Hit Again');
    console.log('====================================');
    try {
        await client.connect();
        const database = client.db('foodapp-db'); // Choose a name for your database

        const collection = database.collection('products'); // Choose a name for your collection
        const data = await collection.find().toArray();
        const filteredData = data.map((e) => ({
            name: e.name,
            price: e.price,
            imageUrl: e.imageUrl,
        }));

        console.log('====================================');
        console.log(filteredData);
        console.log('====================================');
        return filteredData;
    } catch (error) {
        console.log(error);
    } finally {
        await client.close();
    }
}
