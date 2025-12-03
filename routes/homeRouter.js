import { Router } from 'express';
import { getItemsByCategory } from '../db/query/goods.js';

export const homeRouter = Router();

function getRandomItems(arr, count) {
    return arr.sort(() => 0.5 - Math.random()).slice(0, count);
}

homeRouter.get('/', async (req, res) => {
    const phones = await getItemsByCategory('phones');
    const laptops = await getItemsByCategory('laptops');

    const someGoods = {
        phones: getRandomItems(phones, 4),
        laptops: getRandomItems(laptops, 4)
    };

    res.render('main', { categories: someGoods });
});
