import { getDb } from "../db.js";
import { DB_NAME } from "../../config.js";
const GOODS_COLLECTION = 'goods';

export const getGoods = async () => {
    const db = getDb(DB_NAME);
    return await db.collection(GOODS_COLLECTION).find().toArray();
};

export const getThreeGoods = async () => {
    const db = getDb(DB_NAME);
    return await db.collection(GOODS_COLLECTION).find().limit(3).toArray();
};

export const getItemsByCategory = async (categoryName) => {
    const db = getDb(DB_NAME);
    return await db.collection(GOODS_COLLECTION).find({ category: categoryName }).toArray();
};

export const getProductByUrl = async (productUrl) => {
    const db = getDb(DB_NAME);
    return await db.collection(GOODS_COLLECTION).findOne({ url: productUrl });
};