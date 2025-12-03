import { getCategory, getThreeGoods } from "../db/query.js";

export const render404 = async (res, message = "Page not found") => {
    const categories = await getCategory();
    const goods = await getThreeGoods();

    return res.status(404).render("404", {
        message,
        categories,
        goods
    });
};