import { MongoClient } from 'mongodb';

const MONGODB_URI = 'mongodb+srv://pizzaswift:pizzaswiftpizzaswift@cluster0.6ic5x9t.mongodb.net/?retryWrites=true&w=majority';

export const client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
