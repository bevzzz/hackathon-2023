import { Db, MongoClient } from 'mongodb';
import { NextApiRequest } from 'next';
import { createEdgeRouter } from 'next-connect';
import { NextFetchEvent, NextRequest } from 'next/server';

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