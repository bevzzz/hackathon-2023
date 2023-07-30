import pymongo
import json
from pymongo import MongoClient, InsertOne
import os
import requests

if __name__ == "__main__":
    uri = os.getenv("MONGODB_URI")
    if not uri:
        raise Exception("Missing MONGODB_URI")

    print("Connect to ganymede at " + uri)
    client = pymongo.MongoClient(uri)
    db = client.ganymede
    collection = db.products

    print("Downloading prices from https://heisse-preise.io/data/latest-canonical.json")
    products = requests.get("https://heisse-preise.io/data/latest-canonical.json")
    requesting = [InsertOne(obj) for obj in products.json()]

    print("Inserting prices to 'products' collection")
    result = collection.bulk_write(requesting)

    print("Done")
    client.close()
