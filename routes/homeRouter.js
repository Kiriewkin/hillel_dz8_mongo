import { Router } from 'express';
import { getGoods } from '../db/query.js';

export const homeRouter = Router();

function getRandomItems(arr, count) {
    return arr.sort(() => 0.5 - Math.random()).slice(0, count);
}

homeRouter.get('/', async (req, res) => {
    const goods = await getGoods();

    const phones = getRandomItems(goods.phones, 4);
    const laptops = getRandomItems(goods.laptops, 4);

    const someGoods = {
        phones: phones,
        laptops: laptops
    }

    res.render('main', { categories: someGoods });
});
