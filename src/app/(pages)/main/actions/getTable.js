'use server';
import { client } from '@/utils/db.connection';

export async function getTables() {
    try {
        await client.connect();
        const database = client.db('foodapp-db'); // Choose a name for your database

        const collection = database.collection('tables'); // Choose a name for your collection

        const data = await collection.find({}, { _id: 0 }).toArray();

        const filteredData = data.map((e) => ({ tableName: e.tableName }));

        return filteredData;
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    } finally {
        await client.close();
    }
}
