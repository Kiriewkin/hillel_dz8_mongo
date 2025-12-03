import { Router } from "express";
import { getItemsByCategory, getProductByUrl } from "../db/query/goods.js";
import { getCategory } from "../db/query/categories.js";
import { render404 } from "../helpers/render404.js";

export const categoryRouter = Router()

//render all categories from database
categoryRouter.get('/', async (req, res) => {
    const data = await getCategory()
    res.render('category', { data })
})

//render items of selected category
categoryRouter.get("/:category", async (req, res) => {
    const categoryName = req.params.category;
    const items = await getItemsByCategory(categoryName);

    if (!items || items.length === 0) {
        return await render404(res, "Category not found");
    }

    res.render("category_single", {
        title: categoryName.charAt(0).toUpperCase() + categoryName.slice(1),
        items
    });
});

//render single product inside selected category
categoryRouter.get("/:category/:productUrl", async (req, res) => {
    const { productUrl } = req.params;
    const product = await getProductByUrl(productUrl);

    if (!product) {
        return await render404(res, "Product not found");
    }

    res.render("product_single", {
        product
    });
});