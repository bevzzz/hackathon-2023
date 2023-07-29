import { Db, MongoClient } from 'mongodb';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const client = MongoClient.connect(process.env.MONGODB_URI!);

interface MongoDb {
    dbClient: MongoClient;
    db: Db;
}

async function connect(): Promise<MongoDb> {
    const dbClient = await client;
    const db = dbClient.db(process.env.MONGODB_DATABASE);
    return { dbClient, db }
}

export default connect;