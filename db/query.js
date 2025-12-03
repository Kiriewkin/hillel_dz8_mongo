import { getDb } from "./db.js";

const dbName = process.env.DB_NAME || 'site'
const PAGES_COLLECTION = 'pages'
const CAT_COLLECTION = 'cat'
const GOODS_COLLECTION = 'goods'

//query for pages
export const getPageByUrl = async (url) => {
    const db = getDb(dbName)
    const collection = db.collection(PAGES_COLLECTION)

    const page = await collection.findOne({ url })
    return page
}

//queries for products
export const getGoods = async () => {
    const db = getDb(dbName)
    const collection = db.collection(GOODS_COLLECTION)

    const document = await collection.findOne();
    return document;
}

export const getThreeGoods = async () => {
    const db = getDb(dbName);
    const collection = db.collection(GOODS_COLLECTION);

    const doc = await collection.findOne();

    if (!doc) return [];

    const allGoods = [
        ...doc.phones,
        ...doc.laptops
    ];

    return allGoods.sort(() => Math.random() - 0.5).slice(0, 3);
}

//query for category
export const getCategory = async () => {
    const db = getDb(dbName)
    const collection = db.collection(CAT_COLLECTION)

    const cursor = await collection.find()
    const data = await cursor.toArray();

    return data;
}