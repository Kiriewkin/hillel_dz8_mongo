import { Router } from "express";
import { getCategory, getGoods } from "../db/query.js";
import { render404 } from "../helpers/render404.js";

export const categoryRouter = Router()

//render all categories from database
categoryRouter.get('/', async (req, res) => {
    const data = await getCategory()
    res.render('category', { data })
})

//render items of selected category
categoryRouter.get("/:category", async (req, res) => {
    const goods = await getGoods();
    const categoryName = req.params.category;

    if (!goods[categoryName]) {
        return await render404(res, "Category not found");
    }

    const items = goods[categoryName];

    res.render("category_single", {
        title: categoryName.charAt(0).toUpperCase() + categoryName.slice(1),
        items
    });
});

//render single product inside selected category
categoryRouter.get("/:category/:productUrl", async (req, res) => {
    const goods = await getGoods();
    const { category, productUrl } = req.params;

    if (!goods[category]) {
        return await render404(res, "Category not found");
    }

    const product = goods[category].find((p) => p.url === productUrl);

    if (!product) {
        return await render404(res, "Product not found");
    }

    res.render("product_single", {
        product,
        category
    });
});