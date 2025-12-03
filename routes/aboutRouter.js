import { Router } from "express";

import { getPageByUrl } from "../db/query.js";
import { render404 } from "../helpers/render404.js";

export const aboutRouter = Router();

aboutRouter.get('/', async (req, res) => {

    const page = await getPageByUrl('about')
    
    if (!page) {
        return await render404(res, "Page 'About' not Found");
    }

    res.render('about', { page })
})