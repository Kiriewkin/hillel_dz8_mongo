import { getDb } from "../db.js"
import { DB_NAME } from "../../config.js"

const PAGES_COLLECTION = 'pages'

export const getPageByUrl = async (url) => {
    const db = getDb(DB_NAME)
    return await db.collection(PAGES_COLLECTION).findOne({ url })
}