import { getDb } from "../db.js";
import { DB_NAME } from "../../config.js";

const CAT_COLLECTION = 'cat';

export const getCategory = async () => {
  const db = getDb(DB_NAME);
  return await db.collection(CAT_COLLECTION).find().toArray();
};