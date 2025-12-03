import { getCategory } from "../db/query/categories.js";
import { getThreeGoods } from "../db/query/goods.js";

export const render404 = async (res, message = "Page not found") => {
    const categories = await getCategory();
    const goods = await getThreeGoods();

    return res.status(404).render("404", {
        message,
        categories,
        goods
    });
};